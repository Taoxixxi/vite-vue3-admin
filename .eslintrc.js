module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    // 关闭驼峰命名规则
    'vue/multi-word-component-names': 0
  }
}
