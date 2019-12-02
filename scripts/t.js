'use strict'

var _paq = _paq || [];
(function () {
  var u = 'https://matomo.0x.at/'
  _paq.push(['disableCookies'])
  _paq.push(['setCookieDomain', '*.getbblog.com'])
  _paq.push(['trackPageView'])
  _paq.push(['enableLinkTracking']);
  _paq.push(['setTrackerUrl', u + 't.php'])
  _paq.push(['setSiteId', '3'])
  var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0]
  g.type = 'text/javascript'
  g.defer = true
  g.async = true
  g.src = u + 't.js'
  s.parentNode.insertBefore(g, s)
})()
