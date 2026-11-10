/* Gráficas SVG del curso de Ciencia de Datos. Todas reciben datos reales (window.CIFRAS) y devuelven texto SVG.
   Las clases de texto (t-n, t-s, t-o, t-eje) y los colores salen de las variables CSS del mundo de cada sesión. */
window.DS = (function () {
  function esc(v, d0, d1, r0, r1) { return function (x) { return r0 + (x - d0) / (d1 - d0) * (r1 - r0); }; }
  function num(x, dec) {
    var s = (dec == null ? Math.round(x) : x.toFixed(dec)).toString().replace('.', ',');
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  function min(a) { return Math.min.apply(null, a.filter(function (v) { return v != null; })); }
  function max(a) { return Math.max.apply(null, a.filter(function (v) { return v != null; })); }
  function txt(x, y, t, cl, ex) { return '<text x="' + x + '" y="' + y + '" class="' + (cl || 't-s') + '"' + (ex || '') + '>' + t + '</text>'; }
  /* Ejes con marcas. o: {x, y, w, h, xd:[a,b], yd:[a,b], xt:[...], yt:[...], xl, yl, fx, fy} */
  function ejes(o) {
    var X = esc(0, o.xd[0], o.xd[1], o.x, o.x + o.w), Y = esc(0, o.yd[0], o.yd[1], o.y + o.h, o.y), s = '';
    (o.yt || []).forEach(function (v) {
      s += '<line x1="' + o.x + '" x2="' + (o.x + o.w) + '" y1="' + Y(v) + '" y2="' + Y(v) + '" stroke="var(--regla)" stroke-width="1.5"/>';
      s += txt(o.x - 14, Y(v) + 8, o.fy ? o.fy(v) : num(v), 't-eje', ' text-anchor="end"');
    });
    (o.xt || []).forEach(function (v) { s += txt(X(v), o.y + o.h + 36, o.fx ? o.fx(v) : num(v), 't-eje', ' text-anchor="middle"'); });
    s += '<line x1="' + o.x + '" x2="' + (o.x + o.w) + '" y1="' + (o.y + o.h) + '" y2="' + (o.y + o.h) + '" stroke="var(--tinta-2)" stroke-width="2"/>';
    if (o.xl) s += txt(o.x + o.w, o.y + o.h + 74, o.xl, 't-eje', ' text-anchor="end"');
    if (o.yl) s += txt(o.x, o.y - 22, o.yl, 't-eje');
    return { s: s, X: X, Y: Y };
  }
  /* Dispersión. o: ejes + xs, ys, col(i) -> color, r */
  function dispersion(o) {
    var e = ejes(o), s = e.s;
    o.xs.forEach(function (x, i) {
      if (x == null || o.ys[i] == null) return;
      s += '<circle cx="' + e.X(x).toFixed(1) + '" cy="' + e.Y(o.ys[i]).toFixed(1) + '" r="' + (o.r || 6) + '" fill="' + (o.col ? o.col(i) : 'var(--punto)') + '" opacity="' + (o.op || .75) + '"/>';
    });
    return { s: s, X: e.X, Y: e.Y };
  }
  /* Línea temporal. o: ejes + ys (índice = día), color, grosor */
  function linea(o) {
    var e = ejes(o), d = '', s = e.s, dentro = false;
    o.ys.forEach(function (v, i) {
      if (v == null) { dentro = false; return; }
      d += (dentro ? 'L' : 'M') + e.X(i).toFixed(1) + ' ' + e.Y(v).toFixed(1); dentro = true;
    });
    s += '<path d="' + d + '" fill="none" stroke="' + (o.color || 'var(--punto)') + '" stroke-width="' + (o.grosor || 2.5) + '" stroke-linejoin="round"' + (o.clase ? ' class="' + o.clase + '"' : '') + '/>';
    return { s: s, X: e.X, Y: e.Y };
  }
  /* Histograma. o: ejes (sin yd) + vals, bins:[a,b,ancho], color */
  function histo(o) {
    var a = o.bins[0], b = o.bins[1], w = o.bins[2], n = Math.ceil((b - a) / w), c = new Array(n).fill(0);
    o.vals.forEach(function (v) { var k = Math.floor((v - a) / w); if (k >= 0 && k < n) c[k]++; });
    var m = Math.max.apply(null, c);
    o.xd = [a, b]; o.yd = [0, o.ymax || m]; var e = ejes(o), s = e.s;
    c.forEach(function (v, k) {
      var x0 = e.X(a + k * w), x1 = e.X(a + (k + 1) * w);
      s += '<rect x="' + (x0 + 1.5).toFixed(1) + '" y="' + e.Y(v).toFixed(1) + '" width="' + Math.max(1, x1 - x0 - 3).toFixed(1) + '" height="' + (e.Y(0) - e.Y(v)).toFixed(1) + '" fill="' + (o.color ? (typeof o.color === 'function' ? o.color(a + k * w) : o.color) : 'var(--punto)') + '"/>';
    });
    return { s: s, X: e.X, Y: e.Y, conteos: c };
  }
  /* Barras horizontales. filas: [[etiqueta, valor, foco]] */
  function barras(o) {
    var s = '', m = o.max || max(o.filas.map(function (f) { return f[1]; })), alto = o.alto || 64;
    o.filas.forEach(function (f, i) {
      var y = o.y + i * alto, w = f[1] / m * o.w;
      s += txt(o.x - 18, y + alto * .62, f[0], f[2] ? 't-n' : 't-s', ' text-anchor="end" font-size="' + (o.fs || 28) + '"');
      s += '<rect class="paso-barra" x="' + o.x + '" y="' + (y + alto * .16) + '" width="' + w.toFixed(1) + '" height="' + (alto * .62) + '" fill="' + (f[2] ? 'var(--compra)' : 'var(--punto)') + '"/>';
      s += txt(o.x + w + 14, y + alto * .62, o.fmt ? o.fmt(f[1]) : num(f[1]), f[2] ? 't-o' : 't-n', ' font-size="' + (o.fs || 28) + '" font-weight="800"');
    });
    return s;
  }
  /* Matriz de confusión 2x2 como reja de unidades: un cuadro por cliente. m = [[tn, fp],[fn, tp]] */
  function matriz(o) {
    var m = o.m, s = '', lado = o.lado || 12, gap = 3, cols = o.cols || 26;
    var celdas = [[m[1][1], 'Detectado', 'var(--compra)', 1], [m[1][0], 'Se escapó', 'var(--compra)', .35], [m[0][1], 'Falsa alarma', 'var(--punto)', 1], [m[0][0], 'Bien descartado', 'var(--punto)', .35]];
    celdas.forEach(function (c, k) {
      var cx = o.x + (k % 2) * (o.w / 2 + 20), cy = o.y + Math.floor(k / 2) * (o.h / 2 + 10), cuantos = c[0], filas = Math.ceil(cuantos / cols);
      s += txt(cx, cy + 30, c[1] + ' <tspan class="t-o" font-weight="800">' + num(c[0]) + '</tspan>', 't-n', ' font-size="28"');
      for (var i = 0; i < cuantos; i++) {
        s += '<rect x="' + (cx + (i % cols) * (lado + gap)) + '" y="' + (cy + 50 + Math.floor(i / cols) * (lado + gap)) + '" width="' + lado + '" height="' + lado + '" fill="' + c[2] + '" opacity="' + c[3] + '"/>';
      }
    });
    return s;
  }
  /* Agenda: E = [[hora, etiqueta, icono]], foco = índice destacado. o.forma: 'linea' (estaciones alternadas) o 'escalera' */
  function agenda(E, foco, o) {
    o = o || {}; var s = '', y = o.y || 380, ic = window.CUR.ic, col = o.color || 'var(--acento-texto)', n = E.length, dx = 1360 / (n - 1);
    if (o.forma === 'escalera') {
      E.forEach(function (e, i) {
        var x = 120 + i * dx, yy = 600 - i * (420 / (n - 1)), f = i === foco;
        if (i) s += '<path d="M' + (x - dx + 40) + ' ' + (yy + 420 / (n - 1)) + 'H' + (x - 40) + 'V' + yy + '" fill="none" stroke="var(--regla)" stroke-width="4"/>';
        s += '<rect x="' + (x - 48) + '" y="' + (yy - 48) + '" width="96" height="96" fill="var(--fondo-2)" stroke="' + (f ? 'var(--compra)' : col) + '" stroke-width="' + (f ? 6 : 3) + '"/>' + ic(e[2], x - 32, yy - 32, 64, f ? 'var(--acento-texto)' : col);
        s += txt(x, yy + 90, e[0], 't-s', ' text-anchor="middle" font-size="24"') + txt(x, yy + 124, e[1], 't-n', ' text-anchor="middle" font-size="27"');
      });
      return s;
    }
    s += '<path d="M40 ' + y + 'H1560" stroke="' + col + '" stroke-width="10" stroke-linecap="round" opacity=".7"/>';
    E.forEach(function (e, i) {
      var x = 120 + i * dx, f = i === foco, arriba = i % 2 === 0, ty = arriba ? y - 190 : y + 70;
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (f ? 32 : 22) + '" fill="var(--fondo)" stroke="' + (f ? 'var(--compra)' : col) + '" stroke-width="' + (f ? 9 : 6) + '"/>';
      s += ic(e[2], x - 32, ty, 64, f ? 'var(--acento-texto)' : col) + txt(x, ty + 106, e[0], 't-s', ' text-anchor="middle" font-size="25"') + txt(x, ty + 142, e[1], 't-n', ' text-anchor="middle" font-size="28"');
    });
    return s;
  }
  /* Taller: estaciones unidas por luz. T = [[icono, nombre, detalle]] */
  function ruta(T, titulo, sub, color) {
    var ic = window.CUR.ic, o = '<text x="88" y="112" font-size="50" font-weight="800" style="fill:var(--tinta)">' + titulo + '</text>' + txt(88, 160, sub, 't-s', ' font-size="27"');
    var dx = 1220 / (T.length - 1), pts = T.map(function (_, i) { return [190 + i * dx, 450 + (i % 2 ? -50 : 50)]; });
    o += window.CUR.luz('M0 500' + window.CUR.suave(pts).replace(/^M[\d. ]+/, 'L' + pts[0][0] + ' ' + pts[0][1]) + 'L1600 440', 0, 6, 'fuerte');
    T.forEach(function (e, i) {
      var p = pts[i];
      o += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="74" fill="var(--fondo-2)" stroke="' + (color || 'var(--acento-texto)') + '" stroke-width="6"/>' + ic(e[0], p[0] - 40, p[1] - 40, 80, color || 'var(--acento-texto)');
      o += txt(p[0], p[1] + 126, e[1], 't-n', ' text-anchor="middle" font-size="33"') + txt(p[0], p[1] + 164, e[2], 't-s', ' text-anchor="middle" font-size="24"');
    });
    return o;
  }
  return { agenda: agenda, ruta: ruta, esc: esc, num: num, min: min, max: max, txt: txt, ejes: ejes, dispersion: dispersion, linea: linea, histo: histo, barras: barras, matriz: matriz };
})();
