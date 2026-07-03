const VOCES_TTS = {
  synthesis: window.speechSynthesis,
  voice: null,
  isSpeaking: false,
  isListening: false,
  recognition: null,
  onResult: null,
  onListeningChange: null,

  init() {
    if (!window.speechSynthesis) { console.warn('TTS no soportado'); return; }
    this.loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined)
      speechSynthesis.onvoiceschanged = () => this.loadVoices();

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SR();
      this.recognition.lang = 'es-ES';
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;

      this.recognition.onresult = (e) => {
        const last = e.results.length - 1;
        const transcript = e.results[last][0].transcript;
        if (this.onResult) this.onResult(transcript, e.results[last].isFinal);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (this.onListeningChange) this.onListeningChange(false);
      };

      this.recognition.onerror = (e) => {
        console.warn('Speech recognition error:', e.error);
        this.isListening = false;
        if (this.onListeningChange) this.onListeningChange(false);
      };
    }
  },

  loadVoices() {
    const voices = this.synthesis.getVoices();
    this.voice = voices.find(v => v.lang.startsWith('es') && v.name.includes('Microsoft'))
      || voices.find(v => v.lang.startsWith('es'))
      || voices[0] || null;
  },

  speak(text, onEnd) {
    if (!this.synthesis) return;
    this.synthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.88;
    utterance.pitch = 1.0;
    utterance.volume = 1;
    this.loadVoices();
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
      alert('El reconocimiento de voz no está disponible en este navegador. Prueba con Chrome o Edge.');
      return;
    }
    if (this.isListening) return;
    this.isListening = true;
    if (this.onListeningChange) this.onListeningChange(true);
    try { this.recognition.start(); } catch(e) { this.isListening = false; }
  },

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  },

  isSupported() {
    return !!(window.speechSynthesis && (window.SpeechRecognition || window.webkitSpeechRecognition));
  }
};
