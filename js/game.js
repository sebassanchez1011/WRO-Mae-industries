const VOCES_GAME = {
  currentRound: [],
  currentIndex: 0,
  score: 0,
  lives: 3,
  totalRounds: 10,
  gameOver: false,

  generateQuestions(count) {
    const pool = VOCES.qa.filter(e => e.pregunta && e.respuesta);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = [];

    for (const entry of shuffled) {
      if (selected.length >= count) break;
      const answer = entry.respuesta.replace(/<[^>]*>/g, '').split('.')[0] + '.';
      if (answer.length < 3) continue;

      const wrong = this._getWrongAnswers(entry.categoria, answer, 3);
      if (wrong.length < 3) continue;
      if (wrong.includes(answer)) continue;

      selected.push({
        question: entry.pregunta.charAt(0).toUpperCase() + entry.pregunta.slice(1),
        options: this._shuffle([answer, ...wrong]),
        correct: answer,
        category: entry.categoria
      });
    }
    return selected;
  },

  _getWrongAnswers(cat, correct, count) {
    const pool = VOCES.qa.filter(e => e.categoria === cat);
    const answers = [...new Set(
      pool.map(e => e.respuesta.replace(/<[^>]*>/g, '').split('.')[0] + '.')
    )].filter(a => a !== correct && a.length > 3);
    return answers.sort(() => Math.random() - 0.5).slice(0, count);
  },

  _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  startGame() {
    this.currentRound = this.generateQuestions(this.totalRounds);
    this.currentIndex = 0;
    this.score = 0;
    this.lives = 3;
    this.gameOver = false;
  },

  getCurrentQuestion() {
    if (this.currentIndex >= this.currentRound.length || this.lives <= 0) {
      this.gameOver = true;
      return null;
    }
    return this.currentRound[this.currentIndex];
  },

  submitAnswer(answer) {
    const q = this.getCurrentQuestion();
    if (!q) return { correct: false, gameOver: true };

    const isCorrect = answer === q.correct;
    if (isCorrect) this.score += 10;
    else this.lives--;

    this.currentIndex++;
    const finished = this.currentIndex >= this.currentRound.length || this.lives <= 0;
    if (finished) this.gameOver = true;

    return {
      correct: isCorrect,
      correctAnswer: q.correct,
      score: this.score,
      lives: this.lives,
      gameOver: this.gameOver,
      finished: finished,
      total: this.currentRound.length,
      answered: this.currentIndex
    };
  },

  getHighScores() {
    try { return JSON.parse(localStorage.getItem('voces_game_scores') || '[]'); }
    catch { return []; }
  },

  saveScore(name) {
    const scores = this.getHighScores();
    scores.push({ name, score: this.score, date: new Date().toISOString().split('T')[0] });
    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('voces_game_scores', JSON.stringify(scores.slice(0, 10)));
  }
};