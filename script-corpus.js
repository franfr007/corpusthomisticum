const CORPUS_BASE = 'https://www.corpusthomisticum.org/';
const WORKER_URL = 'https://suma-teologica-proxy.francisco-fernandezr.workers.dev';

// Mapeo de obras del Corpus Thomisticum
const obras = {
    summa: {
        'Prima Pars': { base: 'sth1', rango: [1, 119] },
        'Prima Secundae': { base: 'sth2', rango: [1, 114] },
        'Secunda Secundae': { base: 'sth3', rango: [1, 189] },
        'Tertia Pars': { base: 'sth4', rango: [1, 90] }
    },
    scg: {
        'Libro 1': { url: 'scg1001.html' },
        'Libro 2': { url: 'scg2001.html' },
        'Libro 3': { url: 'scg3001.html' },
        'Libro 4': { url: 'scg4001.html' }
    },
    sentencias: {
        'Libro 1': { url: 'snp1001.html' },
        'Libro 2': { url: 'snp2001.html' },
        'Libro 3': { url: 'snp3001.html' },
        'Libro 4': { url: 'snp4001.html' }
    },
    quaestiones: {
        'De Veritate': { url: 'qdv01.html' },
        'De Potentia': { url: 'qdp1.html' },
        'De Malo': { url: 'qdm01.html' },
        'De Anima': { url: 'qda01.html' },
        'De Virtutibus': { url: 'qdw100.html' }
    },
    opuscula: {
        'De Ente et Essentia': { url: 'oee.html' },
        'De Principiis Naturae': { url: 'opn.html' },
        'De Unitate Intellectus': { url: 'oca.html' },
        'De Aeternitate Mundi': { url: 'ocm.html' }
    },
    comentarios: {
        'In Physica': { url: 'cpy011.html' },
        'In De Anima': { url: 'can1.html' },
        'In Ethica': { url: 'ctc0101.html' },
        'In Metaphysica': { url: 'cmp00.html' }
    }
};

let elementos = {};
let datosActuales = null;

document.addEventListener('DOMContentLoaded', () => {
    elementos = {
        categoria: document.getElementById('categoria'),
        obra: document.getElementById('obra'),
        parte: document.getElementById('parte'),
        traducir: document.getElementById('traducir'),
        btnCargar: document.getElementById('btnCargar'),
        btnDescargar: document.getElementById('btnDescargar'),
        loading: document.getElementById('loading'),
        loadingText: document.getElementById('loadingText'),
        progressFill: document.getElementById('progressFill'),
        progressText: document.getElementById('progressText'),
        error: document.getElementById('error'),
        success: document.getElementById('success'),
        contenidoSection: document.getElementById('contenidoSection'),
        contenidoCompleto: document.getElementById('contenidoCompleto'),
        idiomaLabel: document.getElementById('idiomaLabel'),
        obraGroup: document.getElementById('obraGroup'),
        parteGroup: document.getElementById('parteGroup')
    };

    elementos.categoria.addEventListener('change', cargarObras);
    elementos.btnCargar.addEventListener('click', procesarContenido);
    elementos.btnDescargar.addEventListener('click', descargarHTML);
});

function cargarObras() {
    const categoria = elementos.categoria.value;
    elementos.obra.innerHTML = '<option value="">Selecciona una obra</option>';
    
    if (categoria && obras[categoria]) {
        elementos.obraGroup.style.display = 'block';
        Object.keys(obras[categoria]).forEach(nombre => {
            const option = document.createElement('option');
            option.value = nombre;
            option.textContent = nombre;
            elementos.obra.appendChild(option);
        });
    } else {
        elementos.obraGroup.style.display = 'none';
        elementos.parteGroup.style.display = 'none';
    }
}

function showLoading(texto = 'Procesando...') {
    elementos.loading.classList.remove('hidden');
    elementos.loadingText.textContent = texto;
    elementos.error.classList.add('hidden');
    elementos.success.classList.add('hidden');
    elementos.btnCargar.disabled = true;
    actualizarProgreso(0);
}

function hideLoading() {
    elementos.loading.classList.add('hidden');
    elementos.btnCargar.disabled = false;
}

function actualizarProgreso(porcentaje) {
    elementos.progressFill.style.width = porcentaje + '%';
    elementos.progressText.textContent = Math.round(porcentaje) + '%';
}

function showError(mensaje) {
    elementos.error.textContent = '❌ ' + mensaje;
    elementos.error.classList.remove('hidden');
    elementos.success.classList.add('hidden');
}

function showSuccess(mensaje) {
    elementos.success.textContent = '✅ ' + mensaje;
    elementos.success.classList.remove('hidden');
    elementos.error.classList.add('hidden');
}

async function procesarContenido() {
    const categoria = elementos.categoria.value;
    const obraNombre = elementos.obra.value;
    
    if (!categoria || !obraNombre) {
        showError('Selecciona una categoría y obra');
        return;
    }

    const obraInfo = obras[categoria][obraNombre];
    if (!obraInfo) {
        showError('Obra no encontrada');
        return;
    }

    showLoading('Descargando contenido del Corpus Thomisticum...');

    try {
        // Construir URL
        const url = CORPUS_BASE + obraInfo.url;
        const proxyUrl = `${WORKER_URL}?url=${encodeURIComponent(url)}`;
        
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error('No se pudo cargar el contenido');
        
        const html = await response.text();
        actualizarProgreso(20);
        
        // Extraer y limpiar contenido
        const contenidoLatino = extraerContenidoLatino(html);
        actualizarProgreso(30);
        
        if (!contenidoLatino || contenidoLatino.trim().length === 0) {
            throw new Error('No se pudo extraer el contenido');
        }

        let contenidoFinal = contenidoLatino;
        let idioma = 'Latín';

        // Traducir si está marcado
        if (elementos.traducir.checked) {
            elementos.loadingText.textContent = 'Traduciendo al español con IA...';
            contenidoFinal = await traducirContenido(contenidoLatino);
            idioma = 'Español (Traducción IA)';
            actualizarProgreso(90);
        }

        // Mostrar resultado
        mostrarContenido(contenidoFinal, obraNombre, idioma);
        datosActuales = { contenido: contenidoFinal, obra: obraNombre, idioma };
        
        hideLoading();
        showSuccess('¡Contenido cargado exitosamente!');

    } catch (error) {
        hideLoading();
        showError(error.message);
        console.error('Error:', error);
    }
}

function extraerContenidoLatino(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Remover scripts, estilos y elementos innecesarios
    doc.querySelectorAll('script, style, nav, header, .navigation').forEach(el => el.remove());
    
    // Buscar el contenido principal
    const contenidoPrincipal = doc.querySelector('body') || doc.documentElement;
    
    // Limpiar y formatear
    let texto = '';
    const elementos = contenidoPrincipal.querySelectorAll('p, div, span, h1, h2, h3, h4, h5, h6');
    
    elementos.forEach(el => {
        const textoElemento = el.textContent.trim();
        if (textoElemento.length > 20) { // Filtrar elementos muy cortos
            texto += textoElemento + '\n\n';
        }
    });
    
    return texto.trim();
}

async function traducirContenido(textoLatino) {
    // Dividir en chunks de ~2000 palabras para no exceder límites
    const palabras = textoLatino.split(/\s+/);
    const chunkSize = 2000;
    const chunks = [];
    
    for (let i = 0; i < palabras.length; i += chunkSize) {
        chunks.push(palabras.slice(i, i + chunkSize).join(' '));
    }
    
    const traduccionesCompletas = [];
    const progresoInicial = 30;
    const progresoFinal = 90;
    const incrementoPorChunk = (progresoFinal - progresoInicial) / chunks.length;
    
    for (let i = 0; i < chunks.length; i++) {
        elementos.loadingText.textContent = `Traduciendo parte ${i + 1} de ${chunks.length}...`;
        
        try {
            const traduccion = await traducirChunk(chunks[i]);
            traduccionesCompletas.push(traduccion);
            
            const progreso = progresoInicial + (incrementoPorChunk * (i + 1));
            actualizarProgreso(progreso);
            
        } catch (error) {
            console.error(`Error traduciendo chunk ${i}:`, error);
            traduccionesCompletas.push(`[Error en traducción de esta sección: ${chunks[i].substring(0, 100)}...]`);
        }
    }
    
    return traduccionesCompletas.join('\n\n');
}

async function traducirChunk(textoLatino) {
    const prompt = `Traduce el siguiente texto del latín clásico al español. Es un fragmento de una obra filosófica-teológica de Santo Tomás de Aquino. Mantén la precisión terminológica y el estilo académico. NO incluyas explicaciones, solo la traducción:

${textoLatino}`;

    try {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 4000,
                messages: [
                    { role: "user", content: prompt }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`Error API: ${response.status}`);
        }

        const data = await response.json();
        return data.content[0].text;
        
    } catch (error) {
        console.error('Error en traducción:', error);
        throw new Error('Error al traducir el contenido');
    }
}

function mostrarContenido(contenido, obra, idioma) {
    const html = `
        <div class="obra-header">
            <h1>Santo Tomás de Aquino</h1>
            <h2>${obra}</h2>
            <p class="idioma-badge">${idioma}</p>
        </div>
        
        <div class="texto-contenido">
            ${contenido.split('\n\n').map(parrafo => 
                `<p>${parrafo}</p>`
            ).join('')}
        </div>
        
        <div class="footer-vista">
            <p>Fuente: <a href="https://www.corpusthomisticum.org/" target="_blank">Corpus Thomisticum</a></p>
            ${idioma.includes('Traducción') ? '<p>Traducción automática mediante IA - Verificar con fuentes autorizadas</p>' : ''}
        </div>
    `;
    
    elementos.contenidoCompleto.innerHTML = html;
    elementos.contenidoSection.classList.remove('hidden');
    elementos.btnDescargar.classList.remove('hidden');
    elementos.idiomaLabel.textContent = `(${idioma})`;
    
    elementos.contenidoCompleto.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function descargarHTML() {
    if (!datosActuales) return;
    
    const htmlCompleto = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Santo Tomás de Aquino - ${datosActuales.obra}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Georgia, 'Times New Roman', serif;
            line-height: 1.8;
            color: #2C1810;
            background: #FFF8DC;
            padding: 40px 20px;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 60px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .obra-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 3px solid #8B4513;
        }
        h1 {
            color: #8B4513;
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        h2 {
            color: #D2691E;
            font-size: 1.8em;
            margin-bottom: 15px;
        }
        .idioma-badge {
            display: inline-block;
            background: #FFE4B5;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9em;
            color: #8B4513;
        }
        .texto-contenido p {
            text-align: justify;
            margin: 20px 0;
            line-height: 1.8;
        }
        .footer-vista {
            margin-top: 60px;
            padding-top: 20px;
            border-top: 1px solid #DEB887;
            text-align: center;
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        ${elementos.contenidoCompleto.innerHTML}
    </div>
</body>
</html>`;

    const blob = new Blob([htmlCompleto], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SantoTomas_${datosActuales.obra.replace(/\s+/g, '_')}_${datosActuales.idioma.includes('Español') ? 'ES' : 'LA'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
