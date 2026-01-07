
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10664, hash: 'f32d9917f8e82d48530f1ce5735ff1d727ba2efe029c5008c8cf6220eaeb6ea4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9505, hash: '704716340746b070946278086745cc22650cf275d6b125239901ea65ea33a42b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47956, hash: '65d8c277afbce940586cfd9eeea48e972ec04336eaae70f8f5738478a0573472', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TGSTVREW.css': {size: 17442, hash: 'iktV+6nAJY4', text: () => import('./assets-chunks/styles-TGSTVREW_css.mjs').then(m => m.default)}
  },
};
