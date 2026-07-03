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

    const cats = ['lengua', 'comida', 'medicina', 'arte', 'cultura'];
    const catMatch = cats.find(c => q.includes(c) || q.includes(c.replace('_','')));
    
    for (const word of palabras) {
      for (const lang of Object.values(VOCES.languages)) {
        if (lang.name.toLowerCase().includes(word)) {
          const info = `El pueblo ${lang.name} habita en ${lang.region}. Su lengua pertenece a la familia ${lang.family}. ${lang.description}`;
          return {
            pregunta: query,
            respuesta: info,
            categoria: 'cultura',
            animacion: 'cosmovision'
          };
        }
      }
    }

    for (const word of palabras) {
      for (const lang of Object.values(VOCES.languages)) {
        for (const [, catWords] of Object.entries(lang.words)) {
          for (const w of catWords) {
            if (w.es.toLowerCase().includes(word)) {
              return {
                pregunta: query,
                respuesta: `En ${lang.name} se dice <span class="word-highlight">"${w.native}"</span> (se pronuncia "${w.pron}"). ${w.nota || ''}${word === w.es.toLowerCase() || q.includes(w.es.toLowerCase()) ? '' : ` La palabra "${w.es}" se traduce como "${w.native}".`}`,
                categoria: 'lengua',
                animacion: 'saludo'
              };
            }
          }
        }
      }
    }

    if (palabras.some(w => ['comida','comer','plato','alimento','bebida'].includes(w))) {
      const allFoods = [];
      for (const [, pueblo] of Object.entries(VOCES.foods)) {
        if (pueblo.dishes) allFoods.push(...pueblo.dishes.map(d => ({...d, pueblo})));
      }
      const foodItems = VOCES.foods.general.traditional_ingredients.slice(0, 5);
      return {
        pregunta: query,
        respuesta: `La alimentación indígena de Costa Rica es variada y rica. Algunos ingredientes tradicionales son: ${foodItems.map(i => i.name).join(', ')}. Los pueblos preparan bollos de maíz, sopas, chichas y pescado ahumado. El maíz y el cacao son alimentos sagrados.`,
        categoria: 'comida',
        animacion: 'comida'
      };
    }

    if (palabras.some(w => ['medicina','medicinal','planta','enfermedad','curar','sanar','remedio'].includes(w))) {
      const plants = VOCES.medicine.plants.slice(0, 4);
      return {
        pregunta: query,
        respuesta: `Las plantas medicinales son fundamentales en la medicina indígena. Algunas importantes: ${plants.map(p => `${p.name} (${p.uso})`).join(', ')}. El awá o médico tradicional es quien conoce las propiedades de cada planta y las usa según la enfermedad.`,
        categoria: 'medicina',
        animacion: 'medicina'
      };
    }

    if (palabras.some(w => ['arte','artesanía','artesania','tallar','tejer','pintar','diseño'].includes(w))) {
      const arts = VOCES.art.techniques.slice(0, 4);
      return {
        pregunta: query,
        respuesta: `Las artes indígenas incluyen: ${arts.map(a => `${a.name} (${a.pueblo})`).join(', ')}. Los símbolos como la espiral, el jaguar y el árbol del mundo tienen profundos significados espirituales.`,
        categoria: 'arte',
        animacion: 'arte'
      };
    }

    return null;
  },

  getSuggestions() {
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
