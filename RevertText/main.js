;(function () {
  var $text = document.getElementById('text');
  var $revert = document.getElementById('revert');

  var revertTable = {
      a: '\u0250', A: '\u2C6F',
      b: 'q', B: '\u10412',
      c: '\u0254', C: '\u0186',
      d: 'p', D: '\u15E1',
      e: '\u0259', E: '\u018E',
      f: '\u025F', F: '\u2132',
      g: '\u0183', G: '\u2141',
      h: '\u0265', H: '\u0048',
      i: 'ᴉ', I: 'I',
      j: '\u027E', J: '\u017F',
      k: '\u029E', K: '\u22CA',
      l: '\u05DF', L: '\u2142',
      m: '\u026F', M: '\u0057',
      n: 'u', N: '\u004E',
      p: 'b', P: '\u0500',
      q: '\u0062', Q: '\u038C',
      r: '\u0279', R: '\u1D1A',
      s: '\u0073', S: '\u0053',
      t: '\u0287', T: '\u22A5',
      u: 'n', U: '\u22e9',
      v: '\u028C', V: '\u039B',
      w: '\u028D', W: '\u004D',
      y: '\u028E', Y: '\u2144',
      z: '\u007A', Z: '\u005A',
      '.': '\u02D9', '[': ']',
      '(': ')', '{': '}',
      '?': '\u00BF', '!': '\u00A1',
      "\'": ',', '<': '>',
      '_': '\u203E', '"': '\u201E',
      '\\': '\\', ';': '\u061B',
      '\u203F': '\u2040', '\u2045': '\u2046',
      '\u2234': '\u2235', '&': '\u214B',
      '?': '\u00BF', '1': '\u21C2', '2': '\u218A',
      '3': '\u218B', '4': '\u07C8', '5': '\u03DA',
      '6': '\u0039', '7': '\u3125', '8': '\u0038',
      '9': '\u0036'
  };

  for (var o in revertTable) {
    if (revertTable.hasOwnProperty(o)) {
      revertTable[revertTable[o]] = o;
    }
  }

  $revert.addEventListener('click', function () {
    var text = $text.innerHTML.replace(/\r/gi,'');

    var result = '';

    for (var i = text.length - 1; i >= 0; i--) {
      var current = text.charAt(i);
      var revert = revertTable[current];

      result += revert != undefined ? revert : current;
    }

    $text.innerHTML = result;
  });

})();
