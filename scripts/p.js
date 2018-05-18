'use strict';

(function () {
  var m = location.href.match(/board\/topic\/([0-9]+)/i)
  if (m) {
    location.href = '/forums/' + m[1] + '.html'
    return
  }
  m = location.href.match(/\/board/i)
  if (m) {
    location.href = '/forums/sitemap.html'
    return
  }
})()