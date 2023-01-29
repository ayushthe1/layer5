module.exports = {
  extends: "lighthouse:default",
  settings: {
    skipAudits: [
      "csp-xss",
    ],
  },
};