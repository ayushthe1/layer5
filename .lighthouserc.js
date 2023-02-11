module.exports = {
    "ci": {
      "collect": {
        "startServerCommand": "npx http-server -p 35341",
        "startServerReadyPattern": "/listen|ready/i",
        "startServerReadyTimeout": 2000,
        "url" : " http://localhost:35341/404.html" ,
      },
      "assert": {
        "preset": "lighthouse:no-pwa",
        "assertions": {
          "csp-xss": "off",
        }
      }
    }
  };