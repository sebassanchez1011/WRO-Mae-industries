const VOCES_TTS = {
  synthesis: window.speechSynthesis,
  voice: null,
  voiceName: '',
  isSpeaking: false,
  isListening: false,
  recognition: null,
  onResult: null,
  onListeningChange: null,
  manualStop: false,
  cloudKey: localStorage.getItem('googleTTSKey') || '',
  cloudEnabled: !!localStorage.getItem('googleTTSKey'),
  cloudAudio: null,

  init() {
    if (!window.speechSynthesis) { console.warn('TTS no soportado'); return; }
    this.loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => {
        this.loadVoices();
      };
    }
    setTimeout(() => this.loadVoices(), 500);

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      this.recognition = new SR();
      this.recognition.lang = 'es-CR';
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 3;

      this.recognition.onresult = (e) => {
        let finalTranscript = '';
        let interimTranscript = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const transcript = e.results[i][0].transcript;
          if (e.results[i].isFinal) finalTranscript += transcript;
          else interimTranscript += transcript;
        }
        if (this.onResult) this.onResult(finalTranscript || interimTranscript, !!finalTranscript);
      };

      this.recognition.onend = () => {
        if (this.isListening && !this.manualStop) {
          try { this.recognition.start(); } catch(e) {}
        } else {
          this.isListening = false;
          this.manualStop = false;
          if (this.onListeningChange) this.onListeningChange(false);
        }
      };

      this.recognition.onerror = (e) => {
        if (e.error === 'no-speech' || e.error === 'aborted') return;
        console.warn('Speech error:', e.error);
        this.isListening = false;
        if (this.onListeningChange) this.onListeningChange(false);
      };
    }
  },

  loadVoices() {
    const voices = this.synthesis.getVoices();
    if (voices && voices.length > 0) {
      console.log('Voces disponibles:', voices.map(v => v.name + ' (' + v.lang + ')').join(', '));
      this.voice = voices.find(v => /Google español|Google.*español|Spanish.*Google/i.test(v.name)) || null;
      if (!this.voice) {
        this.voice = voices.find(v => /raul|Raul|RAUL|Microsoft.*Raul/i.test(v.name)) || null;
      }
      if (!this.voice) {
        this.voice = voices.find(v => /helena|sabina|pablo|jorge|Microsoft.*Spanish|spanish.*microsoft/i.test(v.name)) || null;
      }
      if (!this.voice) {
        this.voice = voices.find(v => v.lang && v.lang.startsWith('es')) || null;
      }
      if (this.voice) {
        this.voiceName = this.voice.name;
        console.log('Voz seleccionada:', this.voiceName);
      } else {
        console.warn('No se encontró ninguna voz en español');
      }
    } else {
      console.warn('Voces aún no cargadas, reintentando...');
    }
  },

  setCloudKey(key) {
    this.cloudKey = key;
    this.cloudEnabled = !!key;
    if (key) localStorage.setItem('googleTTSKey', key);
    else localStorage.removeItem('googleTTSKey');
    console.log(key ? 'Cloud TTS configurado' : 'Cloud TTS desactivado');
  },

  speak(text, onEnd) {
    if (!this.synthesis) return;
    this.stop();
    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    if (!cleanText) return;

    if (this.cloudEnabled && this.cloudKey) {
      this.speakCloud(cleanText).then(success => {
        if (!success) this.speakBrowser(cleanText, onEnd);
        else if (onEnd) onEnd();
      });
    } else {
      this.speakBrowser(cleanText, onEnd);
    }
  },

  async speakCloud(text) {
    try {
      const resp = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize?key=' + this.cloudKey, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: 'es-US', name: 'es-US-Neural2-V3' },
          audioConfig: { audioEncoding: 'MP3', speakingRate: 0.9 }
        })
      });
      if (!resp.ok) { console.warn('Google TTS error:', resp.status); return false; }
      const data = await resp.json();
      if (!data.audioContent) return false;
      this.isSpeaking = true;

      const bin = atob(data.audioContent);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const blob = new Blob([bytes], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);

      return new Promise(resolve => {
        this.cloudAudio = new Audio(url);
        this.cloudAudio.onended = () => { URL.revokeObjectURL(url); this.isSpeaking = false; resolve(true); };
        this.cloudAudio.onerror = () => { URL.revokeObjectURL(url); this.isSpeaking = false; resolve(false); };
        this.cloudAudio.play().catch(() => { URL.revokeObjectURL(url); this.isSpeaking = false; resolve(false); });
      });
    } catch (e) { console.warn('Cloud TTS falló:', e); return false; }
  },

  speakBrowser(text, onEnd) {
    this.loadVoices();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.volume = 1;
    if (this.voice) utterance.voice = this.voice;
    if (!this.voice) {
      const v = this.synthesis.getVoices();
      const es = v.find(x => /raul|Raul/i.test(x.name)) || v.find(x => /helena|sabina|pablo|jorge|spanish.*microsoft/i.test(x.name)) || v.find(x => x.lang && x.lang.startsWith('es'));
      if (es) { utterance.voice = es; this.voice = es; this.voiceName = es.name; }
    }

    this.isSpeaking = true;
    utterance.onend = () => { this.isSpeaking = false; if (onEnd) onEnd(); };
    utterance.onerror = () => { this.isSpeaking = false; };
    this.synthesis.speak(utterance);
  },

  stop() {
    if (this.synthesis) this.synthesis.cancel();
    if (this.cloudAudio) { this.cloudAudio.pause(); this.cloudAudio.src = ''; this.cloudAudio = null; }
    this.isSpeaking = false;
  },

  startListening() {
    if (!this.recognition) {
      alert('El reconocimiento de voz no está disponible en este navegador. Prueba con Chrome, Edge o Brave.');
      return;
    }
    if (this.isListening) { this.stopListening(); return; }
    this.manualStop = false;
    this.isListening = true;
    if (this.onListeningChange) this.onListeningChange(true);
    try { this.recognition.start(); } catch(e) { this.isListening = false; }
  },

  stopListening() {
    if (this.recognition && this.isListening) {
      this.manualStop = true;
      try { this.recognition.stop(); } catch(e) {}
      this.isListening = false;
      if (this.onListeningChange) this.onListeningChange(false);
    }
  },

  toggleListening() {
    if (this.isListening) this.stopListening();
    else this.startListening();
  },

  isSupported() {
    return !!(window.speechSynthesis && (window.SpeechRecognition || window.webkitSpeechRecognition));
  }
};
