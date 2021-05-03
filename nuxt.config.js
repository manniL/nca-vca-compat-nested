const config = {
  target: 'static',
  components: false,
  buildModules: [
    '@nuxtjs/composition-api/module'
  ],
  build: {
    transpile: ['@vue/composition-api']
  }
}

export default config
