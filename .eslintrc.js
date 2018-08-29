module.exports = {
  plugins: [
    "cypress"
  ],
  env: {
    "cypress/globals": true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential'
  ]
}