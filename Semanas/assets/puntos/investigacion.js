/* Guía de investigación de una semana. Lee window.INV (archivo recursos_semanaN.js) y arma la página completa.
   Campos: semana, titulo, intro, tiempo, ruta[], lectura{titulo, ref, aviso, pasos[], control}, videos[], simulador{html},
   sincodigo{html} (opcional), articulos[], profundizar[[tipo, html, para]], metodo{html}.
   Cada artículo: tema, doi, cita, encontro, uso, abierto_url (opcional). Cada video: id, url, titulo, canal, duracion, idioma, nivel, mirar, pregunta. */
(function () {
  var R = window.INV, d = document;
  function vids(L) {
    return L.map(function (v) {
      return '<article><a href="' + v.url + '" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="Miniatura del video ' + v.titulo.replace(/"/g, '') + '" loading="lazy"></a><h3><a href="' + v.url + '" target="_blank" rel="noopener">' + v.titulo + '</a></h3><p><span class="etq">' + v.nivel + '</span><span class="etq">' + v.idioma + '</span> ' + v.canal + ' · ' + v.duracion + '</p><p><strong>Qué mirar:</strong> ' + v.mirar + '</p><p><strong>Pregunta:</strong> ' + v.pregunta + '</p></article>';
    }).join('');
  }
  var temas = [];
  R.articulos.forEach(function (a) { if (temas.indexOf(a.tema) < 0) temas.push(a.tema); });
  var bib = temas.map(function (t) {
    return '<h3>' + t + '</h3><div class="tablon"><table><tr><th>Trabajo</th><th>Qué encontró</th><th>Uso en el curso</th></tr>' + R.articulos.filter(function (a) { return a.tema === t; }).map(function (a) {
      return '<tr><td>' + a.cita + (a.doi ? ' <a href="https://doi.org/' + a.doi + '" target="_blank" rel="noopener">DOI</a>' : '') + (a.abierto_url ? ' · <a href="' + a.abierto_url + '" target="_blank" rel="noopener">versión abierta</a>' : '') + '</td><td>' + a.encontro + '</td><td>' + a.uso + '</td></tr>';
    }).join('') + '</table></div>';
  }).join('');
  var nDoi = R.articulos.filter(function (a) { return a.doi; }).length;
  var secciones = [['ruta', 'Ruta de estudio'], ['lectura', 'Lectura guiada'], ['videos', 'Videos'], ['simulador', 'Simulador']];
  if (R.sincodigo) secciones.push(['sincodigo', 'Sin código']);
  secciones.push(['biblio', 'Bibliografía comentada'], ['profundizar', 'Para profundizar'], ['metodo', 'Método de la búsqueda']);
  var L = R.lectura, h = '';
  h += '<header class="portada"><canvas class="puntitos" aria-hidden="true"></canvas><h1>' + R.titulo + '</h1><p>' + R.intro + '</p>';
  h += '<div class="datos-clase"><span><b>Semana</b>' + R.semana + '</span><span><b>Tiempo</b>' + (R.tiempo || '4 a 6 horas de trabajo independiente') + '</span><span><b>Artículos</b>' + nDoi + ' con DOI verificado</span><span><b>Videos</b>' + R.videos.length + '</span></div></header>';
  h += '<div class="marco"><nav class="indice" aria-label="Contenido"><ol>' + secciones.map(function (s) { return '<li><a href="#' + s[0] + '">' + s[1] + '</a></li>'; }).join('') + '</ol></nav><main>';
  h += '<section id="ruta"><h2>Ruta de estudio</h2><ol class="pasos">' + R.ruta.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol></section>';
  h += '<section id="lectura"><h2>Lectura guiada: ' + L.titulo + '</h2><p>' + L.ref + '</p>' + (L.aviso ? '<div class="aviso">' + L.aviso + '</div>' : '') + '<ol class="pasos">' + L.pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol><details><summary>Punto de control</summary><div><p>' + L.control + '</p></div></details></section>';
  h += '<section id="videos"><h2>Videos verificados</h2><p>Confirmados con la ficha oficial de YouTube el ' + (R.fecha_videos || '2026-11-10') + '. "Qué mirar" resume solo la descripción que publicó cada autor y sus capítulos.</p><div class="vids">' + vids(R.videos) + '</div></section>';
  h += '<section id="simulador"><h2>Simulador propio</h2>' + R.simulador.html + '</section>';
  if (R.sincodigo) h += '<section id="sincodigo"><h2>Sin código</h2>' + R.sincodigo.html + '</section>';
  h += '<section id="biblio"><h2>Bibliografía comentada</h2><p>Cada DOI se comprobó en Crossref. "Qué encontró" resume solo lo que dice el resumen publicado; si Crossref no lo trae, se indica que la descripción sale del título.</p>' + bib + '</section>';
  h += '<section id="profundizar"><h2>Para profundizar</h2><div class="tablon"><table><tr><th>Tipo</th><th>Recurso</th><th>Para qué</th></tr>' + R.profundizar.map(function (f) { return '<tr><td>' + f[0] + '</td><td>' + f[1] + '</td><td>' + f[2] + '</td></tr>'; }).join('') + '</table></div><p>Todos los recursos del mundo, por tipo: <a href="../recursos/recursos_globales.html">centro de recursos del curso</a>.</p></section>';
  h += '<section id="metodo"><h2>Método de la búsqueda</h2><div class="metodo">' + R.metodo.html + '</div></section></main></div>';
  d.body.insertAdjacentHTML('afterbegin', h);
  d.title = 'Semana ' + R.semana + ': guía de investigación | Ciencia de Datos';
  window.GUIA_PUNTOS = R.articulos.map(function (a) { return a.abierto_url ? 1 : 0; });
})();
