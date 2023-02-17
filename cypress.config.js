const {defineConfig} = require("cypress");

module.exports = defineConfig({
  projectId: 'ctc75a',
    e2e: {
        baseUrl: 'https://reqres.in/'
    },
    env: {
        googleStoreUrl: "https://store.google.com/us"
    }
});
