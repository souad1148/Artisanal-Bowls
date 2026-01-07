
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
    'index.csr.html': {size: 9178, hash: '8761ba242e9cc1ccc678b53e9df53ef509582598b631eb2778730421a80a0a05', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9521, hash: 'cbeab9d8022872660a2c7233d80dac854204dca7ba26ba5590dfd05dd9ea3594', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29030, hash: 'a0c17544a5d15085d090450e41dd41a504e2afef6a8c2d23495181b34c3939f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TSTDI5GB.css': {size: 296, hash: 'oCelPagnSgI', text: () => import('./assets-chunks/styles-TSTDI5GB_css.mjs').then(m => m.default)}
  },
};
