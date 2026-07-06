const VOCES_QA = {
  findAnswer(query) {
    const q = query.toLowerCase().trim();
    if (!q) return null;

    const palabras = q.split(/\s+/).filter(p => p.length > 2);

    let best = null;
    let bestScore = 0;

    for (const entry of VOCES.qa) {
      const p = entry.pregunta.toLowerCase();
      let score = 0;

      if (q === p) score = 100;
      else if (p.includes(q)) score = 80;
      else if (q.includes(p)) score = 70;

      for (const word of palabras) {
        if (p.includes(word)) score += 15;
      }

      for (const word of palabras) {
        const similar = VOCES.qa.filter(e =>
          e.pregunta.toLowerCase().includes(word) && e !== entry
        );
        if (similar.length > 0) score += 5;
      }

      if (score > bestScore) {
        bestScore = score;
        best = { entry, score: bestScore };
      }
    }

    if (best && best.score >= 20) return best.entry;

    const catMatch = this._detectCategory(q, palabras);
    const puebloMatch = this._findPueblo(palabras);
    const wordMatch = this._findWord(palabras);

    if (puebloMatch) return puebloMatch;
    if (wordMatch) return wordMatch;

    return this._generateResponse(q, palabras, catMatch);
  },

  _detectCategory(q, palabras) {
    const catPatterns = {
      lengua: ['lengua', 'idioma', 'hablar', 'palabra', 'decir', 'saludo', 'como se dice', 'traducir', 'vocabulario', 'significa', 'bribri', 'cabécar', 'cabecar', 'ngäbe', 'ngabe', 'maleku', 'boruca', 'térraba', 'terrab', 'huetar', 'indígena'],
      comida: ['comida', 'comer', 'plato', 'alimento', 'bebida', 'cocina', 'gastronomía', 'gastronomia', 'maíz', 'cacao', 'chicha', 'receta', 'ingrediente'],
      medicina: ['medicina', 'medicinal', 'planta', 'enfermedad', 'curar', 'sanar', 'remedio', 'hierba', 'tratamiento', 'salud', 'enfermo', 'dolor'],
      arte: ['arte', 'artesanía', 'artesania', 'tallar', 'tejer', 'pintar', 'diseño', 'máscara', 'mascara', 'cestería', 'cesteria', 'cerámica', 'ceramica', 'símbolo', 'simbolo', 'tejido', 'color'],
      cultura: ['cultura', 'tradición', 'tradicion', 'ceremonia', 'fiesta', 'cosmovisión', 'cosmovision', 'espíritu', 'espiritu', 'historia', 'leyenda', 'mito', 'ritual', 'creencia', 'sagrado']
    };
    for (const [cat, patterns] of Object.entries(catPatterns)) {
      for (const p of patterns) {
        if (q.includes(p)) return cat;
      }
    }
    return palabras.find(w => catPatterns.lengua.includes(w)) ? 'lengua' : null;
  },

  _findPueblo(palabras) {
    for (const word of palabras) {
      for (const lang of Object.values(VOCES.languages)) {
        if (lang.name.toLowerCase().includes(word)) {
          const info = `El pueblo ${lang.name} habita en ${lang.region}. Su lengua pertenece a la familia ${lang.family}. ${lang.description}`;
          return {
            pregunta: '',
            respuesta: info,
            categoria: 'cultura',
            animacion: 'cosmovision'
          };
        }
      }
    }
    return null;
  },

  _findWord(palabras) {
    for (const word of palabras) {
      for (const lang of Object.values(VOCES.languages)) {
        for (const [, catWords] of Object.entries(lang.words)) {
          for (const w of catWords) {
            if (w.es.toLowerCase().includes(word)) {
              return {
                pregunta: '',
                respuesta: `En ${lang.name} se dice <span class="word-highlight">"${w.native}"</span> (se pronuncia "${w.pron}"). ${w.nota || ''}`,
                categoria: 'lengua',
                animacion: 'saludo'
              };
            }
          }
        }
      }
    }
    return null;
  },

  _generateResponse(q, palabras, cat) {
    const now = new Date();
    const hour = now.getHours();

    if (palabras.some(w => ['hola', 'buenos', 'buen', 'saludo', 'hey'].includes(w))) {
      const saludo = hour < 12 ? 'buenos días' : hour < 18 ? 'buenas tardes' : 'buenas noches';
      return {
        pregunta: q,
        respuesta: `${saludo} Soy la voz de los pueblos indígenas de Costa Rica. Puedes preguntarme sobre lenguas, comidas, medicina, arte o cultura. ¿En qué puedo ayudarte?`,
        categoria: 'cultura',
        animacion: 'saludo'
      };
    }

    if (palabras.some(w => ['gracias', 'graci'].includes(w))) {
      return {
        pregunta: q,
        respuesta: '¡Gracias a ti por interesarte en preservar y conocer nuestras culturas indígenas! Recuerda que cada palabra es un acto de resistencia cultural. Sigue preguntando, la memoria de los abuelos está viva.',
        categoria: 'cultura',
        animacion: 'cosmovision'
      };
    }

    if (palabras.some(w => ['quien', 'quién', 'quienes', 'quiénes', 'eres', 'creador', 'hiciste'].includes(w))) {
      return {
        pregunta: q,
        respuesta: 'Soy "Voces de la Tierra", un portal interactivo para aprender y preservar las lenguas, comidas, medicina, arte y cosmovisión de los 7 pueblos indígenas de Costa Rica: Bribri, Cabécar, Ngäbe, Maleku, Boruca, Térraba y Huetar. Fui creado como proyecto cultural para mantener viva la memoria ancestral.',
        categoria: 'cultura',
        animacion: 'cosmovision'
      };
    }

    if (palabras.some(w => ['nombre', 'llamas', 'llamo'].includes(w))) {
      return {
        pregunta: q,
        respuesta: 'Me llamo "Voces de la Tierra". Soy un guardián digital de la sabiduría de los pueblos indígenas de Costa Rica. Puedes llamarme "Voces" si prefieres. ¿Qué te gustaría aprender hoy?',
        categoria: 'cultura',
        animacion: 'saludo'
      };
    }

    if (q.includes('bribri') && !cat) cat = 'lengua';
    if (q.includes('cabécar') && !cat) cat = 'lengua';
    if (q.includes('ngäbe') && !cat) cat = 'lengua';
    if (q.includes('maleku') && !cat) cat = 'lengua';
    if (q.includes('boruca') && !cat) cat = 'lengua';

    if (!cat) cat = 'cultura';

    if (cat === 'lengua') {
      const langs = Object.values(VOCES.languages);
      const data = langs.map(l => `${l.name}: ${l.speakers.toLocaleString()} hablantes en ${l.region}`).join('. ');
      const palabrasComunes = [];
      for (const lang of langs) {
        for (const [, words] of Object.entries(lang.words)) {
          for (const w of words.slice(0, 2)) {
            palabrasComunes.push({ lang: lang.name, word: w.native, es: w.es });
          }
        }
      }
      const algunos = palabrasComunes.slice(0, 4).map(p => p.es + ' = ' + p.word).join(', ');
      return {
        pregunta: q,
        respuesta: `Costa Rica tiene 7 lenguas indígenas vivas: ${data}. Cada una es única y pertenece a la familia lingüística Chibcha. Algunas palabras: ${algunos}. Los ancianos son los guardianes de estas lenguas.`,
        categoria: 'lengua',
        animacion: 'saludo'
      };
    }

    if (cat === 'comida') {
      const foodItems = (VOCES.foods && VOCES.foods.general && VOCES.foods.general.traditional_ingredients || []).slice(0, 6);
      const names = foodItems.map(i => i.name || i).join(', ');
      return {
        pregunta: q,
        respuesta: `La alimentación indígena de Costa Rica es rica y variada. Ingredientes tradicionales: ${names || 'maíz, frijoles, ayote, cacao, yuca, pejibaye'}. Los pueblos preparan bollos, sopas, chichas y pescado. El maíz y el cacao son sagrados. Cada pueblo tiene sus propios platillos tradicionales transmitidos por generaciones.`,
        categoria: 'comida',
        animacion: 'comida'
      };
    }

    if (cat === 'medicina') {
      const plants = (VOCES.medicine && VOCES.medicine.plants || []).slice(0, 5);
      const plantInfo = plants.map(p => `${p.name}: ${p.uso}`).join('. ');
      return {
        pregunta: q,
        respuesta: `La medicina indígena usa plantas medicinales con sabiduría ancestral. ${plantInfo || 'Plantas como el jengibre, sábila, zacate de limón y hoja de sen son usadas tradicionalmente'}. El awá (médico tradicional) conoce las propiedades curativas y realiza ceremonias de sanación. La naturaleza es la farmacia de los pueblos indígenas.`,
        categoria: 'medicina',
        animacion: 'medicina'
      };
    }

    if (cat === 'arte') {
      const arts = (VOCES.art && VOCES.art.techniques || []).slice(0, 5);
      const artInfo = arts.map(a => `${a.name} (${a.pueblo})`).join(', ');
      return {
        pregunta: q,
        respuesta: `Las artes indígenas expresan la conexión con la tierra. ${artInfo || 'Cestería, tejido, tallado en madera, cerámica y máscaras tradicionales'}. Los símbolos como la espiral, el jaguar, la serpiente y el árbol del mundo tienen significados espirituales profundos. Cada pieza cuenta una historia ancestral.`,
        categoria: 'arte',
        animacion: 'arte'
      };
    }

    if (cat === 'cultura') {
      const pueblos = Object.values(VOCES.languages);
      const info = pueblos.map(p => `${p.name} (${p.region})`).join(', ');
      return {
        pregunta: q,
        respuesta: `Los 7 pueblos indígenas de Costa Rica son: ${info}. Su cosmovisión se basa en la relación sagrada con la naturaleza. Creen que la tierra, el agua, los bosques y los animales tienen espíritus. Las ceremonias, danzas y tradiciones mantienen vivo este conocimiento ancestral. ¿Quieres saber más sobre algún pueblo en específico?`,
        categoria: 'cultura',
        animacion: 'cosmovision'
      };
    }

    const items = Object.values(VOCES.languages);
    const nombres = items.map(l => l.name).join(', ');
    return {
      pregunta: q,
      respuesta: `Los pueblos indígenas de Costa Rica (${nombres}) tienen una rica tradición cultural. Cada pueblo tiene su lengua, cosmovisión y costumbres únicas. Puedes preguntarme sobre lenguas (¿cómo se dice...?), comidas tradicionales, plantas medicinales, arte y artesanía, o la cosmovisión y ceremonias de cada pueblo. ¿Qué te gustaría explorar?`,
      categoria: 'cultura',
      animacion: 'cosmovision'
    };
  },

  getSuggestions(cat) {
    if (cat) {
      return VOCES.qa.filter(e => {
        if (cat === 'lengua') return e.categoria === 'lengua';
        if (cat === 'comida') return e.categoria === 'comida';
        if (cat === 'medicina') return e.categoria === 'medicina';
        if (cat === 'arte') return e.categoria === 'arte';
        if (cat === 'cultura') return e.categoria === 'cultura' || e.categoria === 'cosmovision' || !e.categoria;
        return true;
      }).slice(0, 8);
    }
    return VOCES.qa.slice(0, 8);
  },

  getCategoryCounts() {
    const counts = {};
    for (const entry of VOCES.qa) {
      counts[entry.categoria] = (counts[entry.categoria] || 0) + 1;
    }
    const catNames = { lengua: 'Lenguas', comida: 'Alimentación', medicina: 'Medicina', arte: 'Arte', cultura: 'Cultura' };
    return Object.entries(counts).map(([k, v]) => ({ id: k, name: catNames[k] || k, count: v }));
  }
};
