// Configuración de obras organizadas por categorías
const WORKS = [
    // OPUSCULA PHILOSOPHICA
    { id: 'ente', title: 'De ente et essentia', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oee.html' },
    { id: 'principiis', title: 'De principiis naturae', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/opn.html' },
    { id: 'unitate', title: 'De unitate intellectus', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oca.html' },
    { id: 'aeternitate', title: 'De aeternitate mundi', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ocm.html' },
    { id: 'substantiis', title: 'De substantiis separatis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ots.html' },
    
    // OPUSCULA THEOLOGICA
    { id: 'articulis', title: 'De articulis Fidei', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oss.html' },
    { id: 'rationibus', title: 'De rationibus Fidei', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ocg.html' },
    { id: 'compendium', title: 'Compendium theologiae', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ott101.html' },
    
    // QUAESTIONES DISPUTATAE
    { id: 'qd-veritate', title: 'De veritate', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv01.html' },
    { id: 'qd-potentia', title: 'De potentia', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdp1.html' },
    { id: 'qd-anima', title: 'De anima', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qda00.html' },
    { id: 'qd-malo', title: 'De malo', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdm01.html' },
    { id: 'qd-virtutibus', title: 'De virtutibus', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdw100.html' },
    { id: 'qd-spiritualibus', title: 'De spiritualibus creaturis', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qds.html' },
    { id: 'qd-unione', title: 'De unione Verbi', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdi.html' },
    
    // QUODLIBETA
    { id: 'quod-1', title: 'Quodlibet I', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q01.html' },
    { id: 'quod-2', title: 'Quodlibet II', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q02.html' },
    { id: 'quod-3', title: 'Quodlibet III', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q03.html' },
    { id: 'quod-6', title: 'Quodlibet VI', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q06.html' },
    { id: 'quod-7', title: 'Quodlibet VII', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q07.html' },
    { id: 'quod-12', title: 'Quodlibet XII', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q12.html' },
    
    // COMMENTARIA IN ARISTOTELEM
    { id: 'peryermeneias', title: 'In Peryermeneias', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpe.html' },
    { id: 'post-analytica', title: 'In Posteriorum Analyticorum', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpa1.html' },
    { id: 'physicorum', title: 'In libros Physicorum', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpy011.html' },
    { id: 'caelo', title: 'In De caelo et mundo', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ccm0.html' },
    { id: 'generatione', title: 'In De generatione', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cgc00.html' },
    { id: 'meteora', title: 'In Meteora', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cme1.html' },
    { id: 'de-anima', title: 'In De anima', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/can1.html' },
    { id: 'sensu', title: 'In De sensu et sensato', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/css01.html' },
    { id: 'ethicorum', title: 'In Ethicorum', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ctc0101.html' },
    { id: 'politicorum', title: 'In Politicorum', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpo.html' },
    { id: 'metaphysicae', title: 'In Metaphysicae', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp00.html' },
    
    // COMMENTARIA NEOPLATONICA
    { id: 'de-causis', title: 'Super De causis', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cdc00.html' },
    { id: 'div-nominibus', title: 'Super De divinis nominibus', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cdn00.html' },
    
    // COMMENTARIA IN BOETHIUM
    { id: 'ebdomadibus', title: 'In De ebdomadibus', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cbh.html' },
    { id: 'trinitate', title: 'In De Trinitate', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cbt.html' },
    
    // COMMENTARIA BIBLICA
    { id: 'psalmos', title: 'Super Psalmos', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cps00.html' },
    { id: 'iob', title: 'Super Iob', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cio00.html' },
    { id: 'isaiam', title: 'Super Isaiam', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cis00.html' },
    { id: 'ieremiam', title: 'In Ieremiam', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cph.html' },
    { id: 'matthaeum', title: 'Super Matthaeum', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cma00.html' },
    { id: 'ioannem', title: 'Super Ioannem', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih00.html' },
    { id: 'romanos', title: 'Super Romanos', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cro00.html' },
    { id: 'cor1', title: 'Super I Corinthios', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/c1c.html' },
    { id: 'cor2', title: 'Super II Corinthios', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/c2c.html' },
    { id: 'galatas', title: 'Super Galatas', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cgl.html' },
    { id: 'ephesios', title: 'Super Ephesios', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cep.html' },
    { id: 'philippenses', title: 'Super Philippenses', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cpl.html' },
    { id: 'colossenses', title: 'Super Colossenses', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/ccl.html' },
    { id: 'thes1', title: 'Super I Thessalonicenses', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/c1t.html' },
    { id: 'tim1', title: 'Super I Timotheum', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/ct1.html' },
    { id: 'hebraeos', title: 'Super Hebraeos', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/che00.html' },
    
    // COLLATIONES
    { id: 'symbolum', title: 'In Symbolum Apostolorum', category: 'Collationes', url: 'https://www.corpusthomisticum.org/csv.html' },
    { id: 'pater', title: 'In orationem dominicam', category: 'Collationes', url: 'https://www.corpusthomisticum.org/csu00.html' },
    { id: 'ave', title: 'Expositio Salutationis angelicae', category: 'Collationes', url: 'https://www.corpusthomisticum.org/cst.html' },
    { id: 'praecepta', title: 'De decem praeceptis', category: 'Collationes', url: 'https://www.corpusthomisticum.org/cac.html' }
];

// Estado de la aplicación
let state = {
    apiKey: '',
    workerUrl: '',
    selectedWork: null,
    sections: [],
    currentSection: 0,
    searchTerm: '',
    selectedCategory: 'all'
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    state.apiKey = document.getElementById('apiKey').value;
    state.workerUrl = document.getElementById('workerUrl').value;
    
    renderWorksList();
    
    // Event listeners para configuración
    document.getElementById('apiKey').addEventListener('change', (e) => {
        state.apiKey = e.target.value;
    });
    
    document.getElementById('workerUrl').addEventListener('change', (e) => {
        state.workerUrl = e.target.value;
    });
});

// Renderizar lista de obras
function renderWorksList() {
    const worksList = document.getElementById('worksList');
    
    // Obtener categorías únicas
    const categories = ['all', ...new Set(WORKS.map(w => w.category))];
    
    // Filtrar obras
    let filteredWorks = WORKS;
    
    if (state.selectedCategory !== 'all') {
        filteredWorks = filteredWorks.filter(w => w.category === state.selectedCategory);
    }
    
    if (state.searchTerm) {
        filteredWorks = filteredWorks.filter(w => 
            w.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
    }
    
    // Crear HTML con búsqueda y filtros
    worksList.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <div style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
                <input 
                    type="text" 
                    id="searchInput" 
                    placeholder="Buscar obra..." 
                    value="${state.searchTerm}"
                    style="flex: 1; min-width: 250px; padding: 0.75rem; border: 2px solid #e0d5c7; border-radius: 4px; font-family: 'EB Garamond', serif;"
                >
                <select 
                    id="categoryFilter" 
                    style="padding: 0.75rem; border: 2px solid #e0d5c7; border-radius: 4px; font-family: 'EB Garamond', serif; background: white; min-width: 200px;"
                >
                    ${categories.map(cat => `
                        <option value="${cat}" ${state.selectedCategory === cat ? 'selected' : ''}>
                            ${cat === 'all' ? 'Todas las categorías' : cat}
                        </option>
                    `).join('')}
                </select>
            </div>
            <div style="color: var(--ink-medium); font-size: 0.9rem;">
                ${filteredWorks.length} obra${filteredWorks.length !== 1 ? 's' : ''} encontrada${filteredWorks.length !== 1 ? 's' : ''}
            </div>
        </div>
        
        <div class="works-grid">
            ${filteredWorks.map((work, index) => `
                <div class="work-card fade-in" style="animation-delay: ${index * 0.05}s" onclick="loadWork('${work.id}')">
                    <div style="font-size: 0.75rem; color: var(--gold-dark); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">
                        ${work.category}
                    </div>
                    <h3>${work.title}</h3>
                </div>
            `).join('')}
        </div>
    `;
    
    // Event listeners
    document.getElementById('searchInput').addEventListener('input', (e) => {
        state.searchTerm = e.target.value;
        renderWorksList();
    });
    
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        state.selectedCategory = e.target.value;
        renderWorksList();
    });
}

// Cargar una obra
async function loadWork(workId) {
    const work = WORKS.find(w => w.id === workId);
    if (!work) return;
    
    if (!state.workerUrl) {
        showError('Por favor, configura la URL de tu Cloudflare Worker primero.');
        return;
    }
    
    state.selectedWork = work;
    showReader();
    showLoading();
    
    try {
        // Usar el worker como proxy
        const proxyUrl = `${state.workerUrl}?url=${encodeURIComponent(work.url)}`;
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const html = await response.text();
        extractSections(html);
        
        if (state.sections.length === 0) {
            throw new Error('No se pudo extraer el texto de la obra');
        }
        
        state.currentSection = 0;
        await renderSection(0);
        
    } catch (err) {
        showError(`Error al cargar la obra: ${err.message}`);
    }
}

// Extraer secciones del HTML
function extractSections(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const paragraphs = doc.querySelectorAll('p[title]');
    
    state.sections = [];
    
    paragraphs.forEach((p) => {
        const title = p.getAttribute('title') || 'Sin título';
        let text = p.textContent.trim();
        
        // Limpiar el texto
        text = text.replace(/\[\d+\]/g, '');
        text = text.replace(/\s+/g, ' ');
        
        if (text.length > 100) {
            state.sections.push({
                title: title,
                latin: text,
                spanish: ''
            });
        }
    });
}

// Mostrar el lector
function showReader() {
    document.getElementById('worksList').style.display = 'none';
    document.getElementById('reader').style.display = 'block';
}

// Ocultar el lector
function hideReader() {
    document.getElementById('reader').style.display = 'none';
    document.getElementById('worksList').style.display = 'grid';
    state.selectedWork = null;
    state.sections = [];
}

// Mostrar loading
function showLoading() {
    const reader = document.getElementById('reader');
    reader.innerHTML = `
        <div class="reader-header">
            <h2>${state.selectedWork.title}</h2>
            <button class="back-button" onclick="hideReader()">← Volver</button>
        </div>
        <div class="loading">
            <div class="spinner"></div>
            <p>Cargando y traduciendo...</p>
        </div>
    `;
}

// Mostrar error
function showError(message) {
    const reader = document.getElementById('reader');
    const currentContent = reader.innerHTML;
    
    // Si ya hay contenido, agregar el error
    if (currentContent && !currentContent.includes('loading')) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.innerHTML = `<strong>Error:</strong> ${message}`;
        reader.insertBefore(errorDiv, reader.children[1]);
    } else {
        reader.innerHTML = `
            <div class="reader-header">
                <h2>${state.selectedWork ? state.selectedWork.title : 'Error'}</h2>
                <button class="back-button" onclick="hideReader()">← Volver</button>
            </div>
            <div class="error">
                <strong>Error:</strong> ${message}
            </div>
        `;
    }
}

// Renderizar una sección
async function renderSection(index) {
    const section = state.sections[index];
    
    const reader = document.getElementById('reader');
    reader.innerHTML = `
        <div class="reader-header">
            <h2>${state.selectedWork.title}</h2>
            <button class="back-button" onclick="hideReader()">← Volver</button>
        </div>
        <div class="reader-controls">
            <div class="control-group">
                <label>Sección:</label>
                <select onchange="changeSection(this.value)">
                    ${state.sections.map((s, i) => `
                        <option value="${i}" ${i === index ? 'selected' : ''}>
                            ${s.title}
                        </option>
                    `).join('')}
                </select>
            </div>
            <div class="control-group">
                <button onclick="changeSection(${index - 1})" ${index === 0 ? 'disabled' : ''}>
                    ← Anterior
                </button>
                <button onclick="changeSection(${index + 1})" ${index === state.sections.length - 1 ? 'disabled' : ''}>
                    Siguiente →
                </button>
            </div>
        </div>
        <div class="text-display">
            <div class="text-column">
                <h3>Textus Latinus</h3>
                <div class="text-content">
                    <p>${section.latin}</p>
                </div>
            </div>
            <div class="text-column">
                <h3>Versión Española</h3>
                <div class="text-content" id="translationContent">
                    ${section.spanish ? `<p>${section.spanish}</p>` : '<div class="loading"><div class="spinner"></div><p>Traduciendo...</p></div>'}
                </div>
            </div>
        </div>
    `;
    
    // Si no hay traducción, traducir
    if (!section.spanish) {
        await translateSection(index);
    }
}

// Cambiar de sección
async function changeSection(newIndex) {
    const index = parseInt(newIndex);
    if (index < 0 || index >= state.sections.length) return;
    
    state.currentSection = index;
    await renderSection(index);
}

// Traducir una sección
async function translateSection(index) {
    if (!state.apiKey) {
        showError('Por favor, configura tu API key de Gemini');
        return;
    }
    
    const section = state.sections[index];
    
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${state.apiKey}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Eres un experto traductor de latín clásico y filosófico al español. Traduce el siguiente texto de Santo Tomás de Aquino manteniendo la precisión filosófica y el estilo académico. Proporciona únicamente la traducción sin comentarios adicionales.\n\nTexto en latín:\n${section.latin}`
                    }]
                }],
                generationConfig: {
                    temperature: 0.3,
                    maxOutputTokens: 4000
                }
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error de API: ${response.status} - ${errorData.error?.message || 'Error desconocido'}`);
        }
        
        const data = await response.json();
        const translation = data.candidates[0].content.parts[0].text;
        
        // Guardar la traducción
        state.sections[index].spanish = translation;
        
        // Actualizar solo el contenido de la traducción
        const translationContent = document.getElementById('translationContent');
        if (translationContent) {
            translationContent.innerHTML = `<p>${translation}</p>`;
        }
        
    } catch (err) {
        showError(`Error en la traducción: ${err.message}`);
    }
}
