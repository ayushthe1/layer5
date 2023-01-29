module.exports = {
    extends: 'lighthouse:default',
    settings: {
      onlyAudits: [
        'csp-xss'
      ],
    },
  };