const VOCES = {

  meta: {
    title: "Voces de la Tierra",
    subtitle: "Portal de lenguas y culturas indígenas de Costa Rica",
    version: "1.0.0",
    languages: ["bribri", "cabecar", "ngabe", "maleku", "boruca", "terraba", "huetar"]
  },

  languages: {
    bribri: {
      name: "Bribri",
      nameNative: "Bribri",
      region: "Talamanca, Caribe Sur",
      family: "Chibcha",
      speakers: 7000,
      description: "El bribri es una de las lenguas indígenas más vitales de Costa Rica. Su cosmovisión gira en torno a Sibú, el dios creador, y la figura del awá (médico tradicional).",
      greeting: "di' tte",
      words: {
        saludos: [
          { es: "Hola", native: "di' tte", pron: "di tte", nota: "Saludo informal y cotidiano" },
          { es: "Buenos días", native: "di' tte stsö", pron: "di tte stsö", nota: "Saludo matutino" },
          { es: "Buenas tardes", native: "di' tte wé ká", pron: "di tte ué ka", nota: "Saludo vespertino" },
          { es: "Adiós", native: "déwö", pron: "déuö", nota: "Despedida general" },
          { es: "Hasta luego", native: "déwö ká", pron: "déuö ka", nota: "Despedida con intención de regreso" },
          { es: "Gracias", native: "díshkö", pron: "dishkö", nota: "Expresión de agradecimiento" },
          { es: "¿Cómo estás?", native: "bí tó?", pron: "bi to", nota: "Pregunta de cortesía" }
        ],
        numeros: [
          { es: "Uno", native: "éke", pron: "eke", nota: "Número uno" },
          { es: "Dos", native: "bök", pron: "bök", nota: "Número dos" },
          { es: "Tres", native: "màyan", pron: "mayan", nota: "Número tres" },
          { es: "Cuatro", native: "tchög", pron: "chög", nota: "Número cuatro" },
          { es: "Cinco", native: "skèr", pron: "sker", nota: "Número cinco" }
        ],
        naturaleza: [
          { es: "Agua", native: "dí", pron: "di", nota: "Elemento sagrado, fuente de vida" },
          { es: "Sol", native: "dö", pron: "dö", nota: "Astro rey, dador de luz" },
          { es: "Luna", native: "sĩã", pron: "siã", nota: "Madre luna, guía nocturna" },
          { es: "Tierra", native: "míkë", pron: "mikë", nota: "La tierra, nuestro hogar" },
          { es: "Río", native: "dí' ká", pron: "di ka", nota: "Los ríos son venas de la tierra" },
          { es: "Montaña", native: "tsáwö", pron: "tsáwö", nota: "Las montañas sagradas" },
          { es: "Árbol", native: "kás", pron: "kas", nota: "Los árboles son nuestros hermanos" },
          { es: "Maíz", native: "kókó", pron: "koko", nota: "El maíz es vida y sustento" },
          { es: "Cacao", native: "kakáu", pron: "kakau", nota: "El cacao es sagrado, conecta con Sibú" },
          { es: "Fuego", native: "chichá", pron: "chicha", nota: "El fuego purifica y transforma" }
        ],
        familia: [
          { es: "Madre", native: "kã", pron: "kã", nota: "Madre tierra, madre biológica" },
          { es: "Padre", native: "ák", pron: "ak", nota: "Padre, protector" },
          { es: "Hermano", native: "bá", pron: "ba", nota: "Hermano de sangre" },
          { es: "Hermana", native: "bá' kã", pron: "ba kã", nota: "Hermana de sangre" },
          { es: "Hijo", native: "tsí", pron: "tsi", nota: "Hijo o hija" },
          { es: "Abuelo", native: "dörö", pron: "dörö", nota: "Abuelo, sabio anciano" },
          { es: "Abuela", native: "dörö' kã", pron: "dörö kã", nota: "Abuela, guardiana de historias" },
          { es: "Familia", native: "alák", pron: "alak", nota: "La familia extendida bribri" }
        ],
        cotidianas: [
          { es: "Sí", native: "è", pron: "e", nota: "Afirmación" },
          { es: "No", native: "kë", pron: "kë", nota: "Negación" },
          { es: "Bien", native: "bí", pron: "bi", nota: "Estado de bienestar" },
          { es: "Casa", native: "ú", pron: "u", nota: "El hogar" },
          { es: "Comida", native: "kó", pron: "ko", nota: "Alimento" },
          { es: "Amigo", native: "bà' tchí", pron: "ba tchi", nota: "Amistad sincera" },
          { es: "Camino", native: "yá", pron: "ya", nota: "Sendero, ruta" }
        ]
      },
      cultura: {
        cosmovision: "Los bribri creen que el mundo fue creado por Sibú. La tierra descansa sobre una culebra gigante. Los awá (médicos tradicionales) son los intermediarios entre el mundo espiritual y el físico.",
        tradiciones: [
          "El awá o médico tradicional bribri usa el cacao y plantas sagradas para sanar",
          "El rito fúnebre bribri incluye la creencia de que el alma viaja al otro mundo",
          "La organización social se basa en clanes matrilineales",
          "La palabra hablada tiene un poder sagrado - no se debe mentir jamás"
        ]
      }
    },

    cabecar: {
      name: "Cabécar",
      nameNative: "Cabécar",
      region: "Talamanca, Chirripó",
      family: "Chibcha",
      speakers: 3000,
      description: "El cabécar está estrechamente relacionado con el bribri. Son un pueblo que ha preservado fuertemente su identidad y territorio en las montañas de Talamanca.",
      greeting: "ji' tte",
      words: {
        saludos: [
          { es: "Hola", native: "ji' tte", pron: "yi tte", nota: "Saludo cotidiano" },
          { es: "Buenos días", native: "ji' tte shö", pron: "yi tte shö", nota: "Saludo de día" },
          { es: "Adiós", native: "jé'wö", pron: "yéuö", nota: "Despedida" },
          { es: "Gracias", native: "jìshkö", pron: "yishkö", nota: "Agradecimiento" },
          { es: "¿Cómo estás?", native: "bi' jí?", pron: "bi yi", nota: "Saludo cordial" }
        ],
        numeros: [
          { es: "Uno", native: "éke", pron: "eke", nota: "Primer número" },
          { es: "Dos", native: "bök", pron: "bök", nota: "Segundo número" },
          { es: "Tres", native: "máyan", pron: "mayan", nota: "Tercer número" },
          { es: "Cuatro", native: "shkiög", pron: "skiög", nota: "Cuarto número" },
          { es: "Cinco", native: "shker", pron: "sker", nota: "Quinto número" }
        ],
        naturaleza: [
          { es: "Agua", native: "dí", pron: "di", nota: "Agua, fuente de vida" },
          { es: "Sol", native: "dö", pron: "dö", nota: "El astro solar" },
          { es: "Luna", native: "siã", pron: "siã", nota: "La luna" },
          { es: "Río", native: "dí' ká", pron: "di ka", nota: "Curso de agua" },
          { es: "Maíz", native: "kókó", pron: "koko", nota: "El maíz sagrado" }
        ],
        cotidianas: [
          { es: "Casa", native: "jú", pron: "yu", nota: "Hogar cabécar" },
          { es: "Sí", native: "è", pron: "e", nota: "Afirmación" },
          { es: "No", native: "kë'", pron: "kë", nota: "Negación" }
        ]
      },
      cultura: {
        cosmovision: "La cosmovisión cabécar es similar a la bribri. Sibú es el creador. Creen en espíritus de la naturaleza que habitan ríos, montañas y árboles.",
        tradiciones: [
          "Los cabécares son conocidos por su profundo conocimiento de plantas medicinales",
          "La cacería y la recolección son actividades tradicionales importantes",
          "La vivienda tradicional es de forma cónica con techo de paja",
          "El clan se hereda por línea materna"
        ]
      }
    },

    ngabe: {
      name: "Ngäbe",
      nameNative: "Ngäbe",
      region: "Puntarenas Sur, Coto Brus, Buenos Aires",
      family: "Chibcha",
      speakers: 5000,
      description: "Los ngäbe (también llamados guaymíes) habitan en el sur de Costa Rica y norte de Panamá. Su lengua es el ngäbere. Son conocidos por sus coloridos vestidos tradicionales y su arte en chaquira.",
      greeting: "möi",
      words: {
        saludos: [
          { es: "Hola", native: "möi", pron: "möi", nota: "Saludo principal" },
          { es: "Buenos días", native: "möi mrä", pron: "möi mrä", nota: "Saludo de día" },
          { es: "Buenas tardes", native: "möi nämä", pron: "möi nämä", nota: "Saludo de tarde" },
          { es: "Adiós", native: "möi n'gö", pron: "möi ngö", nota: "Despedida" },
          { es: "Gracias", native: "möi nuge", pron: "möi nuge", nota: "Agradecimiento" },
          { es: "¿Cómo estás?", native: "möi drebä?", pron: "möi drebä", nota: "Pregunta de cortesía" }
        ],
        numeros: [
          { es: "Uno", native: "dai", pron: "dai", nota: "Número uno" },
          { es: "Dos", native: "dok", pron: "dok", nota: "Número dos" },
          { es: "Tres", native: "dai", pron: "dai", nota: "Número tres" },
          { es: "Cuatro", native: "bokai", pron: "bokai", nota: "Número cuatro" },
          { es: "Cinco", native: "dai mäi", pron: "dai mäi", nota: "Número cinco" }
        ],
        naturaleza: [
          { es: "Agua", native: "ñö", pron: "ñö", nota: "Agua, elemento vital" },
          { es: "Sol", native: "ngö", pron: "ngö", nota: "El sol" },
          { es: "Luna", native: "nä", pron: "nä", nota: "La luna" },
          { es: "Tierra", native: "dö", pron: "dö", nota: "La tierra" },
          { es: "Río", native: "drie", pron: "drie", nota: "Río" },
          { es: "Montaña", native: "köba", pron: "köba", nota: "Cerro o montaña" },
          { es: "Árbol", native: "nö", pron: "nö", nota: "Árbol, bosque" },
          { es: "Mar", native: "ñö käme", pron: "ñö käme", nota: "Mar, agua grande" },
          { es: "Estrella", native: "kube", pron: "kube", nota: "Estrella del cielo" }
        ],
        familia: [
          { es: "Madre", native: "mama", pron: "mama", nota: "Madre" },
          { es: "Padre", native: "tata", pron: "tata", nota: "Padre" },
          { es: "Hermano", native: "kri", pron: "kri", nota: "Hermano" },
          { es: "Hermana", native: "kre", pron: "kre", nota: "Hermana" },
          { es: "Hijo", native: "mre", pron: "mre", nota: "Hijo" },
          { es: "Abuelo", native: "ngöbo", pron: "ngöbo", nota: "Abuelo" }
        ],
        cotidianas: [
          { es: "Sí", native: "e", pron: "e", nota: "Afirmación" },
          { es: "No", native: "tai", pron: "tai", nota: "Negación" },
          { es: "Casa", native: "köde", pron: "köde", nota: "Vivienda tradicional" },
          { es: "Comida", native: "nügä", pron: "nügä", nota: "Alimento" },
          { es: "Amigo", native: "mdigwe", pron: "mdigüe", nota: "Amigo cercano" },
          { es: "Flor", native: "sege", pron: "sege", nota: "Flor" }
        ]
      },
      cultura: {
        cosmovision: "Para los ngäbe, la tierra es la madre de todos. Creen en Ngöbö, el dios creador que todo lo ve. La naturaleza es sagrada y debe ser respetada.",
        tradiciones: [
          "Las mujeres ngäbe usan vestidos de colores brillantes llamados 'nawar'",
          "El arte en chaquira (abalorios) es una tradición milenaria",
          "La música tradicional usa la flauta de caña y el tambor",
          "Los ngäbe migran estacionalmente siguiendo los ciclos de la naturaleza"
        ]
      }
    },

    maleku: {
      name: "Maleku",
      nameNative: "Maleku",
      region: "Guatuso, Alajuela Norte",
      family: "Chibcha",
      speakers: 1000,
      description: "Los malekus o guatusos habitan en la región norte de Costa Rica. Su lengua es una de las más amenazadas del país. Son conocidos por su artesanía en jícaras y sus tradiciones de caza.",
      greeting: "rahíj",
      words: {
        saludos: [
          { es: "Hola", native: "rahíj", pron: "rahíj", nota: "Saludo principal" },
          { es: "Buenos días", native: "rahíj tí", pron: "rahíj ti", nota: "Saludo de día" },
          { es: "Adiós", native: "rahíj rah", pron: "rahíj rah", nota: "Despedida" },
          { es: "Gracias", native: "rahíj ka", pron: "rahíj ka", nota: "Agradecimiento" }
        ],
        numeros: [
          { es: "Uno", native: "kí", pron: "ki", nota: "Número uno" },
          { es: "Dos", native: "páo", pron: "pao", nota: "Número dos" },
          { es: "Tres", native: "páotkí", pron: "paotki", nota: "Número tres" },
          { es: "Cuatro", native: "paobáo", pron: "paobao", nota: "Número cuatro" },
          { es: "Cinco", native: "kí jó", pron: "ki yo", nota: "Número cinco" }
        ],
        naturaleza: [
          { es: "Agua", native: "túi", pron: "tui", nota: "Agua" },
          { es: "Sol", native: "jí", pron: "yi", nota: "El sol" },
          { es: "Luna", native: "kína", pron: "kina", nota: "La luna" },
          { es: "Río", native: "túi ká", pron: "tui ka", nota: "Río" },
          { es: "Árbol", native: "jaká", pron: "yaka", nota: "Árbol" },
          { es: "Maíz", native: "ópe", pron: "ope", nota: "El maíz" }
        ],
        familia: [
          { es: "Madre", native: "máma", pron: "mama", nota: "Madre" },
          { es: "Padre", native: "pápa", pron: "papa", nota: "Padre" },
          { es: "Hermano", native: "chá", pron: "cha", nota: "Hermano" },
          { es: "Hijo", native: "chíri", pron: "chiri", nota: "Hijo" }
        ],
        cotidianas: [
          { es: "Casa", native: "jó", pron: "yo", nota: "Hogar tradicional" },
          { es: "Sí", native: "hó", pron: "ho", nota: "Afirmación" },
          { es: "No", native: "má", pron: "ma", nota: "Negación" },
          { es: "Comida", native: "jé", pron: "ye", nota: "Alimento" }
        ]
      },
      cultura: {
        cosmovision: "Los maleku creen en espíritus de la naturaleza. El jaguar es un animal sagrado y protector. Los ríos y lagunas son morada de espíritus ancestrales.",
        tradiciones: [
          "La cestería y la talla de jícaras son artes tradicionales maleku",
          "La caza con cerbatana era una práctica tradicional",
          "Las casas tradicionales eran grandes estructuras comunales",
          "El baile del jaguar representa la conexión con el espíritu animal"
        ]
      }
    },

    boruca: {
      name: "Boruca",
      nameNative: "Brúnka",
      region: "Puntarenas Sur, Boruca, Térraba",
      family: "Chibcha",
      speakers: 150,
      description: "La lengua boruca está críticamente amenazada. Sin embargo, el pueblo boruca mantiene vivas sus tradiciones culturales, especialmente el famoso 'Juego de los Diablitos' y su arte textil.",
      greeting: "tésh",
      words: {
        saludos: [
          { es: "Hola", native: "tésh", pron: "tesh", nota: "Saludo tradicional" },
          { es: "Buenos días", native: "tésh kra", pron: "tesh kra", nota: "Saludo de día" },
          { es: "Adiós", native: "tésh kwé", pron: "tesh kwé", nota: "Despedida" },
          { es: "Gracias", native: "tésh tká", pron: "tesh tká", nota: "Agradecimiento" }
        ],
        numeros: [
          { es: "Uno", native: "tká", pron: "tka", nota: "Número uno" },
          { es: "Dos", native: "bú", pron: "bu", nota: "Número dos" },
          { es: "Tres", native: "mán", pron: "man", nota: "Número tres" },
          { es: "Cuatro", native: "bká", pron: "bka", nota: "Número cuatro" },
          { es: "Cinco", native: "mánik", pron: "manik", nota: "Número cinco" }
        ],
        naturaleza: [
          { es: "Agua", native: "tkó", pron: "tko", nota: "Agua" },
          { es: "Sol", native: "krá", pron: "kra", nota: "El sol" },
          { es: "Luna", native: "kúbo", pron: "kubo", nota: "La luna" },
          { es: "Tierra", native: "té", pron: "te", nota: "La tierra" },
          { es: "Río", native: "tkó'ká", pron: "tko ka", nota: "Río" },
          { es: "Maíz", native: "yís", pron: "yis", nota: "El maíz sagrado" }
        ],
        cotidianas: [
          { es: "Casa", native: "kísh", pron: "kish", nota: "Hogar" },
          { es: "Sí", native: "té", pron: "te", nota: "Afirmación" },
          { es: "No", native: "té'kwá", pron: "tékwa", nota: "Negación" },
          { es: "Comida", native: "tkóri", pron: "tkori", nota: "Alimento" }
        ]
      },
      cultura: {
        cosmovision: "La cosmovisión boruca incluye la creencia en espíritus ancestrales que protegen la comunidad. El río y la montaña son elementos sagrados en su geografía espiritual.",
        tradiciones: [
          "El Juego de los Diablitos es la tradición más conocida: representa la resistencia indígena contra los españoles",
          "El tejido de fibras naturales (chácaras) es un arte tradicional",
          "La máscara de diablito es un símbolo cultural hecho de cedro",
          "La fiesta se celebra cada diciembre y enero"
        ]
      }
    },

    terraba: {
      name: "Térraba",
      nameNative: "Surétk",
      region: "Puntarenas Sur, Térraba",
      family: "Chibcha",
      speakers: 30,
      description: "La lengua térraba está en peligro crítico de extinción. El pueblo térraba está realizando esfuerzos de revitalización lingüística y cultural.",
      greeting: "tésh",
      words: {
        saludos: [
          { es: "Hola", native: "tésh", pron: "tesh", nota: "Saludo principal" },
          { es: "Buenos días", native: "tésh ará", pron: "tesh ara", nota: "Saludo de día" },
          { es: "Adiós", native: "tésh uré", pron: "tesh ure", nota: "Despedida" },
          { es: "Gracias", native: "tésh be", pron: "tesh be", nota: "Agradecimiento" }
        ],
        numeros: [
          { es: "Uno", native: "é", pron: "e", nota: "Número uno" },
          { es: "Dos", native: "bú", pron: "bu", nota: "Número dos" },
          { es: "Tres", native: "má", pron: "ma", nota: "Número tres" },
          { es: "Cuatro", native: "bká", pron: "bka", nota: "Número cuatro" },
          { es: "Cinco", native: "másk", pron: "mask", nota: "Número cinco" }
        ],
        naturaleza: [
          { es: "Agua", native: "tkó", pron: "tko", nota: "Agua" },
          { es: "Sol", native: "ará", pron: "ara", nota: "El sol" },
          { es: "Luna", native: "kúb", pron: "kub", nota: "La luna" },
          { es: "Río", native: "tkórk", pron: "tkork", nota: "Río" }
        ],
        cotidianas: [
          { es: "Casa", native: "ú", pron: "u", nota: "Hogar" },
          { es: "Sí", native: "é", pron: "e", nota: "Afirmación" },
          { es: "No", native: "má", pron: "ma", nota: "Negación" }
        ]
      },
      cultura: {
        cosmovision: "La cosmovisión térraba comparte raíces con la boruca. La tradición oral es fundamental para preservar su memoria colectiva.",
        tradiciones: [
          "El pueblo térraba ha resistido el desplazamiento de sus territorios ancestrales",
          "La revitalización lingüística es una prioridad para las nuevas generaciones",
          "La pesca y la agricultura han sido actividades tradicionales",
          "Las historias de los abuelos son el tesoro cultural más importante"
        ]
      }
    },

    huetar: {
      name: "Huetar",
      nameNative: "Huetar",
      region: "Valle Central, Pacífico Central",
      family: "Chibcha",
      speakers: 0,
      description: "La lengua huetar está extinta. Fue la lengua del Valle Central a la llegada de los españoles. El cacique Garabito fue el gobernante huetar más conocido. Hoy, el pueblo huetar trabaja en la recuperación de su memoria cultural.",
      greeting: "—",
      words: {
        saludos: [
          { es: "Hola", native: "—", pron: "", nota: "No se conserva registro de saludos en huetar" },
          { es: "Gracias", native: "—", pron: "", nota: "No se conserva registro" }
        ],
        cultura_historica: [
          { es: "Cacique Garabito", native: "", pron: "", nota: "Famoso cacique huetar que resistió la conquista española" },
          { es: "Cacique Coyoche", native: "", pron: "", nota: "Cacique huetar del Pacífico Central" },
          { es: "Pacaca", native: "", pron: "", nota: "Importante asentamiento huetar" }
        ]
      },
      cultura: {
        cosmovision: "Aunque la lengua está extinta, los descendientes huetares mantienen viva la memoria de sus ancestros y trabajan en la recuperación de su identidad cultural.",
        tradiciones: [
          "Los huetares construyeron montículos ceremoniales y petroglifos",
          "Eran agricultores del maíz, frijol y cacao",
          "La cerámica huetar tenía diseños geométricos característicos",
          "Actualmente hay un proceso de revitalización del pueblo huetar"
        ]
      }
    }
  },

  foods: {
    bribri: {
      dishes: [
        { name: "Sopa de Ayote", desc: "Calabaza criolla cocida con verduras y hierbas", significance: "Plato tradicional en época de cosecha" },
        { name: "Cacao bribri", desc: "Bebida ceremonial de cacao natural molido", significance: "Usado en ceremonias espirituales por el awá" },
        { name: "Chicha de maíz", desc: "Bebida fermentada de maíz", significance: "Bebida ceremonial y de celebración comunitaria" },
        { name: "Pejibaye", desc: "Fruta de la palma de pejibaye cocida con sal", significance: "Alimento tradicional de la dieta bribri" }
      ],
      ingredients: ["Maíz", "Cacao", "Ayote", "Pejibaye", "Yuca", "Plátano", "Verdura de monte", "Pescado de río"]
    },
    cabecar: {
      dishes: [
        { name: "Bollo de maíz", desc: "Masa de maíz envuelta en hojas y cocida al vapor", significance: "Alimento cotidiano cabécar" },
        { name: "Pescado ahumado", desc: "Pescado de río preparado con humo", significance: "Técnica tradicional de conservación" },
        { name: "Chicha cabécar", desc: "Bebida fermentada de maíz o frutas", significance: "Bebida de celebraciones" }
      ],
      ingredients: ["Maíz", "Pescado", "Ayote", "Yuca", "Plátano", "Chiles"]
    },
    ngabe: {
      dishes: [
        { name: "Bollo de maíz ngäbe", desc: "Masa de maíz envuelta en hojas", significance: "Alimento básico tradicional" },
        { name: "Pescado con plátano", desc: "Pescado cocido con plátano verde", significance: "Comida cotidiana" },
        { name: "Chicha ngäbe", desc: "Bebida de maíz fermentado", significance: "Bebida ceremonial" }
      ],
      ingredients: ["Maíz", "Plátano", "Pescado", "Cacao", "Yuca", "Chontaduro"]
    },
    maleku: {
      dishes: [
        { name: "Arroz de monte", desc: "Arroz con verduras y carne de cacería", significance: "Plato tradicional maleku" },
        { name: "Chicha maleku", desc: "Bebida fermentada de maíz", significance: "Uso ceremonial" }
      ],
      ingredients: ["Maíz", "Carne de monte", "Yuca", "Plátano", "Pejibaye"]
    },
    boruca: {
      dishes: [
        { name: "Bollo boruca", desc: "Masa de maíz rellena envuelta en hojas", significance: "Comida tradicional de celebraciones" },
        { name: "Chicha boruca", desc: "Bebida de maíz fermentado", significance: "Bebida del Juego de los Diablitos" },
        { name: "Sopa de maíz", desc: "Sopa espesa de maíz con verduras", significance: "Alimento de la comunidad" }
      ],
      ingredients: ["Maíz", "Frijol", "Ayote", "Yuca", "Chiles"]
    },
    general: {
      traditional_ingredients: [
        { name: "Maíz", native: "kókó / isk", desc: "Base de la alimentación indígena", uso: "Tortillas, bollos, chicha, atol" },
        { name: "Cacao", native: "kakáu", desc: "Fruta sagrada, usado ceremonialmente", uso: "Bebida ceremonial, chocolate" },
        { name: "Pejibaye", native: "—", desc: "Fruta de la palma, hervida con sal", uso: "Acompañante de comidas" },
        { name: "Ayote", native: "—", desc: "Calabaza de la región", uso: "Sopas, hervidos" },
        { name: "Yuca", native: "—", desc: "Raíz de alto valor nutricional", uso: "Hervida, frita, en sopas" },
        { name: "Chontaduro", native: "—", desc: "Fruta de la palma roja o amarilla", uso: "Hervido, miel" },
        { name: "Pescado de río", native: "—", desc: "Pescado fresco de ríos de Talamanca", uso: "Ahumado, hervido, sopa" },
        { name: "Frijol", native: "—", desc: "Frijol criollo de distintas variedades", uso: "Sopas, acompañante" },
        { name: "Plátano", native: "—", desc: "Plátano verde o maduro", uso: "Hervido, asado, frito" }
      ]
    }
  },

  medicine: {
    plants: [
      { name: "Jengibre", native: "—", scientific: "Zingiber officinale", pueblo: "Todos", uso: "Antiinflamatorio, digestivo, resfriados", preparacion: "Rallado en infusión o compresa" },
      { name: "Sángrillo", native: "—", scientific: "—", pueblo: "Bribri", uso: "Cicatrizante natural, para heridas", preparacion: "Hervir hojas y aplicar en la herida" },
      { name: "Guarumo", native: "—", scientific: "Cecropia peltata", pueblo: "Bribri, Cabécar", uso: "Para diabetes, presión arterial, tos", preparacion: "Hojas en infusión" },
      { name: "Dormilona", native: "—", scientific: "Mimosa pudica", pueblo: "Bribri", uso: "Para insomnio, nervios, dolor de cabeza", preparacion: "Infusión de hojas antes de dormir" },
      { name: "Zacate limón", native: "—", scientific: "Cymbopogon citratus", pueblo: "Todos", uso: "Digestivo, calmante, resfriados", preparacion: "Hojas en infusión" },
      { name: "Saúco", native: "—", scientific: "Sambucus mexicana", pueblo: "Todos", uso: "Fiebre, tos, gripes", preparacion: " Flores y hojas en infusión" },
      { name: "Cola de caballo", native: "—", scientific: "Equisetum", pueblo: "Ngäbe", uso: "Diurético, limpieza renal", preparacion: "Tallos en infusión" },
      { name: "Ayote", native: "—", scientific: "Cucurbita moschata", pueblo: "Todos", uso: "Semilla antiparasitaria, pulpa nutritiva", preparacion: "Semillas secas molidas con agua" },
      { name: "Miel de abeja", native: "—", scientific: "—", pueblo: "Todos", uso: "Antibiótico natural, energía, heridas", preparacion: "Directa o en infusiones" },
      { name: "Ajo", native: "—", scientific: "Allium sativum", pueblo: "Todos", uso: "Antibiótico natural, circulación", preparacion: "Directo o en infusiones" }
    ],
    practices: [
      { name: "Soba de huesos", desc: "Técnica de masaje tradicional para tratar fracturas y luxaciones", pueblo: "Bribri, Cabécar", practitioner: "Awá (médico tradicional)" },
      { name: "Baño de vapor", desc: "Baño con hierbas calentadas al fuego para purificar el cuerpo", pueblo: "Ngäbe", practitioner: "Curandero tradicional" },
      { name: "Ceremonia del cacao", desc: "Ritual de sanación espiritual usando cacao sagrado", pueblo: "Bribri", practitioner: "Awá" },
      { name: "Soplo de tabaco", desc: "Uso ceremonial del tabaco para limpiar energías negativas", pueblo: "Bribri, Cabécar", practitioner: "Awá" },
      { name: "Ventosa", desc: "Técnica de succión con recipiente caliente para extraer malas energías", pueblo: "Todos", practitioner: "Médico tradicional" }
    ],
    conceptos: [
      { es: "Médico tradicional", native: "Awá (Bribri, Cabécar)" },
      { es: "Planta medicinal", native: "Sé' (Bribri)" },
      { es: "Energía espiritual", native: "Chichá (Bribri)" }
    ]
  },

  art: {
    techniques: [
      { name: "Teñido natural", desc: "Uso de plantas nativas para teñir fibras", pueblo: "Boruca, Ngäbe", colors: "Achiote (rojo), Jagua (azul/negro), Cúrcuma (amarillo)" },
      { name: "Cestería", desc: "Tejido de fibras vegetales para canastos y utensilios", pueblo: "Maleku, Bribri", materials: "Bejuco, caña brava, palma" },
      { name: "Talla de jícaras", desc: "Tallado decorativo en frutos de jícara", pueblo: "Maleku, Boruca", materials: "Jícara (crescentia cujete)" },
      { name: "Tejido en chaquira", desc: "Arte de abalorios con diseños geométricos y animales", pueblo: "Ngäbe", materials: "Chaquiras de colores, hilo" },
      { name: "Máscara de diablito", desc: "Máscara de madera tallada para el Juego de los Diablitos", pueblo: "Boruca", materials: "Madera de cedro, pintura natural" },
      { name: "Cerámica", desc: "Vasijas y utensilios de barro decorados", pueblo: "Huetar (histórico)", materials: "Barro, pintura mineral" },
      { name: "Petroglifos", desc: "Grabados en piedra con figuras geométricas y animales", pueblo: "Huetar (histórico)", materials: "Piedra volcánica" },
      { name: "Textil tradicional", desc: "Tejido de algodón con figuras tradicionales", pueblo: "Boruca, Ngäbe", materials: "Algodón, fibras naturales, tintes" }
    ],
    symbols: [
      { figure: "Espiral", meaning: "El camino de la vida, el viaje espiritual", pueblo: "Bribri, Cabécar" },
      { figure: "Jaguar", meaning: "Fuerza, poder espiritual, protector", pueblo: "Todos" },
      { figure: "Árbol del mundo", meaning: "Conexión entre cielo, tierra e inframundo", pueblo: "Bribri" },
      { figure: "Serpiente", meaning: "Sabiduría, renovación, la tierra misma", pueblo: "Bribri, Maleku" },
      { figure: "Ave", meaning: "Mensajera entre mundos, libertad del espíritu", pueblo: "Todos" },
      { figure: "Doble espiral", meaning: "Equilibrio y dualidad de la existencia", pueblo: "Huetar (petroglifos)" },
      { figure: "Cacao", meaning: "Corazón de la tierra, conexión divina", pueblo: "Bribri" }
    ]
  },

  culture: {
    cosmovision: [
      { topic: "Sibú y la creación", desc: "Sibú es el dios creador en la cosmovisión bribri y cabécar. Según la tradición, Sibú sembró las semillas del mundo en el pecho de la tierra y de ellas brotaron todos los seres.", pueblo: "Bribri, Cabécar" },
      { topic: "Los Clanes", desc: "La sociedad bribri se organiza en clanes matrilineales (por línea materna). Cada clan tiene un animal o elemento natural como tótem.", pueblo: "Bribri" },
      { topic: "El Awá", desc: "El médico tradicional que puede comunicarse con el mundo espiritual. Usa plantas sagradas, cacao y cantos para sanar.", pueblo: "Bribri, Cabécar" },
      { topic: "El Juego de los Diablitos", desc: "Fiesta tradicional boruca que representa la resistencia del pueblo indígena contra los conquistadores españoles. Los 'diablitos' (participantes disfrazados) vencen al 'toro' (el español).", pueblo: "Boruca" },
      { topic: "Ngöbö y la naturaleza", desc: "Para los ngäbe, Ngöbö es el creador que todo lo ve. La naturaleza es su manifestación: cada río, montaña y animal tiene un espíritu.", pueblo: "Ngäbe" },
      { topic: "El jaguar protector", desc: "En la cultura maleku, el jaguar es un animal sagrado, guardián de los secretos de la selva y protector de la comunidad.", pueblo: "Maleku" },
      { topic: "Garabito, el gran cacique", desc: "Cacique huetar que lideró la resistencia contra los conquistadores españoles en el Valle Central. Su astucia y valentía son recordadas.", pueblo: "Huetar" },
      { topic: "Ceremonias del cacao", desc: "El cacao no es solo alimento: es un vehículo espiritual. Las ceremonias de cacao bribri conectan a los participantes con el mundo espiritual.", pueblo: "Bribri" }
    ],
    ceremonies: [
      { name: "Juego de los Diablitos", when: "Diciembre - Enero", desc: "Fiesta de tres días donde los borucas representan la lucha entre indígenas (diablitos) y españoles (toro)", pueblo: "Boruca" },
      { name: "Ceremonia del Cacao", when: "Según el awá", desc: "Ritual de sanación y conexión espiritual usando cacao ceremonial", pueblo: "Bribri" },
      { name: "Rito fúnebre bribri", when: "Tras fallecimiento", desc: "Ceremonia donde el alma es guiada al otro mundo con cantos y ofrendas", pueblo: "Bribri" },
      { name: "Fiesta del maíz", when: "Época de cosecha", desc: "Celebración agradeciendo la cosecha de maíz con bailes y chicha", pueblo: "Cabécar, Ngäbe" },
      { name: "Migración ngäbe", when: "Estacional", desc: "Las familias ngäbe migran siguiendo los ciclos de la naturaleza y las cosechas", pueblo: "Ngäbe" }
    ],
    social: [
      { topic: "Matrilinealidad", desc: "En los pueblos bribri y cabécar, la pertenencia al clan se hereda por línea materna", pueblo: "Bribri, Cabécar" },
      { topic: "Autoridad tradicional", desc: "La figura del cacique y el awá son las máximas autoridades dentro de la comunidad", pueblo: "Todos" },
      { topic: "Territorios indígenas", desc: "Costa Rica reconoce 24 territorios indígenas donde estos pueblos ejercen su autonomía", pueblo: "Todos" },
      { topic: "Lengua e identidad", desc: "La lengua es el vehículo principal de transmisión de la cosmovisión y el conocimiento ancestral", pueblo: "Todos" }
    ]
  },

  qa: [
    { pregunta: "¿cómo se dice hola en bribri?", respuesta: "En bribri se dice 'di' tte' (se pronuncia 'di tte'). Es un saludo informal y cotidiano que se usa entre personas conocidas.", categoria: "lengua", lengua: "bribri", animacion: "saludo" },
    { pregunta: "¿cómo se dice gracias en ngäbe?", respuesta: "En ngäbe se dice 'möi nuge' (se pronuncia 'möi nuge'). También se usa 'möi' como saludo general.", categoria: "lengua", lengua: "ngabe", animacion: "saludo" },
    { pregunta: "¿cómo se dice agua en bribri?", respuesta: "En bribri, agua se dice 'dí' (se pronuncia 'di'). El agua es considerada un elemento sagrado, fuente de vida.", categoria: "lengua", lengua: "bribri", animacion: "naturaleza" },
    { pregunta: "¿cómo se dice sol en ngäbe?", respuesta: "En ngäbe, sol se dice 'ngö' (se pronuncia 'ngö'). El sol es una deidad importante en la cosmovisión ngäbe.", categoria: "lengua", lengua: "ngabe", animacion: "naturaleza" },
    { pregunta: "¿qué es el Juego de los Diablitos?", respuesta: "Es la tradición más importante del pueblo boruca. Se celebra entre diciembre y enero. Representa la resistencia indígena contra los españoles. Los 'diablitos' (jóvenes con máscaras de madera) luchan contra el 'toro' (que simboliza al español). Participa toda la comunidad.", categoria: "cultura", animacion: "ceremonia" },
    { pregunta: "¿quién es Sibú?", respuesta: "Sibú es el dios creador en la cosmovisión bribri y cabécar. Según la tradición, creó el mundo sembrando semillas en el pecho de la tierra. Es una figura central en su cosmovisión.", categoria: "cultura", animacion: "cosmovision" },
    { pregunta: "¿qué es un awá?", respuesta: "El awá es el médico tradicional bribri y cabécar. Es un intermediario entre el mundo espiritual y el físico. Usa plantas sagradas, cacao, cantos y oraciones para sanar enfermedades del cuerpo y del espíritu.", categoria: "cultura", animacion: "medicina" },
    { pregunta: "¿qué plantas medicinales usan los bribris?", respuesta: "Los bribris usan muchas plantas medicinales. Algunas de las más importantes son: guarumo (para diabetes), sángrillo (cicatrizante), dormilona (insomnio), zacate limón (digestivo) y jengibre (antiinflamatorio). El awá conoce cuáles usar según la enfermedad.", categoria: "medicina", animacion: "medicina" },
    { pregunta: "¿qué comidas tradicionales tienen los indígenas de Costa Rica?", respuesta: "Los pueblos indígenas tienen una rica tradición culinaria. Algunos platos importantes son: sopa de ayote, bollos de maíz, pescado ahumado, cacao ceremonial, chicha de maíz, pejibaye y yuca. El maíz y el cacao son ingredientes sagrados en muchas comunidades.", categoria: "comida", animacion: "comida" },
    { pregunta: "¿cómo se dice maíz en las lenguas indígenas?", respuesta: "Maíz se dice: en bribri 'kókó', en cabécar 'kókó', en maleku 'ópe', en boruca 'yís'. El maíz es la base de la alimentación y tiene un significado sagrado en todas las culturas indígenas de Costa Rica.", categoria: "lengua", animacion: "comida" },
    { pregunta: "¿qué arte tradicional tienen los ngäbes?", respuesta: "Los ngäbes son famosos por su arte en chaquira (abalorios), con el que crean collares, pulseras y cinturones con diseños geométricos y de animales. También tejen sus vestidos tradicionales de colores brillantes llamados 'nawar'. El teñido natural lo hacen con achiote (rojo) y jagua (azul).", categoria: "arte", animacion: "arte" },
    { pregunta: "¿cuántos indígenas hay en Costa Rica?", respuesta: "Costa Rica tiene aproximadamente 114,000 personas indígenas, que representan alrededor del 2.4% de la población. Se reconocen 8 pueblos indígenas: Bribri, Cabécar, Ngäbe, Maleku, Boruca, Térraba, Huetar y Bröran (Brorán). Hay 24 territorios indígenas reconocidos legalmente.", categoria: "cultura", animacion: "cosmovision" },
    { pregunta: "¿qué significa la espiral en el arte indígena?", respuesta: "La espiral es uno de los símbolos más importantes. Representa el camino de la vida, el viaje espiritual que todos emprendemos. También simboliza el movimiento de la energía, el crecimiento y la evolución. Se encuentra en petroglifos huetares y en diseños bribris.", categoria: "arte", animacion: "arte" },
    { pregunta: "¿cómo se dice madre en las lenguas indígenas?", respuesta: "Madre se dice: en bribri 'kã', en cabécar 'kã', en ngäbe 'mama', en maleku 'máma'. La madre es una figura sagrada, y la tierra también es llamada 'madre' en muchas lenguas.", categoria: "lengua", animacion: "naturaleza" },
    { pregunta: "¿qué es la chicha?", respuesta: "La chicha es una bebida tradicional fermentada hecha principalmente de maíz. Cada pueblo tiene su propia versión: chicha bribri, chicha boruca, chicha maleku. Se usa en celebraciones, ceremonias y rituales. Es una bebida que une a la comunidad.", categoria: "comida", animacion: "comida" },
    { pregunta: "¿cómo se organizan socialmente los bribris?", respuesta: "Los bribris se organizan en clanes matrilineales, lo que significa que la pertenencia al clan se hereda por la madre. Cada clan tiene un tótem animal o natural. La familia extendida es la base de la organización social y el awá es una autoridad espiritual.", categoria: "cultura", animacion: "cosmovision" },
    { pregunta: "¿qué lenguas indígenas se hablan en Costa Rica?", respuesta: "Se hablan 7 lenguas indígenas: Bribri, Cabécar, Ngäbere (Guaymí), Maleku (Guatuso), Boruca, Térraba y Huetar (esta última está extinta como lengua hablada, pero viva en la memoria cultural). Todas pertenecen a la familia lingüística Chibcha.", categoria: "lengua", animacion: "saludo" },
    { pregunta: "¿qué es un petroglifo?", respuesta: "Los petroglifos son grabados en piedra hechos por los pueblos indígenas antes de la llegada de los españoles. Los huetares dejaron petroglifos con espirales, figuras humanas y animales. Se encuentran en el Valle Central y Pacífico Central. Son mensajes de los ancestros.", categoria: "arte", animacion: "arte" },
    { pregunta: "¿cómo se dice cacao en bribri?", respuesta: "En bribri, cacao se dice 'kakáu'. El cacao es sagrado para los bribris: es el corazón de la tierra, usado en ceremonias espirituales para conectar con Sibú y el mundo espiritual.", categoria: "lengua", lengua: "bribri", animacion: "comida" },
    { pregunta: "¿qué es el territorio indígena?", respuesta: "Los territorios indígenas son áreas legalmente reconocidas por el Estado costarricense donde los pueblos indígenas ejercen su autonomía y gobierno propio. Hay 24 territorios que suman aproximadamente el 7% del territorio nacional.", categoria: "cultura", animacion: "cosmovision" },
    { pregunta: "¿cuál es el plato tradicional boruca?", respuesta: "Uno de los platos más representativos de los borucas es el bollo de maíz relleno, envuelto en hojas y cocido al vapor. Durante el Juego de los Diablitos se preparan comidas especiales y chicha para todos los participantes.", categoria: "comida", animacion: "comida" },
    { pregunta: "¿qué tradiciones tienen los malekus?", respuesta: "Los malekus son conocidos por su cestería, talla de jícaras decoradas y su tradición de caza con cerbatana. El jaguar es un animal sagrado en su cultura. Anteriormente vivían en grandes casas comunales (palenques).", categoria: "cultura", animacion: "arte" },
    { pregunta: "¿cómo se dice casa en bribri?", respuesta: "En bribri, casa se dice 'ú' (se pronuncia 'u'). La casa es más que un refugio: es el centro de la vida familiar, donde se comparten historias y se transmiten las tradiciones.", categoria: "lengua", lengua: "bribri", animacion: "saludo" },
    { pregunta: "¿qué es el maíz para los indígenas?", respuesta: "El maíz es el alimento sagrado por excelencia. En la mitología bribri, el maíz fue un regalo de Sibú a los humanos. Es la base de la alimentación (tortillas, bollos, chicha) y tiene un profundo significado espiritual en todas las culturas indígenas de Costa Rica.", categoria: "comida", animacion: "comida" },
    { pregunta: "¿qué pintura natural usan los indígenas?", respuesta: "Los indígenas usan tintes naturales de plantas: achiote (rojo intenso), jagua (azul/negro), cúrcuma (amarillo), hojas de índigo (azul), corteza de mangle (marrón). Estos tintes se usan para teñir telas, fibras y para pintura corporal ceremonial.", categoria: "arte", animacion: "arte" },
    { pregunta: "¿qué significa el jaguar para los malekus?", respuesta: "El jaguar es el animal sagrado más importante para los malekus. Representa el poder, la protección y es un guía espiritual. El baile del jaguar es una tradición que honra a este animal sagrado.", categoria: "cultura", animacion: "naturaleza" },
    { pregunta: "¿cómo se celebra la muerte en la cultura bribri?", respuesta: "Los bribris tienen un rito fúnebre muy elaborado donde el alma es guiada al otro mundo (Suláyi) mediante cantos, ofrendas y ceremonias. Se cree que el alma viaja a través de un río subterráneo. El awá guía este proceso espiritual.", categoria: "cultura", animacion: "ceremonia" },
    { pregunta: "¿qué es la miel de abeja para los indígenas?", respuesta: "La miel de abeja es un antibiótico natural y un endulzante tradicional. Se usa para tratar heridas (aplicación directa), para la energía y en infusiones medicinales. Las abejas son respetadas como seres sagrados.", categoria: "medicina", animacion: "medicina" },
    { pregunta: "¿cuál es la lengua más hablada de Costa Rica?", respuesta: "La lengua indígena más hablada es el bribri, con aproximadamente 7,000 hablantes. Le sigue el ngäbere (5,000) y el cabécar (3,000). Las más amenazadas son el térraba (menos de 30 hablantes) y el huetar (extinto como lengua hablada).", categoria: "lengua", animacion: "saludo" },
    { pregunta: "¿qué es la cosmovisión indígena?", respuesta: "Es la forma en que los pueblos indígenas entienden el mundo y su lugar en él. Incluye su origen (creación del mundo por Sibú), su relación con la naturaleza (todo está vivo y conectado), sus espíritus y deidades, y sus ceremonias. No separan lo material de lo espiritual.", categoria: "cultura", animacion: "cosmovision" },
    { pregunta: "¿cómo se dice tierra en bribri?", respuesta: "En bribri, tierra se dice 'míkë' (se pronuncia 'mikë'). La tierra es la madre que nos sostiene. En todas las culturas indígenas la tierra es sagrada y debe ser cuidada.", categoria: "lengua", lengua: "bribri", animacion: "naturaleza" },
    { pregunta: "¿qué hacen en la celebración del maíz?", respuesta: "La Fiesta del Maíz se celebra cuando llega la cosecha. La comunidad se reúne para agradecer a la tierra. Hay bailes tradicionales, música con tambores y flautas, comida compartida y chicha para todos. Es una celebración de gratitud y comunidad.", categoria: "comida", animacion: "comida" },
    { pregunta: "¿qué son las máscaras borucas?", respuesta: "Las máscaras borucas son talladas en madera de cedro. Representan rostros con expresiones intensas, pintados con colores vivos. Se usan en el Juego de los Diablitos. Cada máscara es única y hecha a mano por un artesano.", categoria: "arte", animacion: "arte" },
    { pregunta: "¿qué es la cerbatana?", respuesta: "La cerbatana es un instrumento de caza tradicional usado por los malekus y otros pueblos indígenas. Es un tubo largo hueco por el que se sopla un dardo pequeño. Exige gran precisión y paciencia. Hoy se usa más como práctica cultural que para la caza.", categoria: "cultura", animacion: "naturaleza" },
    { pregunta: "¿cómo se dice sol en las lenguas indígenas?", respuesta: "Sol se dice: en bribri 'dö', en cabécar 'dö', en ngäbe 'ngö', en maleku 'jí', en boruca 'krá'. El sol es una deidad importante, dador de vida y luz.", categoria: "lengua", animacion: "naturaleza" },
    { pregunta: "¿qué es la chaquira ngäbe?", respuesta: "La chaquira es un arte tradicional ngäbe donde se tejen abalorios (cuentas pequeñas de colores) para crear collares, pulseras y cinturones con diseños geométricos, animales y florales. Cada diseño tiene un significado cultural. Es una tradición que se transmite de madres a hijas.", categoria: "arte", animacion: "arte" },
    { pregunta: "¿qué es una jícara tallada?", respuesta: "Las jícaras son frutos del árbol de jícara (crescentia cujete) que, secos y tallados, se convierten en recipientes decorativos. Los malekus y borucas tallan figuras de animales, espirales y escenas de la vida cotidiana en ellas.", categoria: "arte", animacion: "arte" },
    { pregunta: "¿cuántos territorios indígenas hay?", respuesta: "Costa Rica reconoce 24 territorios indígenas, distribuidos en todo el país. Los territorios más grandes están en Talamanca (Bribri y Cabécar) y el sur (Ngäbe). Estos territorios son autónomos y tienen su propio gobierno según la ley indígena.", categoria: "cultura", animacion: "cosmovision" },
    { pregunta: "¿qué idioma hablaban los huetares?", respuesta: "Los huetares hablaban una lengua de la familia Chibcha, hoy extinta como lengua hablada. Sin embargo, los descendientes huetares están trabajando en la revitalización de su identidad cultural y la recuperación de palabras y tradiciones.", categoria: "lengua", animacion: "saludo" },
    { pregunta: "¿cuál es la importancia del río?", respuesta: "Los ríos son venas de la tierra, fuentes de vida y de conexión espiritual. En la cosmovisión bribri, el alma viaja a través de un río subterráneo después de la muerte. Los ríos proveen alimento (pescado) y agua para la vida diaria.", categoria: "cultura", animacion: "naturaleza" },
    { pregunta: "¿qué es el ayote?", respuesta: "El ayote es una calabaza tradicional de la región. Es un alimento versátil: se usa en sopas, hervidos, dulces. Su semilla se usa como antiparasitario natural. Es un ingrediente importante en la cocina indígena costarricense.", categoria: "comida", animacion: "comida" },
    { pregunta: "¿cómo se dice fuego en bribri?", respuesta: "En bribri, fuego se dice 'chichá' (se pronuncia 'chicha'). El fuego purifica y transforma. Es un elemento central en ceremonias y en la vida cotidiana.", categoria: "lengua", lengua: "bribri", animacion: "naturaleza" },
    { pregunta: "¿qué es el árbol del mundo?", respuesta: "El Árbol del Mundo es un símbolo central en la cosmovisión bribri. Sus raíces llegan al inframundo, su tronco recorre la tierra y sus ramas tocan el cielo. Conecta todos los niveles de la existencia. Cada ser vivo es parte de este gran árbol.", categoria: "cultura", animacion: "cosmovision" },
    { pregunta: "¿qué es el cacao para los bribris?", respuesta: "El cacao (kakáu) es sagrado. Es el corazón de la tierra, un regalo de Sibú. Se usa ceremonialmente para sanar, conectar con el mundo espiritual y unir a la comunidad. La ceremonia del cacao es guiada por el awá.", categoria: "comida", animacion: "comida" },
    { pregunta: "¿qué técnicas de cestería tienen?", respuesta: "La cestería indígena usa fibras de bejuco, caña brava, palma y junco. Se tejen canastos, petates, aventadores y utensilios. Los malekus son reconocidos por su cestería fina. Cada pieza puede tardar días en completarse.", categoria: "arte", animacion: "arte" },
    { pregunta: "¿qué es el zacate limón?", respuesta: "El zacate limón es una planta medicinal usada por todos los pueblos indígenas. Sirve como digestivo, calmante para los nervios y para tratar resfriados. Se prepara en infusión con las hojas frescas o secas.", categoria: "medicina", animacion: "medicina" },
    { pregunta: "¿qué es un palenque?", respuesta: "Un palenque es una vivienda tradicional grande, de forma cónica o rectangular, con techo de paja o palma. Antiguamente varias familias vivían juntas en un mismo palenque. Hoy los malekus y bribris aún construyen palenques para reuniones comunitarias.", categoria: "cultura", animacion: "naturaleza" },
    { pregunta: "¿qué significado tiene el maíz?", respuesta: "El maíz es más que alimento: es identidad, es historia, es espiritualidad. En la mitología bribri, el maíz fue sembrado por Sibú en el pecho de la tierra. Sin maíz no hay vida. Es la base de la alimentación y de las celebraciones.", categoria: "comida", animacion: "comida" },
    { pregunta: "¿cómo se dice luna en ngäbe?", respuesta: "En ngäbe, luna se dice 'nä' (se pronuncia 'nä'). La luna es la guía nocturna, asociada con la fertilidad y los ciclos de la naturaleza.", categoria: "lengua", lengua: "ngabe", animacion: "naturaleza" }
  ]
};
