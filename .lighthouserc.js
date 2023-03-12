module.exports = {
    "ci": {
      "collect": {
        "staticDistDir": "./public",
        "url" : ["http://localhost/404.html" ,"http://localhost/index.html","http://localhost/404/index.html","http://localhost/about/index.html"],
        "settings": [
          {
            "skipAudits": ["aria-hidden-label"],
            "url": "http://localhost/index.html"
          },
          {
            "url": "http://localhost/404.html"
          },
          {
            "url": "http://localhost/404/index.html"
          },
          {
            "url": "http://localhost/about/index.html"
          }
        ]
      },
      "assert": {
        "preset": "lighthouse:no-pwa",
        "assertions": {
          "csp-xss": "off",
        }
      }
    }
  };