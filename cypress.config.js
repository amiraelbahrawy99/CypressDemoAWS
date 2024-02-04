const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');



module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  failOnStatusCode: false,
  "video": true,
  retries: {
    runMode: 1
  },

  e2e: {
    baseUrl: 'https://qa-test-frontend-ce07bae316f3.herokuapp.com/',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
