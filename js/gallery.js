const VOCES_GALLERY = {
  artworks: [
    {
      id: 'ceramica',
      title: 'Cerámica Huetar',
      pueblo: 'Huetar',
      technique: 'Cerámica modelada a mano',
      description: 'Los huetares creaban cerámica con figuras zoomorfas y antropomorfas. Usaban engobes rojos y negros con diseños geométricos que representan su cosmovisión.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Nicoya_pottery._Cer%C3%A1mica_nicoyana._Costa_Rica_%282%29.JPG'
    },
    {
      id: 'mascaras',
      title: 'Máscaras Boruca',
      pueblo: 'Boruca',
      technique: 'Tallado en madera de cedro',
      description: 'Las máscaras borucas representan diablitos, jaguares y espíritus. Se usan en el Juego de los Diablitos, una tradición que representa la resistencia indígena contra los conquistadores.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Boruca_mask._Costa_Rica.jpg'
    },
    {
      id: 'cesteria',
      title: 'Cestería Maleku',
      pueblo: 'Maleku',
      technique: 'Tejido con fibras naturales',
      description: 'La cestería maleku usa bejuco, caña brava y palma. Cada canasto es una obra maestra de precisión. Los patrones geométricos representan ríos, serpientes y el cosmos.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Canastos_de_bejuco_para_cafe.JPG'
    },
    {
      id: 'petroglifos',
      title: 'Petroglifos Huetar',
      pueblo: 'Huetar',
      technique: 'Grabado en piedra',
      description: 'Los petroglifos huetares son espirales, figuras humanas y animales grabados en roca. Representan mapas astronómicos, rituales y la conexión entre el cielo y la tierra.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Petroglifos_Museo_Nacional_CRI_01_2020_4106.jpg'
    },
    {
      id: 'tejido',
      title: 'Tejido Boruca',
      pueblo: 'Boruca',
      technique: 'Telar de cintura con tintes naturales',
      description: 'Los tejidos borucas usan tintes de achiote (rojo), jagua (azul), cúrcuma (amarillo) y carbón (negro). Cada color tiene un significado espiritual y medicinal.',
      photo: 'https://images.unsplash.com/photo-1582734834757-df25965ddda0?w=600&h=400&fit=crop'
    },
    {
      id: 'cacao',
      title: 'El Cacao Sagrado',
      pueblo: 'Bribri',
      technique: 'Ceremonia y arte del cacao',
      description: 'El cacao (kakáu) es el corazón de la tierra. Los bribris lo usan ceremonialmente para sanar, conectar con lo espiritual y unir a la comunidad. El awá guía la ceremonia.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Cocoa_beans_in_cocoa_pod_at_El_Trapiche%2C_Costa_Rica.jpg'
    },
    {
      id: 'arbol',
      title: 'Árbol del Mundo',
      pueblo: 'Bribri / Cabécar',
      technique: 'Símbolo cosmogónico',
      description: 'El Árbol del Mundo conecta los tres niveles del cosmos: raíces (inframundo), tronco (mundo terrenal) y ramas (cielo). Es un símbolo central en la cosmovisión bribri y cabécar.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Ceiba_pentandra_398559908.jpg'
    },
    {
      id: 'jaguar',
      title: 'El Jaguar',
      pueblo: 'Maleku / Boruca',
      technique: 'Símbolo de poder espiritual',
      description: 'El jaguar es el nahual (espíritu guardián) más poderoso. Representa la fuerza, el mundo nocturno y la conexión con el inframundo. Su imagen protege a quienes la portan.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Jaguar_animal_panthera_onca.jpg'
    }
  ],

  index: 0,

  show(containerId, artworkId) {
    const idx = artworkId ? this.artworks.findIndex(a => a.id === artworkId) : this.index;
    const art = this.artworks[idx];
    if (!art) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    this.index = idx;

    const prev = (idx - 1 + this.artworks.length) % this.artworks.length;
    const next = (idx + 1) % this.artworks.length;

    container.innerHTML = `
      <div class="gallery-layout">
        <div class="gallery-nav-col left-nav">
          <button class="gal-nav-btn" data-goto="${prev}" aria-label="Anterior">
            <svg viewBox="0 0 24 24" width="32" height="32"><path d="M15 4 L7 12 L15 20" stroke="currentColor" stroke-width="3" fill="none"/></svg>
          </button>
        </div>
        <div class="gallery-work">
          <div class="gallery-photo-box"><img class="gallery-photo" src="${art.photo}" alt="${art.title}" loading="lazy"></div>
          <h2 class="gallery-title rover-type">${art.title}</h2>
          <p class="gallery-pueblo"><span class="rover-label">PUEBLO: </span>${art.pueblo}</p>
          <p class="gallery-tech"><span class="rover-label">TÉCNICA: </span>${art.technique}</p>
          <p class="gallery-desc">${art.description}</p>
          <div class="gallery-dots">
            ${this.artworks.map((a, i) => `<button class="gal-dot${i === idx ? ' active' : ''}" data-goto="${i}" aria-label="${a.title}"></button>`).join('')}
          </div>
        </div>
        <div class="gallery-nav-col right-nav">
          <button class="gal-nav-btn" data-goto="${next}" aria-label="Siguiente">
            <svg viewBox="0 0 24 24" width="32" height="32"><path d="M9 4 L17 12 L9 20" stroke="currentColor" stroke-width="3" fill="none"/></svg>
          </button>
        </div>
      </div>
    `;

    container.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.show(containerId, this.artworks[parseInt(btn.dataset.goto)].id);
      });
    });
  },

  init(containerId) {
    this.show(containerId, this.artworks[0].id);
  }
};
