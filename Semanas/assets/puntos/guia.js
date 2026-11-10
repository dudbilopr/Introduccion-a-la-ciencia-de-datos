/* Botón de copiar en cada bloque de código y puntos decorativos de portada, tomados de los datos del caso. */
document.querySelectorAll('pre').forEach(function (pre) {
  var b = document.createElement('button');
  b.className = 'copiar'; b.type = 'button'; b.textContent = 'Copiar';
  b.addEventListener('click', function () {
    var txt = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
    navigator.clipboard.writeText(txt).then(function () { b.textContent = 'Copiado'; setTimeout(function () { b.textContent = 'Copiar'; }, 1400); },
      function () { b.textContent = 'Seleccione y copie'; });
  });
  pre.appendChild(b);
});
(function () {
  /* Portada: un punto por fila de los datos de la guía (window.GUIA_PUNTOS, 1 = caso de interés, 0 = resto). */
  var c = document.querySelector('canvas.puntitos'), d = window.GUIA_PUNTOS;
  if (!c || !d) return;
  var r = c.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
  c.width = r.width * dpr; c.height = r.height * dpr;
  var x = c.getContext('2d'); x.scale(dpr, dpr);
  var cols = Math.floor(r.width / 18), n = Math.min(d.length, cols * Math.floor(r.height / 18));
  for (var i = 0; i < n; i++) {
    x.fillStyle = d[i] ? '#ff6d1f' : '#7f9db6';
    x.beginPath(); x.arc(9 + (i % cols) * 18, 9 + Math.floor(i / cols) * 18, 5, 0, 6.3); x.fill();
  }
})();
