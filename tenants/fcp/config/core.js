const brands = require('./brands');
const emailX = require('./email-x');
// const nativeX = require('./native-x');

module.exports = {
  emailX,
  // nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  dss: {
    socialMediaLinks: [
      {
        provider: 'facebook',
        href: 'https://www.facebook.com/fordsspros',
        title: 'Follow us on Facebook',
      },
      {
        provider: 'twitter',
        href: 'https://twitter.com/fordsspros',
        title: 'Follow us on Twitter',
      },
      {
        provider: 'linkedin',
        href: 'https://www.linkedin.com/company/fordsspros/',
        title: 'Follow us on LinkedIn',
      },
    ],
  },
};
