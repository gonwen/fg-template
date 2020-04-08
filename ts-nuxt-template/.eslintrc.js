module.exports = {
    plugins: ['@typescript-eslint'],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    extends: [
        '@nuxtjs'
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'indent': ['error', 4, {'SwitchCase': 1}],
        'generator-star-spacing': 'off'
    }
}
