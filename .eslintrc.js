module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'plugin:import/typescript',
        'plugin:eslint-comments/recommended',
        'airbnb-typescript-lite',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:sonarjs/recommended',
    ],
    plugins: [
        'react',
        'react-hooks',
        'promise',
        'unicorn',
        'eslint-comments',
        'jsx-a11y',
        '@typescript-eslint',
        'sonarjs',
        'simple-import-sort',
        'import',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {
                project: '.',
            },
        },
        react: {
            version: 'detect',
        },
    },
    rules: {
        //
        //  ESLINT RULES
        //
        // limits objects if enabled but part of recommaded plugin
        'no-prototype-builtins': 'off',
        // used still for debuging
        'no-console': 'off',
        // do not allow fn params reassign
        'no-param-reassign': 'error',
        // should alwys use template
        'prefer-template': 'error',
        // not always needed
        'arrow-parens': 'off',
        // as needed
        'arrow-body-style': ['error', 'as-needed'],
        // warn if function does not have a name
        'func-names': 'warn',
        // error out if condition is constant
        'no-constant-condition': 'error',
        // limits objects if enabled but part of recommaded plugin
        // disables nasty underscore dangle
        'no-underscore-dangle': 'error',
        // will save us debuging time
        'nonblock-statement-body-position': 'error',
        // this will allow both named and arrow functions as callbacks
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
        // dissabled ts will handle them
        'dot-notation': 'off',
        'no-use-before-define': 'off',
        'no-implied-eval': 'off',
        'no-throw-literal': 'off',
        'no-return-await': 'off',
        'comma-dangle': 'off',
        'no-unused-vars': 'off',
        // consistent with prettier
        'max-len': [
            'warn',
            {
                code: 100,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreComments: true,
            },
        ],
        // forced but not everywhere
        camelcase: [
            'error',
            {
                // react
                allow: ['^UNSAFE_'],
                properties: 'never',
                ignoreGlobals: true,
                ignoreImports: true,
                // sometimes needed from api
                ignoreDestructuring: true,
            },
        ],
        //
        // Prettier rules
        //
        'prettier/prettier': ['error'],
        //
        //  IMPORT RULES
        //
        // does not play well with our style guides
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        // bad for monorepo arch
        'import/no-extraneous-dependencies': 'off',
        // makes grouping harder
        'import/newline-after-import': 'warn',
        // make sure imports are resolved
        'import/no-unresolved': 2,
        // makes code cleaner this way
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                js: 'never',
                jsx: 'never',
            },
        ],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index', 'object'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: '@hooks/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@config/**',
                        patternOptions: {
                            pattern: '@hooks/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@contexts/**',
                        patternOptions: {
                            pattern: '@config/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@atoms/**',
                        patternOptions: {
                            pattern: '@molecules/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@molecules/**',
                        patternOptions: {
                            pattern: '@organisms/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@organisms/**',
                        patternOptions: {
                            pattern: '@templates/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@templates/**',
                        patternOptions: {
                            pattern: '@pages/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@pages/**',
                        patternOptions: {
                            pattern: '@templates/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@graphql/**',
                        patternOptions: {
                            pattern: '@contexts/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@utils/**',
                        patternOptions: {
                            pattern: '@graphql/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@validators/**',
                        patternOptions: {
                            pattern: '@utils/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@enums/**',
                        patternOptions: {
                            pattern: ['@validators/**'],
                        },
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@interfaces/**',
                        patternOptions: {
                            pattern: '@enums/**',
                        },
                        group: 'external',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['@apollo/client/errors'],
                'newlines-between': 'ignore',
                alphabetize: { order: 'asc', caseInsensitive: true },
                warnOnUnassignedImports: false,
            },
        ],

        //
        //  TS RULES
        //
        // not necessary @typescript-eslint/explicit-module-boundary-types will protect us
        '@typescript-eslint/explicit-function-return-type': 'off',
        // ts counterparts of eslint base rules
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/dot-notation': ['error'],
        '@typescript-eslint/no-implied-eval': ['error'],
        '@typescript-eslint/no-throw-literal': ['error'],
        '@typescript-eslint/return-await': ['error'],
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'none',
                caughtErrors: 'none',
            },
        ],
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/default-props-match-prop-types': [
            'error',
            {
                // In TypeScript we want to know that a certain prop is defined during render
                allowRequiredDefaults: true,
            },
        ],
        // forces to destructure - easier to read
        'react/destructuring-assignment': 2,
        // off due to ts
        'react/forbid-prop-types': 'off',
        // makes code really ugly
        'react/jsx-curly-brace-presence': 'off',
        // we use TS so .tsx is default
        'react/jsx-filename-extension': 'off',
        // Prefer shorthand always - works nice with react 17
        'react/jsx-fragments': 'error',
        // disabled since spread makes code much cleaner
        'react/jsx-props-no-spreading': 'off',
        // enforced to avoid costly mistakes
        'react/no-array-index-key': 'error',
        // we use certain text editors and often its required
        'react/no-danger': 'off',
        // avoids costly mistakes
        'react/no-direct-mutation-state': 'error',
        // let developers choose whats right
        'react/require-default-props': 'off',
        // not relevant
        'react/sort-prop-types': 'off',
        // not important
        'react/state-in-constructor': 'off',
        // makes code much cleaner
        'react/jsx-boolean-value': 'error',
        // a bit wired in day to day use
        'react/prop-types': 'off',
        // helps avoid small mistakes
        'react/no-unescaped-entities': 'warn',
        // disabled due to bad readability
        'react/jsx-one-expression-per-line': 'off',
        // keys should be required
        'react/jsx-key': 'error',
        // just warn do not inforce
        'react/prefer-stateless-function': 1,
        // just warning is enough
        'react/no-typos': 'warn',
        // not needed
        'react/jsx-uses-react': 'off',
        // not needed
        'react/button-has-type': 'off',
        // does not play well with ts
        'react/no-unused-prop-types': 'off',
        // not required since react 17
        'react/react-in-jsx-scope': 'off',
        // makes code more readable
        'react/jsx-wrap-multilines': 'off',
        // UNICORN RULES
        //
        // against our style
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/filename-case': 'off',
        // sometimes null is exactly what we need
        'unicorn/no-null': 'off',
        // nope makes code less readable
        'unicorn/explicit-length-check': 'off',
        // handled differently
        'unicorn/import-index': 'off',
        // handled differently
        'unicorn/import-style': 'off',
        // we love forEach
        'unicorn/no-array-for-each': 'off',
        // handy from time to time
        'unicorn/no-array-reduce': 'off',
        // edge cases
        'unicorn/no-for-loop': 'off',
        // good for node not needed in react
        'unicorn/no-instanceof-array': 'off',
        // against our code style
        'unicorn/no-keyword-prefix': 'off',
        // prevents catastrophic issues with regex
        'unicorn/no-unsafe-regex': 'error',
        // not necessary
        'unicorn/prefer-math-trunc': 'off',
        // not necessary
        'unicorn/prefer-module': 'off',
        // node related
        'unicorn/prefer-node-protocol': 'off',
        // not necessary
        'unicorn/prefer-number-properties': 'off',
        // makes code much harder to read
        'unicorn/prefer-prototype-methods': 'off',
        // not necessary to our codestyle
        'unicorn/prevent-abbreviations': 'off',
        // SonarJS rules
        //
        // all branches in a conditional structure should not have exactly the same implementation
        'sonarjs/no-all-duplicated-branches': 'error',
        // collection elements should not be replaced unconditionally
        'sonarjs/no-element-overwrite': 'warn',
        // empty collections should not be accessed or iterated
        'sonarjs/no-empty-collection': 'warn',
        // function calls should not pass extra arguments
        'sonarjs/no-extra-arguments': 'error',
        // related "if/else if" statements should not have the same condition
        'sonarjs/no-identical-conditions': 'warn',
        // identical expressions should not be used on both sides of a binary operator
        'sonarjs/no-identical-expressions': 'warn',
        // return values from functions without side effects should not be ignored
        'sonarjs/no-ignored-return': 'warn',
        // loops with at most one iteration should be refactored
        'sonarjs/no-one-iteration-loop': 'error',
        // the output of functions that don't return anything should not be used
        'sonarjs/no-use-of-empty-return-value': 'error',
        // non-existent operators '=+', '=-' and '=!' should not be used
        'sonarjs/non-existent-operator': 'warn',
        // cognitive Complexity of functions should not be too high
        'sonarjs/cognitive-complexity': ['error', 15],
        // "switch" statements should not have too many "case" clauses
        'sonarjs/max-switch-cases': ['error', 10],
        // collapsible "if" statements should be merged
        'sonarjs/no-collapsible-if': 'warn',
        // collection sizes and array length comparisons should make sense
        'sonarjs/no-collection-size-mischeck': 'warn',
        // string literals should not be duplicated
        'sonarjs/no-duplicate-string': ['error', 5],
        // boolean expressions should not be gratuitous
        'sonarjs/no-gratuitous-expressions': 'error',
        // functions should not have identical implementations
        'sonarjs/no-identical-functions': 'warn',
        // conditionals should start on new lines
        'sonarjs/no-same-line-conditional': 'error',
        // switch" statements should have at least 3 "case" clauses
        'sonarjs/no-small-switch': ['error', 3],
        // collection and array contents should be used
        'sonarjs/no-unused-collection': 'warn',
        // "catch" clauses should do more than rethrow
        'sonarjs/no-useless-catch': 'warn',
        // object literal syntax should be used
        'sonarjs/prefer-object-literal': 'warn',
        // easy autofixable import sorting with eslint-plugin-simple-import-sort
        'simple-import-sort/imports': 'off',
        'simple-import-sort/exports': 'warn',
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                // allows us to use require in js files
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
            },
        },
        {
            files: 'src/**.tsx',
            rules: {
                'import/order': 'off',
            },
        },
        {
            files: ['src/static/**.ts', 'src/validators/**.ts'],
            rules: {
                'sonarjs/no-duplicate-string': 'off',
            },
        },
        {
            files: ['src/utils/graphql/**'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
            },
        },
        {
            files: ['src/reportWebVitals.ts'],
            rules: {
                'no-sequences': 'off',
            },
        },
        {
            files: ['src/graphql/gen/**'],
            rules: {
                'max-len': 'off',
                camelcase: 'off',
                'import/newline-after-import': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/naming-convention': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
            },
        },
    ],
};
