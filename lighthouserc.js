module.exports = {
  "ci": {
    "collect": {
      "settings": {
        // Don't run certain audits
        "skipAudits": ["csp-xss"],
      }
    }
  }
};