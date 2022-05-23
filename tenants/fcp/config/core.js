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
  'blacktop-update': {
    ...brands.pavementMagazine,
    name: 'Blacktop Update',
    primaryColor: '#cf3729',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-CF3729.png',
    editor: 'Dormie Roberts',
    editorTitle: 'Associate Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Dormie_Roberts.png',
  },
  'breaking-ground': {
    ...brands.equipmentToday,
    name: 'Breaking Ground',
    primaryColor: '#f79a00',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-F79A00.png',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'construction-technology': {
    ...brands.fcp,
    primaryColor: '#5db2d7',
    name: 'Construction Technology',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-5DB2D7.png',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'construction-and-workforce-management': {
    ...brands.fcp,
    name: 'Construction & Workforce Management',
    primaryColor: '#f36422',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-F36422.png',
    editor: 'Charles Rathmann',
    editorTitle: 'Technology Editor',
    editorImage: '/files/base/acbm/fcp/image/static/rathmann_headshot.png',
  },
  'construction-zone-safety': {
    ...brands.fcp,
    primaryColor: '#f04f23',
    name: 'Construction Zone Safety',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-F04F23.png',
    editor: 'Larry Stewart',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/LarryS.png',
  },
  'crane-connection': {
    ...brands.fcp,
    name: 'Crane Connections',
    primaryColor: '#e62725',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-E62725.png',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Sarah_Webb_headshot.png',
  },
  'elevating-safety': {
    ...brands.rentalMagazine,
    name: 'Elevating Safety',
    primaryColor: '#365685',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-365685.png',
    editor: 'Jon Minnick',
    editorTitle: 'Group Content Director',
    editorImage: '/files/base/acbm/fcp/image/static/Jon_Minnick.png',
  },
  'fleet-maintenance-report': {
    ...brands.fcp,
    name: 'Fleet Maintenance',
    primaryColor: '#f26522',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-F26522.png',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'headline-news': {
    ...brands.fcp,
    name: 'Headline News',
    primaryColor: '#f36422',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-F36422.png',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'in-the-mix': {
    ...brands.concreteContractor,
    name: 'In the Mix',
    primaryColor: '#eb1c24',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-EB1C24.png',
    editor: 'Jonathan Kozlowski',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Jonathon_Kozlowski.png',
  },
  'infrastructure-impact': {
    ...brands.fcp,
    name: 'Infrastructure Impact',
    primaryColor: '#e9bf2f',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-E9BF2F.png',
    editor: 'Jessica Lombardo',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/fcp/image/static/Jessica_Lombardo.png',
  },
  'lube-report': {
    ...brands.fcp,
    name: 'Lube Report',
    primaryColor: '#0051FA',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-0051FA.png',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'modern-fleet-management': {
    ...brands.fcp,
    primaryColor: '#871937',
    name: 'Modern Fleet Management',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-871937.png',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'new-machine-solutions': {
    ...brands.fcp,
    primaryColor: '#f87526',
    name: 'New Machine Solutions',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-F87526.png',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'power-rental': {
    ...brands.rentalMagazine,
    name: 'Power Rental',
    primaryColor: '#fc501c',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-FC501C.png',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Sarah_Webb_headshot.png',
  },
  'rental-market-watch': {
    ...brands.rentalMagazine,
    name: 'Rental Market Watch',
    primaryColor: '#bb2b15',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-BB2B15.png',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Sarah_Webb_headshot.png',
  },
  'rental-watch': {
    ...brands.rentalMagazine,
    name: 'Rental WATCH',
    primaryColor: '#e52824',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-E52824.png',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Sarah_Webb_headshot.png',

  },
  'road-building-update': {
    ...brands.asphaltContractor,
    name: 'Road Building Update',
    primaryColor: '#f4381b',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-F4381B.png',
    editor: 'Jessica Lombardo',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/fcp/image/static/Jessica_Lombardo.png',
  },
  'the-contractors-best-friend': {
    ...brands.fcp,
    name: "The Contractor's Best Friend",
    primaryColor: '#108BC4',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-108BC4.png',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'truck-report': {
    ...brands.fcp,
    name: 'The Truck Report',
    primaryColor: '#ffa200',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-FFA200.png',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'openings-news-views': {
    primaryColor: '#004f75',
    name: 'Openings News & Views',
    description: 'Exclusive insight into the most impactful news and trends shaping the non-residential door and hardware industry',
    headerLogoSrc: '/files/base/acbm/fcp/image/static/safesecure-enl-header.jpg',
    displayPrimarySection: true,
    ...brands.sso,
  },
  'show-report': {
    ...brands.fcp,
    name: 'Show Report',
    primaryColor: '#2783c2',
    footerLogoSrc: '/files/base/acbm/fcp/image/static/logo/new-standard-footer-logo-2783C2.png',
  },
};
