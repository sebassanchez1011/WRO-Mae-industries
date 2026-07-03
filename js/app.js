document.addEventListener('DOMContentLoaded', () => {

  VOCES_TTS.init();
  let currentQuery = '';
  let lastAnimacion = '';
  let currentCategory = null;

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const pages = {
    home: () => { renderHome(); },
    preguntar: () => { renderQA(); },
    explorar: () => { renderExplore(); },
    pueblos: () => { renderPueblos(); },
    glosario: () => { renderGlosario(); }
  };

  window.navigateTo = function(page, cat) {
    if (cat) currentCategory = cat;
    $$('.section').forEach(s => s.classList.remove('active'));
    const section = document.getElementById('page-' + page);
    if (section) section.classList.add('active');
    $$('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.page === page));
    if (pages[page]) pages[page]();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function navigate(page) {
    window.navigateTo(page);
  }

  $$('.nav-links a').forEach(a => {
    a.addEventListener('click', (e) => { e.preventDefault(); navigate(a.dataset.page); });
  });

  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) navLinks.classList.remove('open');
  });

  function renderHome() {
    const container = document.getElementById('home-content');
    if (container.dataset.rendered) return;
    container.dataset.rendered = 'true';

    const frases = [
      '"La tierra no es herencia de nuestros padres, es préstamo de nuestros hijos"',
      '"El agua es la sangre de la tierra" — Sabiduría Bribri',
      '"Hablar nuestra lengua es mantener viva el alma del pueblo"',
      '"El maíz es el hijo del sol y la luna" — Cosmovisión Ngäbe',
      '"Cada río tiene un espíritu, cada montaña un guardián"',
      '"La palabra es sagrada: una vez dicha, vuela para siempre"'
    ];

    let fraseIdx = 0;
    const fraseEl = container.querySelector('.phrase-text');
    if (fraseEl) {
      setInterval(() => {
        fraseIdx = (fraseIdx + 1) % frases.length;
        fraseEl.style.opacity = '0';
        setTimeout(() => {
          fraseEl.textContent = frases[fraseIdx];
          fraseEl.style.opacity = '1';
        }, 500);
      }, 5000);
    }
  }

  function renderQA() {
    const input = document.getElementById('qa-input');
    const sendBtn = document.getElementById('qa-send');
    const voiceBtn = document.getElementById('qa-voice');
    const response = document.getElementById('qa-response');
    const suggestions = document.getElementById('qa-suggestions');
    const voiceIndicator = document.getElementById('voice-indicator');

    if (!input || input.dataset.initialized) return;
    input.dataset.initialized = '1';

    renderSuggestions(currentCategory);

    suggestions.addEventListener('click', (e) => {
      const chip = e.target.closest('.suggestion-chip');
      if (chip) {
        input.value = chip.textContent;
        processQuery(input.value);
      }
    });

    sendBtn.addEventListener('click', () => processQuery(input.value));
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') processQuery(input.value); });

    voiceBtn.addEventListener('click', (e) => {
      e.preventDefault();
      VOCES_TTS.toggleListening();
    });

    VOCES_TTS.onResult = (transcript, isFinal) => {
      if (isFinal) {
        input.value = transcript;
        voiceBtn.classList.remove('has-transcript');
        processQuery(transcript);
      } else {
        input.value = transcript;
        voiceBtn.classList.add('has-transcript');
        voiceIndicator.querySelector('.label').textContent = `"${transcript}"`;
      }
    };

    VOCES_TTS.onListeningChange = (listening) => {
      if (listening) {
        voiceBtn.classList.add('listening');
        voiceIndicator.classList.add('active');
      } else {
        voiceBtn.classList.remove('listening');
        voiceBtn.classList.remove('has-transcript');
        voiceIndicator.classList.remove('active');
      }
    };

    const listenIndicator = document.getElementById('listening-indicator');
    if (!VOCES_TTS.isSupported()) {
      voiceBtn.style.display = 'none';
    }
  }

  function renderSuggestions(cat) {
    const suggestions = document.getElementById('qa-suggestions');
    if (!suggestions) return;
    const sugs = VOCES_QA.getSuggestions(cat);
    suggestions.innerHTML = sugs.map(s =>
      `<button class="suggestion-chip">${s.pregunta}</button>`
    ).join('');
  }

  function processQuery(query) {
    if (!query || !query.trim()) return;
    const q = query.trim();
    currentQuery = q;

    const result = VOCES_QA.findAnswer(q);
    const response = document.getElementById('qa-response');
    const input = document.getElementById('qa-input');

    if (!result) {
      const fallback = 'Aún no tengo esa sabiduría registrada. Los abuelos siguen compartiendo este conocimiento. Prueba preguntando sobre lenguas, comidas, medicina, arte o cultura indígena.';
      response.innerHTML = `
        <div class="response-card">
          <div class="response-category">Sabiduría</div>
          <div class="response-text">${fallback}</div>
          <div class="anim-container"><div class="anim-scene anim-cosmovision"><div class="tree-world">🌳</div><div class="stars">✦</div></div></div>
        </div>
      `;
      response.classList.add('visible');
      VOCES_TTS.speak(fallback);
      return;
    }

    let animHtml = '';
    const an = result.animacion || 'cosmovision';
    lastAnimacion = an;

    const anims = {
      saludo: '<div class="anim-scene anim-saludo"><div class="sun"></div><div class="figure">🧑🏽</div></div>',
      naturaleza: '<div class="anim-scene anim-naturaleza"><div class="ground"></div><div class="tree"></div></div>',
      comida: '<div class="anim-scene anim-comida"><div class="pot">🍲</div></div>',
      medicina: '<div class="anim-scene anim-medicina"><div class="plant">🌿</div><div class="drop">💧</div></div>',
      arte: '<div class="anim-scene anim-arte"><div class="pattern-draw"></div></div>',
      ceremonia: '<div class="anim-scene anim-ceremonia"><div class="fire">🔥</div><div class="figures">🧑🏽🧑🏽🧑🏽</div></div>',
      cosmovision: '<div class="anim-scene anim-cosmovision"><div class="tree-world">🌳</div><div class="stars">✦ ✦ ✦</div></div>'
    };
    animHtml = `<div class="anim-container">${anims[an] || anims.cosmovision}</div>`;

    const catLabels = { lengua: 'Lengua', comida: 'Alimentación', medicina: 'Medicina', arte: 'Arte', cultura: 'Cultura' };

    const cleanResponse = result.respuesta.replace(/<[^>]*>/g, '');

    response.innerHTML = `
      <div class="response-card">
        <div class="response-category">${catLabels[result.categoria] || 'Sabiduría'}</div>
        <div class="response-text">${result.respuesta}</div>
        ${animHtml}
        <div class="response-actions">
          <button id="btn-speak" class="btn-speak speaking">⏹ Detener</button>
          <button id="btn-copy">📋 Copiar</button>
        </div>
      </div>
    `;
    response.classList.add('visible');

    VOCES_TTS.speak(cleanResponse, () => {
      const btn = document.getElementById('btn-speak');
      if (btn) { btn.classList.remove('speaking'); btn.textContent = '🔊 Escuchar'; }
    });

    document.getElementById('btn-speak').addEventListener('click', () => {
      const btn = document.getElementById('btn-speak');
      if (VOCES_TTS.isSpeaking) {
        VOCES_TTS.stop();
        btn.classList.remove('speaking');
        btn.textContent = '🔊 Escuchar';
      } else {
        VOCES_TTS.speak(cleanResponse, () => {
          btn.classList.remove('speaking');
          btn.textContent = '🔊 Escuchar';
        });
        btn.classList.add('speaking');
        btn.textContent = '⏹ Detener';
      }
    });

    document.getElementById('btn-copy').addEventListener('click', () => {
      navigator.clipboard.writeText(cleanResponse).then(() => {
        const btn = document.getElementById('btn-copy');
        btn.textContent = '✓ Copiado';
        setTimeout(() => { btn.textContent = '📋 Copiar'; }, 2000);
      });
    });
  }

  function renderExplore() {
    const grid = document.getElementById('explore-grid');
    if (grid.dataset.rendered) return;
    grid.dataset.rendered = 'true';

    const cats = [
      { id: 'lengua', icon: '🗣️', title: 'Lenguas', desc: 'Palabras y frases en las 7 lenguas indígenas', count: countQAByCat('lengua') },
      { id: 'comida', icon: '🌽', title: 'Alimentación', desc: 'Platos típicos, ingredientes y comida ceremonial', count: countQAByCat('comida') },
      { id: 'medicina', icon: '🌿', title: 'Medicina', desc: 'Plantas medicinales y prácticas de sanación', count: countQAByCat('medicina') },
      { id: 'arte', icon: '🎨', title: 'Arte', desc: 'Artesanía, símbolos, técnicas y colores naturales', count: countQAByCat('arte') },
      { id: 'cultura', icon: '🌎', title: 'Cultura', desc: 'Cosmovisión, ceremonias, historia y tradiciones', count: countQAByCat('cultura') }
    ];

    grid.innerHTML = cats.map(c => `
      <div class="explore-card" data-cat="${c.id}">
        <div class="icon">${c.icon}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="count">${c.count} temas</div>
      </div>
    `).join('');

    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.explore-card');
      if (card) {
        const cat = card.dataset.cat;
        currentCategory = cat;
        navigate('preguntar');
        setTimeout(() => {
          renderSuggestions(cat);
          const input = document.getElementById('qa-input');
          if (input) {
            const catNames = { lengua: 'dime palabras en lenguas indígenas', comida: 'háblame de comida indígena', medicina: 'qué plantas medicinales usan', arte: 'cuéntame del arte indígena', cultura: 'háblame de la cultura indígena' };
            input.value = catNames[cat] || cat;
            processQuery(input.value);
          }
        }, 300);
      }
    });
  }

  function countQAByCat(cat) {
    return VOCES.qa.filter(e => e.categoria === cat).length;
  }

  function renderPueblos() {
    const grid = document.getElementById('pueblos-grid');
    if (grid.dataset.rendered) return;
    grid.dataset.rendered = 'true';

    const langEntries = Object.entries(VOCES.languages);
    grid.innerHTML = langEntries.map(([id, lang]) => `
      <div class="pueblo-card" data-lang="${id}">
        <div class="name">${lang.name}</div>
        <div class="name-native">${lang.nameNative} ${lang.speakers > 0 ? `· ${lang.speakers.toLocaleString()} hablantes` : ''}</div>
        <div class="region">📍 ${lang.region}</div>
        <div class="speakers">Familia ${lang.family}</div>
      </div>
    `).join('');

    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.pueblo-card');
      if (card) {
        const langId = card.dataset.lang;
        showPuebloDetail(langId);
      }
    });
  }

  function showPuebloDetail(id) {
    const lang = VOCES.languages[id];
    if (!lang) return;

    const detail = document.getElementById('pueblo-detail');
    const grid = document.getElementById('pueblos-grid');

    grid.style.display = 'none';
    detail.classList.add('visible');

    let wordsHtml = '';
    for (const [cat, catWords] of Object.entries(lang.words)) {
      if (catWords.length > 0) {
        const catName = {saludos:'Saludos',numeros:'Números',naturaleza:'Naturaleza',familia:'Familia',cotidianas:'Cotidianas',cultura_historica:'Historia'};
        wordsHtml += `<h4 style="color:var(--turquesa);margin:1rem 0 0.5rem;font-size:0.9rem;">${catName[cat] || cat}</h4>`;
        wordsHtml += `<table class="glosario-table"><tbody>`;
        catWords.forEach(w => {
          wordsHtml += `<tr><td class="word-native">${w.native}</td><td>${w.es}</td><td style="color:#666;font-size:0.8rem;">${w.pron ? `/${w.pron}/` : ''}</td></tr>`;
        });
        wordsHtml += `</tbody></table>`;
      }
    }

    let tradicionesHtml = '';
    if (lang.cultura && lang.cultura.tradiciones) {
      tradicionesHtml = `
        <h4 style="color:var(--oro);margin-top:1.5rem;">Tradiciones</h4>
        <ul style="color:#aaa;margin-top:0.5rem;">
          ${lang.cultura.tradiciones.map(t => `<li style="margin-bottom:0.5rem;">${t}</li>`).join('')}
        </ul>
      `;
    }

    detail.innerHTML = `
      <button class="back-btn" onclick="document.getElementById('pueblo-detail').classList.remove('visible'); document.getElementById('pueblos-grid').style.display='grid';">← Volver</button>
      <h3>${lang.name} <span style="color:#666;font-size:1rem;font-style:italic;">${lang.nameNative}</span></h3>
      <p style="color:#888;margin-top:0.3rem;"><strong>Región:</strong> ${lang.region} · <strong>Familia:</strong> ${lang.family} · <strong>Hablantes:</strong> ${lang.speakers.toLocaleString()}</p>
      <p style="color:#aaa;margin-top:1rem;">${lang.description}</p>
      ${lang.cultura ? `<p style="color:#bbb;margin-top:1rem;font-style:italic;">"${lang.cultura.cosmovision}"</p>` : ''}
      ${tradicionesHtml}
      ${wordsHtml ? `<h4 style="color:var(--oro);margin-top:1.5rem;">Vocabulario</h4>${wordsHtml}` : ''}
    `;
  }

  function renderGlosario() {
    const tbody = document.getElementById('glosario-body');
    const filterLang = document.getElementById('glosario-lang');
    const filterCat = document.getElementById('glosario-cat');
    const searchInput = document.getElementById('glosario-search');
    if (!tbody || tbody.dataset.rendered) return;
    tbody.dataset.rendered = 'true';

    const catNames = {saludos:'Saludos',numeros:'Números',naturaleza:'Naturaleza',familia:'Familia',cotidianas:'Cotidianas',cultura_historica:'Historia'};

    let allWords = [];
    for (const [id, lang] of Object.entries(VOCES.languages)) {
      for (const [cat, words] of Object.entries(lang.words)) {
        for (const word of words) {
          allWords.push({ ...word, langId: id, langName: lang.name, cat, catName: catNames[cat] || cat });
        }
      }
    }

    filterLang.innerHTML = '<option value="all">Todas las lenguas</option>' +
      Object.entries(VOCES.languages).map(([id, l]) => `<option value="${id}">${l.name}</option>`).join('');

    filterCat.innerHTML = '<option value="all">Todas las categorías</option>' +
      Object.entries(catNames).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');

    function renderGlosario() {
      const lang = filterLang.value;
      const cat = filterCat.value;
      const search = searchInput.value.toLowerCase();

      let filtered = allWords;
      if (lang !== 'all') filtered = filtered.filter(w => w.langId === lang);
      if (cat !== 'all') filtered = filtered.filter(w => w.cat === cat);
      if (search) filtered = filtered.filter(w =>
        w.es.toLowerCase().includes(search) ||
        w.native.toLowerCase().includes(search) ||
        w.langName.toLowerCase().includes(search)
      );

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#666;padding:2rem;">No se encontraron palabras</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(w => `
        <tr onclick="document.getElementById('qa-input')?.focus();">
          <td><span style="color:var(--oro);font-weight:600;">${w.native}</span></td>
          <td>${w.es}</td>
          <td style="color:#555;font-style:italic;">${w.pron ? `/${w.pron}/` : '—'}</td>
          <td style="color:#888;">${w.langName}</td>
        </tr>
      `).join('');
    }

    filterLang.addEventListener('change', renderGlosario);
    filterCat.addEventListener('change', renderGlosario);
    searchInput.addEventListener('input', renderGlosario);
    renderGlosario();
  }

  const heroPhrases = document.querySelector('.phrase-text');
  if (heroPhrases) {
    const frases = [
      '"La tierra no es herencia de nuestros padres, es préstamo de nuestros hijos"',
      '"El agua es la sangre de la tierra" — Sabiduría Bribri',
      '"Hablar nuestra lengua es mantener viva el alma del pueblo"',
      '"El maíz es el hijo del sol y la luna" — Ngäbe',
      '"Cada río tiene un espíritu, cada montaña un guardián"'
    ];
    let i = 0;
    setInterval(() => {
      i = (i + 1) % frases.length;
      heroPhrases.style.opacity = '0';
      setTimeout(() => { heroPhrases.textContent = frases[i]; heroPhrases.style.opacity = '1'; }, 400);
    }, 4500);
  }

  navigate('home');
});
