const VOCES_TTS = {
  synthesis: window.speechSynthesis,
  voice: null,
  voiceName: '',
  isSpeaking: false,
  isListening: false,
  recognition: null,
  manualStop: false,
  onResult: null,
  onListeningChange: null,
  onStatus: null,
  onError: null,
  cloudKey: localStorage.getItem('googleTTSKey') || '',
  cloudEnabled: !!localStorage.getItem('googleTTSKey'),
  cloudAudio: null,
  speechQueue: [],

  init() {
    if (this.synthesis) {
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
      setTimeout(() => this.loadVoices(), 300);
      setTimeout(() => this.loadVoices(), 1000);
    } else {
      console.warn('TTS no soportado');
      this.emitError('La voz del navegador no está disponible.');
    }

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      this.emitError('El reconocimiento de voz no está disponible en este navegador.');
      return;
    }

    this.recognition = new SR();
    this.recognition.lang = 'es-CR';
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;

    this.recognition.onstart = () => {
      this.isListening = true;
      this.emitStatus('Escuchando... habla claro cerca del micrófono.');
      if (this.onListeningChange) this.onListeningChange(true);
    };

    this.recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript.trim();
        if (event.results[i].isFinal) finalTranscript += `${transcript} `;
        else interimTranscript += `${transcript} `;
      }

      const finalText = finalTranscript.trim();
      const interimText = interimTranscript.trim();
      if (finalText) {
        this.emitStatus('Pregunta recibida. Preparando respuesta...');
        if (this.onResult) this.onResult(finalText, true);
      } else if (interimText) {
        this.emitStatus(`Escuchando: "${interimText}"`);
        if (this.onResult) this.onResult(interimText, false);
      }
    };

    this.recognition.onend = () => {
      this.isListening = false;
      this.manualStop = false;
      if (this.onListeningChange) this.onListeningChange(false);
      this.emitStatus('Micrófono listo.');
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      if (this.onListeningChange) this.onListeningChange(false);

      const messages = {
        'no-speech': 'No escuché una pregunta. Intentalo otra vez.',
        'audio-capture': 'No pude acceder al micrófono. Revisá que esté conectado.',
        'not-allowed': 'El navegador bloqueó el micrófono. Permití el acceso para preguntar por voz.',
        network: 'El reconocimiento de voz necesita conexión del navegador. Probá con Chrome o Edge.',
        aborted: 'Escucha cancelada.'
      };

      const message = messages[event.error] || `Error de micrófono: ${event.error}`;
      console.warn('Speech error:', event.error);
      this.emitError(message);
    };
  },

  loadVoices() {
    if (!this.synthesis) return;
    const voices = this.synthesis.getVoices();
    if (!voices || voices.length === 0) {
      this.emitStatus('Cargando voces del navegador...');
      return;
    }

    this.voice = this.pickBestVoice(voices);
    if (this.voice) {
      this.voiceName = this.voice.name;
      this.emitStatus(`Voz lista: ${this.voiceName}`);
    } else {
      this.emitStatus('No encontré una voz en español; usaré la voz predeterminada.');
    }
  },

  pickBestVoice(voices) {
    const spanishVoices = voices.filter((voice) => {
      const name = normalizeText(voice.name);
      const lang = normalizeText(voice.lang || '');
      return lang.startsWith('es') || name.includes('spanish') || name.includes('espanol');
    });
    const candidates = spanishVoices.length ? spanishVoices : voices;

    return [...candidates].sort((a, b) => this.voiceScore(b) - this.voiceScore(a))[0] || null;
  },

  voiceScore(voice) {
    const name = normalizeText(voice.name);
    const lang = normalizeText(voice.lang || '');
    let score = 0;

    if (lang === 'es-cr') score += 120;
    if (lang.startsWith('es')) score += 80;
    if (name.includes('natural')) score += 90;
    if (name.includes('online')) score += 75;
    if (name.includes('neural')) score += 70;
    if (name.includes('google')) score += 55;
    if (name.includes('microsoft')) score += 50;

    const preferredNames = [
      'maria', 'dalia', 'sabina', 'elvira', 'helena', 'monica',
      'paulina', 'paloma', 'laura', 'jorge', 'raul', 'alvaro', 'pablo'
    ];
    preferredNames.forEach((item, index) => {
      if (name.includes(item)) score += 45 - index;
    });

    if (lang === 'es-mx') score += 30;
    if (lang === 'es-us') score += 24;
    if (lang === 'es-es') score += 18;
    if (voice.localService === false) score += 14;

    return score;
  },

  setCloudKey(key) {
    this.cloudKey = key;
    this.cloudEnabled = !!key;
    if (key) localStorage.setItem('googleTTSKey', key);
    else localStorage.removeItem('googleTTSKey');
    this.emitStatus(key ? 'Voz cloud configurada.' : 'Voz cloud desactivada; usaré voz natural del navegador.');
  },

  speak(text, onEnd) {
    if (!this.synthesis) {
      this.emitError('La voz del navegador no está disponible.');
      return;
    }

    this.stop();
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (!cleanText) return;

    if (this.cloudEnabled && this.cloudKey) {
      this.speakCloud(cleanText).then((success) => {
        if (!success) this.speakBrowser(cleanText, onEnd);
        else if (onEnd) onEnd();
      });
    } else {
      this.speakBrowser(cleanText, onEnd);
    }
  },

  async speakCloud(text) {
    try {
      const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${this.cloudKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: 'es-US', name: 'es-US-Neural2-F' },
          audioConfig: { audioEncoding: 'MP3', speakingRate: 0.92, pitch: 0 }
        })
      });

      if (!response.ok) {
        console.warn('Google TTS error:', response.status);
        return false;
      }

      const data = await response.json();
      if (!data.audioContent) return false;

      const binary = atob(data.audioContent);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

      const blob = new Blob([bytes], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);

      return new Promise((resolve) => {
        this.cloudAudio = new Audio(url);
        this.isSpeaking = true;
        this.emitStatus('Respondiendo con voz cloud.');
        this.cloudAudio.onended = () => {
          URL.revokeObjectURL(url);
          this.isSpeaking = false;
          resolve(true);
        };
        this.cloudAudio.onerror = () => {
          URL.revokeObjectURL(url);
          this.isSpeaking = false;
          resolve(false);
        };
        this.cloudAudio.play().catch(() => {
          URL.revokeObjectURL(url);
          this.isSpeaking = false;
          resolve(false);
        });
      });
    } catch (error) {
      console.warn('Cloud TTS falló:', error);
      return false;
    }
  },

  speakBrowser(text, onEnd) {
    this.loadVoices();
    this.speechQueue = splitForSpeech(text);
    this.isSpeaking = true;
    this.emitStatus(this.voiceName ? `Respondiendo con ${this.voiceName}.` : 'Respondiendo con voz del navegador.');
    this.speakNextChunk(onEnd);
  },

  speakNextChunk(onEnd) {
    if (!this.speechQueue.length) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
      return;
    }

    const chunk = this.speechQueue.shift();
    const utterance = new SpeechSynthesisUtterance(chunk);
    utterance.lang = this.voice?.lang || 'es-CR';
    utterance.rate = 0.92;
    utterance.pitch = 1.03;
    utterance.volume = 1;
    if (this.voice) utterance.voice = this.voice;

    utterance.onend = () => this.speakNextChunk(onEnd);
    utterance.onerror = () => {
      this.isSpeaking = false;
      this.speechQueue = [];
      if (onEnd) onEnd();
    };

    this.synthesis.speak(utterance);
  },

  stop() {
    if (this.synthesis) this.synthesis.cancel();
    if (this.cloudAudio) {
      this.cloudAudio.pause();
      this.cloudAudio.src = '';
      this.cloudAudio = null;
    }
    this.speechQueue = [];
    this.isSpeaking = false;
  },

  startListening() {
    if (!this.recognition) {
      this.emitError('El reconocimiento de voz no está disponible en este navegador. Probá con Chrome o Edge.');
      alert('El reconocimiento de voz no está disponible en este navegador. Probá con Chrome o Edge.');
      return;
    }

    if (this.isListening) {
      this.stopListening();
      return;
    }

    this.stop();
    this.manualStop = false;
    this.emitStatus('Activando micrófono...');
    try {
      this.recognition.start();
    } catch (error) {
      console.warn('No se pudo iniciar el micrófono:', error);
      this.isListening = false;
      this.emitError('No pude iniciar el micrófono. Esperá un segundo e intentá de nuevo.');
      if (this.onListeningChange) this.onListeningChange(false);
    }
  },

  stopListening() {
    if (!this.recognition || !this.isListening) return;
    this.manualStop = true;
    try {
      this.recognition.stop();
    } catch (error) {
      console.warn('No se pudo detener el micrófono:', error);
    }
    this.isListening = false;
    if (this.onListeningChange) this.onListeningChange(false);
    this.emitStatus('Micrófono detenido.');
  },

  toggleListening() {
    if (this.isListening) this.stopListening();
    else this.startListening();
  },

  isSupported() {
    return !!(window.speechSynthesis && (window.SpeechRecognition || window.webkitSpeechRecognition));
  },

  emitStatus(message) {
    if (this.onStatus) this.onStatus(message);
  },

  emitError(message) {
    if (this.onError) this.onError(message);
    else console.warn(message);
  }
};

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function splitForSpeech(text, maxLength = 190) {
  const sentences = String(text || '')
    .replace(/\s+/g, ' ')
    .match(/[^.!?;:]+[.!?;:]?|[^.!?;:]+$/g) || [];

  const chunks = [];
  let current = '';

  sentences.forEach((sentence) => {
    const clean = sentence.trim();
    if (!clean) return;

    if ((current + ' ' + clean).trim().length <= maxLength) {
      current = (current + ' ' + clean).trim();
      return;
    }

    if (current) chunks.push(current);
    if (clean.length <= maxLength) {
      current = clean;
      return;
    }

    const words = clean.split(' ');
    current = '';
    words.forEach((word) => {
      if ((current + ' ' + word).trim().length > maxLength) {
        if (current) chunks.push(current);
        current = word;
      } else {
        current = (current + ' ' + word).trim();
      }
    });
  });

  if (current) chunks.push(current);
  return chunks.length ? chunks : [text];
}

window.VOCES_TTS = VOCES_TTS;
