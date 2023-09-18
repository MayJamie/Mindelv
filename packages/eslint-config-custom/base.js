/** @format */

module.exports = {
    parserOptions: {
        babelOptions: {
            presets: [require.resolve('next/babel')],
        },
    },
    // add rules configurations here
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-return-await': 'off',
        camelcase: 'off',
        'no-underscore-dangle': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        'react/require-default-props': 'off',
        'import/order': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['function-declaration', 'arrow-function'],
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-filename-extension': ['off', { extensions: ['.js', '.jsx'] }],
        'no-undef': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-explicit-any': 'error',
        'unicorn/filename-case': 'off',
    },
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'arrow-body-style': 'off',
            },
        },
    ],
};
