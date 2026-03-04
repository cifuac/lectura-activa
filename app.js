/* ======================================
   APP.JS — Enciclopedia Interactiva
   Modal-based annotation viewer
   ====================================== */

const annotations = {
  1: {
    phrase: "Saint-Exupéry",
    category: "Enciclopedia biográfica y literaria",
    catColor: "var(--cat-bio)",
    content: "Antoine Marie Jean-Baptiste Roger, conde de Saint-Exupéry (1900-1944). Es fundamental entender que no fue un escritor que volaba como pasatiempo, ni un piloto que escribía por afición; fue un exponente paradigmático del 'intelectual de acción' del siglo XX. Su obra funda un humanismo basado en la ética del deber, el sacrificio y el compañerismo, valores forjados en situaciones extremas de supervivencia. Conocer su figura implica anticipar una narrativa donde la máquina (el avión) es un instrumento para el descubrimiento filosófico del hombre."
  },
  2: {
    phrase: "El 31 de julio de 1944, con Francia todavía ocupada por los alemanes, dos pilotos de la Luftwaffe derribaron un avión estadounidense cerca de la costa de Marsella",
    category: "Enciclopedia historiográfica y geopolítica (Segunda Guerra Mundial)",
    catColor: "var(--cat-hist)",
    content: "Este fragmento condensa múltiples capas de la contingencia bélica.\n\n• Francia ocupada: Remite a la derrota francesa en 1940. El país estaba dividido y humillado, bajo el control del Tercer Reich en el norte y el régimen colaboracionista de Vichy en el sur.\n• Luftwaffe: La fuerza aérea de la Alemania nazi, altamente letal y tecnológica.\n• Avión estadounidense comandado por un francés: Requiere que el lector conozca la existencia de las Fuerzas Francesas Libres (lideradas por Charles de Gaulle desde el exilio), cuyos pilotos se integraron a escuadrones estadounidenses y británicos para liberar su propio territorio. Esta frase explica el trágico contexto final de su vida: morir luchando por la liberación de su patria a manos de la maquinaria militar nazi, apenas semanas antes de la liberación de París."
  },
  3: {
    phrase: "aristócrata francés de 44 años",
    category: "Enciclopedia sociológica e histórica",
    catColor: "var(--cat-socio)",
    content: "Saint-Exupéry poseía el título nobiliario de vizconde. A principios del siglo XX, la aristocracia europea (y la francesa en particular) estaba en un profundo declive sociopolítico tras la Primera Guerra Mundial. Muchos jóvenes nobles encontraron en la incipiente aviación —que requería valor temerario y un código de honor semejante al de la antigua caballería— un espacio para reinstaurar una moral heroica. Además, el dato de los '44 años' es crucial en la aviación militar de combate de la Segunda Guerra Mundial: era considerado un hombre excesivamente mayor, con reflejos disminuidos, lo que subraya la testarudez y la influencia política que tuvo que ejercer para que le permitieran seguir volando en misiones de guerra."
  },
  4: {
    phrase: "los aliados",
    category: "Enciclopedia historiográfica",
    catColor: "var(--cat-hist)",
    content: "Referencia directa a la coalición militar internacional que se formó para detener el avance de las Potencias del Eje (Alemania, Italia, Japón). Estaba encabezada por Estados Unidos, Gran Bretaña, la Unión Soviética y la Francia Libre. En el contexto espacial del texto (islas de Córcega y Cerdeña), refiere específicamente a las bases angloamericanas desde donde se preparaba la invasión del sur de Francia (Operación Dragoon)."
  },
  5: {
    phrase: "El Principito",
    category: "Enciclopedia literaria y cultural",
    catColor: "var(--cat-literar)",
    content: "Le Petit Prince (1943). Es la obra cumbre del autor y el libro francés más traducido de la historia. El lector debe actualizar no solo el argumento superficial (el encuentro entre un piloto averiado y un niño de otro planeta), sino su profundidad simbólica: es un texto sobre el absurdo del mundo adulto, la amistad, la domesticación y la pérdida. Comprender el texto periodístico exige saber que el piloto de la novela de ficción sufre un accidente en el Sahara, un espejo literal de un accidente que el propio Saint-Exupéry sobrevivió milagrosamente en 1935 en el desierto de Libia."
  },
  6: {
    phrase: "El veneno se instalaba de este modo en su sangre",
    category: "Enciclopedia lingüística y retórica",
    catColor: "var(--cat-ling)",
    content: "Aquí se requiere una competencia semántica para descifrar el lenguaje figurado. 'Veneno' no actúa en su denotación literal (sustancia tóxica que mata), sino como una metáfora de la adicción o pasión irrefrenable. Se refiere al llamado ineludible de la aviación; una vocación que se inoculó en él desde niño, que lo consumiría por completo y que, paradójicamente (como un veneno real), terminaría causándole la muerte."
  },
  7: {
    phrase: "Aeropostale",
    category: "Enciclopedia de la historia tecnológica",
    catColor: "var(--cat-geo)",
    content: "La Compagnie Générale Aéropostale fue la legendaria empresa de aviación francesa de la década de 1920, pionera en el transporte de correo internacional. Para el lector informado, evoca la 'era heroica' de la aviación comercial: aviones de lona y madera, sin cabinas presurizadas ni radares, atravesando océanos y montañas para asegurar que la correspondencia llegara a su destino. Los pilotos de la Aéropostale forjaron una mística de sacrificio donde el correo era considerado sagrado, a menudo costándoles la vida."
  },
  8: {
    phrase: "Dicen también que por esto, en su novela Vuelo Nocturno le atribuyó un rol heroico a este oficio básicamente burocrático",
    category: "Enciclopedia literaria e intertextual",
    catColor: "var(--cat-inter)",
    content: "Vol de Nuit (Vuelo Nocturno, 1931) es una novela clave de Saint-Exupéry. El texto periodístico hace una ironía sobre el puesto de 'director de ruta'. El lector debe saber que en Vuelo Nocturno, el protagonista, Rivière (inspirado en el jefe real de la Aéropostale, Didier Daurat), es un gerente burocrático pero es retratado como un líder estoico, despiadado y a la vez profundamente trágico. Él es quien obliga a los pilotos a volar de noche hacia la tormenta, asumiendo la pesada carga moral de enviarlos, a veces, a la muerte en nombre del progreso humano. El 'rol heroico' no recae en el piloto que arriesga la vida, sino en el jefe que tiene el coraje de exigir ese sacrificio."
  },
  9: {
    phrase: "línea de correo entre las ciudades de Toulouse y Casablanca, línea que luego extendieron hasta Dakar",
    category: "Enciclopedia geográfica y colonial",
    catColor: "var(--cat-geo)",
    content: "Refiere a la famosa 'La Ligne' (La Línea). Requiere conocimientos geográficos sobre el sur de Francia (Toulouse), el norte de África (Casablanca, Marruecos) y África Occidental (Dakar, Senegal). Históricamente, en los años 20, esta ruta representaba la interconexión del imperio colonial francés. Volar sobre el Desierto del Sahara occidental hacia Dakar implicaba un riesgo extremo: si el avión fallaba, los pilotos caían en manos de tribus hostiles (los moros disidentes), quienes solían secuestrarlos o asesinarlos, un tema que Saint-Exupéry abordó extensamente en su literatura temprana."
  },
  10: {
    phrase: "\"Lo que he hecho le dijo a Saint-Exupéry poco después- te lo juro, ningún animal lo habría podido hacer\"",
    category: "Marcas textuales y discurso directo",
    catColor: "var(--cat-text)",
    content: "Las entrecomillas le indican al lector que se trata de una cita literal, es decir, la reproducción exacta del discurso de un otro. Desde la teoría de la enunciación y los estudios de polifonía, este recurso discursivo se denomina 'estilo directo'. Su función aquí trasciende lo meramente ortográfico: rompe la voz del narrador periodístico para introducir la voz cruda del protagonista (Guillaumet). Esto dota al texto de un alto grado de verosimilitud, fuerza testimonial y dramatismo, acortando la distancia entre el lector y el evento extremo vivido en la cordillera."
  }
};

// --- STATE ---
let activeId = null;
const overlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  setupHighlights();
  setupModalClose();
  setupCompetencyNodes();
  setupLionScenario();
});

// --- HIGHLIGHTS ---
function setupHighlights() {
  document.querySelectorAll('.highlight').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(el.dataset.id);
      activeId = id;

      // Update active class
      document.querySelectorAll('.highlight').forEach(h => h.classList.remove('active'));
      el.classList.add('active');

      openModal(id);
    });
  });
}

// --- MODAL ---
function openModal(id) {
  const ann = annotations[id];
  if (!ann) return;

  const paragraphs = ann.content
    .split('\n')
    .filter(p => p.trim() !== '')
    .map(p => `<p>${p}</p>`)
    .join('');

  // Determine badge color styling
  const colorVar = ann.catColor;

  modalContent.innerHTML = `
    <button class="modal-close" id="modal-close-btn" title="Cerrar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>

    <div class="modal-phrase">
      <div class="category-badge" style="color: ${colorVar}; border-color: ${colorVar}; background: color-mix(in srgb, ${colorVar} 8%, white);">
        <span class="cat-dot" style="background: ${colorVar}"></span>
        ${ann.category}
      </div>
      <p class="phrase-text">"${escapeHtml(ann.phrase)}"</p>
    </div>

    <div class="modal-body">
      ${paragraphs}
    </div>

    <div class="modal-footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
      </svg>
      <p>Esta información enciclopédica rellena los «espacios en blanco» del texto, actualizando el sentido que el autor asumió como saberes previos del lector.</p>
    </div>

    <div class="modal-nav">
      ${Object.keys(annotations).map(nid => `
        <button class="nav-dot ${parseInt(nid) === id ? 'active' : ''}" data-nav-id="${nid}" title="Anotación ${nid}">
          ${nid}
        </button>
      `).join('')}
    </div>
  `;

  // Set glow color on top border
  const card = modalContent;
  card.style.setProperty('--glow-color', colorVar);
  card.querySelector('.modal-card, .modal-phrase')
  // Set the ::before color via inline style on the card
  card.style.borderTop = `3px solid ${colorVar}`;

  // Show overlay
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';

  // Close button inside modal
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);

  // Nav dots
  modalContent.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const newId = parseInt(dot.dataset.navId);
      activeId = newId;

      // Update highlights in text
      document.querySelectorAll('.highlight').forEach(h => {
        h.classList.toggle('active', parseInt(h.dataset.id) === newId);
      });

      openModal(newId);
    });
  });
}

function closeModal() {
  overlay.classList.remove('visible');
  document.body.style.overflow = '';

  // Clear active highlight
  document.querySelectorAll('.highlight').forEach(h => h.classList.remove('active'));
  activeId = null;
}

function setupModalClose() {
  // Click on overlay backdrop
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// --- UTILITY ---
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ======================================
// INTERACTIVE DIAGRAM — Competency Nodes
// ======================================
const competencyDetails = {
  ling: {
    title: '1. Lingüística',
    summary: 'Asegura que el mensaje sea gramaticalmente legible y semánticamente estable.',
    tag: 'Código de la lengua',
    cssClass: 'comp-node--ling',
    items: [
      {
        label: 'Diccionario',
        text: 'Conocer el significado denotativo de las palabras.'
      },
      {
        label: 'Sintaxis',
        text: 'Dominar las reglas que ordenan las palabras en la oración.'
      },
      {
        label: 'Gramática',
        text: 'Aplicar reglas morfológicas y fonológicas de la lengua.'
      }
    ]
  },
  enc: {
    title: '2. Enciclopédica',
    summary: 'Activa marcos de conocimiento del mundo para actualizar el sentido según el entorno discursivo.',
    tag: 'Núcleo interpretativo',
    cssClass: 'comp-node--enc',
    items: [
      {
        label: 'Contexto',
        text: 'Posibilidad abstracta de que un término aparezca con otros del mismo sistema semántico.'
      },
      {
        label: 'Cotexto',
        text: 'Actualización concreta de esas selecciones en las palabras que rodean al término.'
      },
      {
        label: 'Circunstancia',
        text: 'Situación de enunciación: quién habla, cuándo, dónde y para qué.'
      }
    ]
  },
  prag: {
    title: '3. Pragmática',
    summary: 'Interpreta intención, presuposiciones y efectos comunicativos más allá de lo literal.',
    tag: 'Uso e intención',
    cssClass: 'comp-node--prag',
    items: [
      {
        label: 'Presuposiciones',
        text: 'Activar la información implícita que el texto da por sabida.'
      },
      {
        label: 'Idiosincrasias',
        text: 'Controlar lecturas personales que distorsionen el sentido del texto.'
      },
      {
        label: 'Género y registro',
        text: 'Reconocer marcas de género textual y nivel de formalidad.'
      },
      {
        label: 'Universos de discurso',
        text: 'Identificar el marco temático que organiza la interpretación.'
      }
    ]
  }
};

function setupCompetencyNodes() {
  const nodes = document.querySelectorAll('.comp-node');
  const detailPanel = document.getElementById('comp-detail-panel');

  if (!nodes.length || !detailPanel) return;
  const placeholderMarkup = detailPanel.innerHTML;
  let activeNode = null;

  const positionPanel = (node) => {
    if (!node) {
      detailPanel.style.left = `${Math.max(12, (window.innerWidth - (detailPanel.offsetWidth || 320)) / 2)}px`;
      detailPanel.style.top = '16px';
      return;
    }

    const nodeRect = node.getBoundingClientRect();
    const horizontalMargin = 12;
    const verticalMargin = 12;
    const gap = 10;
    const panelWidth = Math.min(520, window.innerWidth - horizontalMargin * 2);

    detailPanel.style.width = `${panelWidth}px`;

    const panelHeight = detailPanel.offsetHeight || 250;
    let left = nodeRect.left + nodeRect.width / 2 - panelWidth / 2;
    left = Math.max(horizontalMargin, Math.min(left, window.innerWidth - panelWidth - horizontalMargin));

    let top = nodeRect.bottom + gap;
    if (top + panelHeight > window.innerHeight - verticalMargin) {
      top = nodeRect.top - panelHeight - gap;
    }
    top = Math.max(verticalMargin, top);

    detailPanel.style.left = `${left}px`;
    detailPanel.style.top = `${top}px`;
  };

  const closePanel = () => {
    nodes.forEach(n => {
      n.classList.remove('active');
      n.setAttribute('aria-expanded', 'false');
    });
    detailPanel.classList.remove('visible');
    detailPanel.setAttribute('aria-hidden', 'true');
    detailPanel.innerHTML = placeholderMarkup;
    detailPanel.style.top = '';
    detailPanel.style.left = '';
    detailPanel.style.width = '';
    activeNode = null;
  };

  const renderPanel = (compKey, node) => {
    const detail = competencyDetails[compKey];
    if (!detail) return;

    detailPanel.innerHTML = `
      <div class="comp-detail-panel__inner ${detail.cssClass}">
        <button class="comp-detail-panel__close" type="button" aria-label="Cerrar panel de competencia">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div class="comp-detail-panel__tag">${detail.tag}</div>
        <h3 class="comp-detail-panel__title">${detail.title}</h3>
        <ul class="comp-detail-panel__list">
          ${detail.items.map(item => `
            <li>
              <strong>${item.label}:</strong> ${item.text}
            </li>
          `).join('')}
        </ul>
      </div>
    `;

    detailPanel.classList.add('visible');
    detailPanel.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => positionPanel(node));

    const closeBtn = detailPanel.querySelector('.comp-detail-panel__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closePanel);
    }
  };

  const activateNode = (node) => {
    const alreadyActive = node.classList.contains('active');

    if (alreadyActive) {
      closePanel();
      return;
    }

    const compKey = node.dataset.comp;
    nodes.forEach(n => {
      n.classList.remove('active');
      n.setAttribute('aria-expanded', 'false');
    });
    node.classList.add('active');
    node.setAttribute('aria-expanded', 'true');
    activeNode = node;
    renderPanel(compKey, node);
  };

  nodes.forEach(node => {
    node.setAttribute('aria-expanded', 'false');
    node.addEventListener('click', () => activateNode(node));
    node.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activateNode(node);
      }
    });
  });

  detailPanel.setAttribute('aria-hidden', 'true');

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePanel();
    }
  });

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const clickedInsidePanel = target ? detailPanel.contains(target) : false;
    const clickedNode = target ? target.closest('.comp-node') : null;

    if (!clickedInsidePanel && !clickedNode && detailPanel.classList.contains('visible')) {
      closePanel();
    }
  });

  window.addEventListener('resize', () => {
    if (activeNode && detailPanel.classList.contains('visible')) {
      positionPanel(activeNode);
    }
  });

  window.addEventListener('scroll', () => {
    if (activeNode && detailPanel.classList.contains('visible')) {
      positionPanel(activeNode);
    }
  }, true);
}

// ======================================
// INTERACTIVE DIAGRAM — Lion Scenario
// ======================================
const lionContexts = {
  selva: {
    connotation: 'Libertad · Ferocidad',
    meaning: '→ Connota libertad y ferocidad',
    explanation: 'En cotexto con «selva», la enciclopedia del lector activa las proposiciones sobre el león como animal salvaje, depredador supremo, libre en su hábitat. El término se carga de connotaciones de poder indomable, majestuosidad y peligro.',
    cssClass: 'ctx-selva',
    imageSrc: 'Gemini_Generated_Image_wh16knwh16knwh16.png',
    imageAlt: 'León en la selva, en estado salvaje'
  },
  circo: {
    connotation: 'Amaestramiento · Sumisión',
    meaning: '→ Connota amaestramiento',
    explanation: 'En cotexto con «circo», la enciclopedia activa un registro completamente distinto: el león ya no es libre, sino un animal domesticado que obedece órdenes, salta por aros y actúa para el entretenimiento humano. Las connotaciones se desplazan hacia la sumisión y el espectáculo.',
    cssClass: 'ctx-circo',
    imageSrc: 'Gemini_Generated_Image_4qmvxl4qmvxl4qmv.png',
    imageAlt: 'León en el circo, bajo amaestramiento'
  },
  zoo: {
    connotation: 'Cautiverio · Melancolía',
    meaning: '→ Connota cautiverio',
    explanation: 'En cotexto con «zoológico», la enciclopedia recorta otro marco semántico: el león enjaulado, observado, desprovisto de su naturaleza. Se activan connotaciones de confinamiento, exhibición y cierta tristeza. Es el mismo signo — «león» — pero la enciclopedia lo ha transformado por completo.',
    cssClass: 'ctx-zoo',
    imageSrc: 'Gemini_Generated_Image_yl1xghyl1xghyl1x.png',
    imageAlt: 'León en el zoológico, observado en cautiverio'
  }
};

function setupLionScenario() {
  const lionImg = document.getElementById('lion-image');
  const lionImageContainer = document.querySelector('.lion-image-container');
  const lionNeutral = document.getElementById('lion-neutral');
  const lionConnotation = document.getElementById('lion-connotation');
  const connotationCard = document.getElementById('connotation-card');
  const ctxBtns = document.querySelectorAll('.ctx-btn');
  const resetBtn = document.getElementById('lion-reset-btn');

  if (!lionImg || !connotationCard) return;

  const setNeutralState = () => {
    ctxBtns.forEach(btn => btn.classList.remove('active'));

    if (lionImageContainer) {
      lionImageContainer.classList.add('neutral');
      lionImageContainer.classList.remove('context-transition');
      lionImageContainer.dataset.ctx = '';
    }

    lionImg.className = 'lion-image';
    lionImg.alt = 'Palabra león sin cotexto seleccionado';

    if (lionNeutral) lionNeutral.textContent = 'LEÓN';

    lionConnotation.textContent = '';
    lionConnotation.className = 'lion-connotation';

    connotationCard.innerHTML = '';
    connotationCard.classList.remove('visible');
    connotationCard.removeAttribute('data-ctx');

    if (resetBtn) {
      resetBtn.disabled = true;
    }
  };

  const setContext = (ctx, button) => {
    const data = lionContexts[ctx];
    if (!data) return;

    ctxBtns.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (lionImageContainer) {
      lionImageContainer.classList.remove('neutral');
      lionImageContainer.dataset.ctx = ctx;
      lionImageContainer.classList.remove('context-transition');
      void lionImageContainer.offsetWidth;
      lionImageContainer.classList.add('context-transition');
    }

    lionImg.className = 'lion-image ' + data.cssClass;
    lionImg.src = data.imageSrc;
    lionImg.alt = data.imageAlt;

    lionConnotation.textContent = data.connotation;
    lionConnotation.className = 'lion-connotation visible ' + data.cssClass;

    connotationCard.innerHTML = `
      <div class="connotation-card__inner ${data.cssClass}">
        <div class="connotation-card__context" style="color: ${getCtxColor(ctx)}">
          Cotexto: ${getCtxLabel(ctx)}
        </div>
        <div class="connotation-card__meaning">${data.meaning}</div>
        <p class="connotation-card__explanation">${data.explanation}</p>
      </div>
    `;
    connotationCard.dataset.ctx = ctx;
    connotationCard.classList.remove('visible');
    void connotationCard.offsetWidth;
    connotationCard.classList.add('visible');

    if (resetBtn) {
      resetBtn.disabled = false;
    }
  };

  ctxBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const ctx = btn.dataset.ctx;
      if (!ctx) return;
      setContext(ctx, btn);
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', setNeutralState);
  }

  setNeutralState();
}

function getCtxColor(ctx) {
  const colors = { selva: '#16a34a', circo: '#dc2626', zoo: '#2563eb' };
  return colors[ctx] || '#666';
}

function getCtxLabel(ctx) {
  const labels = { selva: 'En la selva', circo: 'En el circo', zoo: 'En el zoológico' };
  return labels[ctx] || ctx;
}
