'use strict'

var _paq = _paq || []
_paq.push(['disableCookies'])
_paq.push(['trackPageView']);

(function () {
  var u = 'https://scripts.0x.at/'
  _paq.push(['setTrackerUrl', u + 'pw.php'])
  _paq.push(['setSiteId', '1'])
  var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0]
  g.type = 'text/javascript'
  g.defer = true
  g.async = true
  g.src = u + 'pw.js'
  s.parentNode.insertBefore(g, s)
})()