const brands = require('./brands');
const emailX = require('./email-x');
// const nativeX = require('./native-x');

module.exports = {
  emailX,
  // nativeX,
  dpm: {
    content: {
      enabled: true,
    },
    emailx: {
      enabled: true,
      useEmailxHref: true,
    },
  },
  'cold-chain-insights': {
    ...brands.fl,
    name: 'Cold Chain Insights',
    primaryColor: '#1a93f9',
    footerLogoSrc: '/files/base/acbm/fl/image/static/logo/new-standard-footer-logo-1a93f9.png',
    editor: 'Marina Mayer',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/fl/image/static/editors_marina.png',
  },
  'show-report': {
    ...brands.fl,
    name: 'Show Report',
    primaryColor: '#2783c2',
    footerLogoSrc: '/files/base/acbm/fl/image/static/logo/new-standard-footer-logo-2783C2.png',
  },
  'global-supply-chain-insights': {
    ...brands.sdce,
    name: 'Global Supply Chain Insights',
    primaryColor: '#e50102',
    footerLogoSrc: '/files/base/acbm/sdce/image/static/logo/new-standard-footer-logo.png',
    editor: 'Marina Mayer',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/fl/image/static/editors_marina.png',
  },
  'show-report-sdce': {
    ...brands.sdce,
    name: 'Show Report',
    primaryColor: '#2783c2',
    footerLogoSrc: '/files/base/acbm/fl/image/static/logo/new-standard-footer-logo-2783C2.png',
  },
};
