
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Artisanal-Bowls/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Artisanal-Bowls"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10680, hash: '2405def1720a5d9e7fd669f22d4d829a7064520fcd054c15cced24f3b3030bc7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9521, hash: '5bef30694e6f0ccaa224f47b70740d7bf2fb5db824374edc1737099231d79bcb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47971, hash: '0c35a1c16d6061c1fb55cdf33e0677a2a3faf3b171a39a038c8294935209e707', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TGSTVREW.css': {size: 17442, hash: 'iktV+6nAJY4', text: () => import('./assets-chunks/styles-TGSTVREW_css.mjs').then(m => m.default)}
  },
};
