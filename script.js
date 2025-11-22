// Configuración de obras
const WORKS = [
    {
        id: 'ente',
        title: 'De ente et essentia',
        description: 'Tratado sobre el ente y la esencia',
        url: 'https://www.corpusthomisticum.org/oee.html'
    },
    {
        id: 'principiis',
        title: 'De principiis naturae',
        description: 'Los principios de la naturaleza',
        url: 'https://www.corpusthomisticum.org/opn.html'
    },
    {
        id: 'unitate',
        title: 'De unitate intellectus',
        description: 'Sobre la unidad del intelecto',
        url: 'https://www.corpusthomisticum.org/oui.html'
    },
    {
        id: 'aeternitate',
        title: 'De aeternitate mundi',
        description: 'Sobre la eternidad del mundo',
        url: 'https://www.corpusthomisticum.org/oae.html'
    },
    {
        id: 'substantiis',
        title: 'De substantiis separatis',
        description: 'Las sustancias separadas',
        url: 'https://www.corpusthomisticum.org/oss.html'
    }
];

// Estado de la aplicación
let state = {
    apiKey: '',
    workerUrl: '',
    selectedWork: null,
    sections: [],
    currentSection: 0
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
    worksList.innerHTML = WORKS.map((work, index) => `
        <div class="work-card fade-in" style="animation-delay: ${index * 0.1}s" onclick="loadWork('${work.id}')">
            <h3>${work.title}</h3>
            <p>${work.description}</p>
        </div>
    `).join('');
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
        showError('Por favor, configura tu API key de DeepSeek');
        return;
    }
    
    const section = state.sections[index];
    
    try {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.apiKey}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {
                        role: 'system',
                        content: 'Eres un experto traductor de latín clásico y filosófico al español. Traduce el siguiente texto de Santo Tomás de Aquino manteniendo la precisión filosófica y el estilo académico. Proporciona únicamente la traducción sin comentarios adicionales.'
                    },
                    {
                        role: 'user',
                        content: section.latin
                    }
                ],
                temperature: 0.3,
                max_tokens: 4000
            })
        });
        
        if (!response.ok) {
            throw new Error(`Error de API: ${response.status}`);
        }
        
        const data = await response.json();
        const translation = data.choices[0].message.content;
        
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