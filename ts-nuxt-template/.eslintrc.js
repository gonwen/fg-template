module.exports = {
    plugins: ['@typescript-eslint'],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    extends: [
        '@nuxtjs/eslint-config-typescript'
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'indent': ['error', 4, {'SwitchCase': 1}],
        'generator-star-spacing': 'off',
        'no-console': 'off',
        'vue/html-indent': ['error', 4],
        'vue/mustache-interpolation-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'never'],
        'lines-between-class-members': ['error', 'never'],
        'vue/html-self-closing': ['error',{
            'html': {
                'void': 'never',
                'normal': 'any',
                'component': 'any'
            },
            'svg': 'always',
            'math': 'always'
        }]
    }
}
