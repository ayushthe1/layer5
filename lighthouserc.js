module.exports = {
  "ci": {
    "assert": {
      "preset": "lighthouse:no-pwa",
      "assertions": {
        "csp-xss": "off",
        "tap-targets": "warn",
        "unsized-images": "off",
      }
    }
  }
};