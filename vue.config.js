const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/chama_test/",
  transpileDependencies: [
    'vuetify'
  ]
})
