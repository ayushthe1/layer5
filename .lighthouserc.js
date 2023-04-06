module.exports = {
    "ci": {
      "collect": {
        "staticDistDir": "./public",
        "url" : ["http://localhost/",]
      },
      "assert": {
        "preset": "lighthouse:no-pwa",
        "assertions": {
          "csp-xss": "off",
          "aria-hidden-focus": "off"
        }
      }
    }
  };