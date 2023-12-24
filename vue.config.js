const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fcvlfutsal_u18f_senf_2024/dist/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
})
