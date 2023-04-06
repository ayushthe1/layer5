module.exports = {
    "ci": {
      "collect": {
        "staticDistDir": "./public",
        "numberOfRuns": 1,
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