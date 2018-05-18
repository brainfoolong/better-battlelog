'use strict';

(function () {
  if(location.pathname.substr(-1) === "/"){
    location.pathname = location.pathname.substring(0, location.pathname.length - 1)
    return
  }
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