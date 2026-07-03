const VOCES_TTS = {
  synthesis: window.speechSynthesis,
  voice: null,
  voiceName: '',
  isSpeaking: false,
  isListening: false,
  recognition: null,
  onResult: null,
  onListeningChange: null,
  autoRestart: false,
  manualStop: false,
  pttMode: false,

  init() {
    if (!window.speechSynthesis) { console.warn('TTS no soportado'); return; }
    this.loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined)
      speechSynthesis.onvoiceschanged = () => this.loadVoices();

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
        if (this.isListening && !this.manualStop && this.autoRestart) {
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
    console.log('Voces disponibles:', voices.map(v => v.name + ' (' + v.lang + ')').join(', '));
    const preferred = [
      'Google español',
      'Google español de Estados Unidos',
      'Microsoft Sabina',
      'Microsoft Helena',
      'Microsoft Laura',
      'Microsoft Pablo',
      'es-ES'
    ];
    for (const name of preferred) {
      this.voice = voices.find(v => v.name.includes(name));
      if (this.voice) { this.voiceName = this.voice.name; break; }
    }
    if (!this.voice) this.voice = voices.find(v => v.lang.startsWith('es')) || voices[0] || null;
    if (this.voice) this.voiceName = this.voice.name;
    console.log('Voz seleccionada:', this.voiceName);
  },

  speak(text, onEnd) {
    if (!this.synthesis) return;
    this.synthesis.cancel();
    this.loadVoices();
    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-CR';
    utterance.rate = 0.8;
    utterance.pitch = 0.9;
    utterance.volume = 1;
    if (this.voice) utterance.voice = this.voice;

    this.isSpeaking = true;
    utterance.onend = () => { this.isSpeaking = false; if (onEnd) onEnd(); };
    utterance.onerror = () => { this.isSpeaking = false; };
    this.synthesis.speak(utterance);
  },

  stop() {
    if (this.synthesis) this.synthesis.cancel();
    this.isSpeaking = false;
  },

  startListening() {
    if (!this.recognition) {
      alert('El reconocimiento de voz no está disponible en este navegador. Prueba con Chrome, Edge o Brave.');
      return;
    }
    if (this.isListening) return;
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

  startPTT() {
    this.pttMode = true;
    this.autoRestart = false;
    this.startListening();
  },

  stopPTT(callback) {
    this.pttMode = false;
    if (this.recognition && this.isListening) {
      this.manualStop = true;
      try { this.recognition.stop(); } catch(e) {}
      this.isListening = false;
      if (this.onListeningChange) this.onListeningChange(false);
      if (callback) setTimeout(callback, 200);
    } else {
      if (callback) callback();
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
