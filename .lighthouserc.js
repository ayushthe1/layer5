module.exports = {
    "ci": {
      "collect": {
        "staticDistDir": "./public",
        "url" : [
                 "http://localhost/index.html",
                 "http://localhost/company/about.html" ,
                 "http://localhost/cloud-native-management/meshery.html",
                 "http://localhost/cloud-native-management/meshmap.html",
        ],
      },
      "assert": {
        "preset": "lighthouse:recommended",
        "assertions": {
          "csp-xss": "off",
          "aria-hidden-focus": "off"
        }
      },
    }
  };