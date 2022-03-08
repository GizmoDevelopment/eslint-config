module.exports = {
	root: true,
	overrides: [
		{
			files: "**/*.js",
			extends: [
				"eslint:recommended",
			],
			parserOptions: {
				ecmaVersion: 10
			},
			rules: {
				indent: [ "error", "tab", {
					SwitchCase: 1,
					offsetTernaryExpressions: true
				}],
				"brace-style": [ 2, "1tbs", {
					allowSingleLine: true
				}],
				"prefer-const": "error",
				eqeqeq: [ "error", "always" ],
				"template-curly-spacing": [ "error", "never" ],
				"space-infix-ops": [ "error" ],
				quotes: [ "error" ],
				semi: [ "error" ],
				"space-before-function-paren": [ "error" ]
			}
		},
		{
			files: "**/*.ts",
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended"
			],
			plugins: [
				"@typescript-eslint"
			],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 12,
				parser: "@typescript-eslint/parser",
				project: "./tsconfig.json"
			},
			rules: {
				indent: "off",
				"@typescript-eslint/indent": [ "error", "tab", {
					SwitchCase: 1,
					offsetTernaryExpressions: true
				}],
				"space-infix-ops": "off",
				"@typescript-eslint/space-infix-ops": [ "error" ],
				"@typescript-eslint/naming-convention": [ "error",
					{
						selector: [ "variableLike", "function" ],
						format: [ "camelCase", "UPPER_CASE" ],
						leadingUnderscore: "allow"
					},
					{
						selector: "memberLike",
						modifiers: [ "private" ],
						format: [ "camelCase" ],
						leadingUnderscore: "require"
					},
					{
						selector: "typeLike",
						format: [ "PascalCase" ]
					}
				],
				"@typescript-eslint/member-delimiter-style": [ "error", {
					multiline: {
						delimiter: "semi"
					},
					singleline: {
						delimiter: "semi"
					}
				}],
				"@typescript-eslint/type-annotation-spacing": [ "error", {
					overrides: {
						colon: {
							before: false,
							after: true
						},
						arrow: {
							before: true,
							after: true
						}
					}
				}],
				quotes: "off",
				"@typescript-eslint/quotes": [ "error" ],
				semi: "off",
				"@typescript-eslint/semi": [ "error" ],
				"space-before-function-paren": "off",
				"@typescript-eslint/space-before-function-paren": [ "error" ],
				"@typescript-eslint/explicit-function-return-type": [ "error", {
					allowExpressions: true
				}],
				"@typescript-eslint/member-ordering": [ "error", {
					classExpressions: {
						order: "alphabetically"
					}
				}],
				"@typescript-eslint/consistent-type-imports": [ "error" ],
				"@typescript-eslint/consistent-type-exports": [ "error" ]
			}
		},
		{
			files: "**/*.vue",
			extends: [
				"plugin:vue/vue3-recommended",
				"plugin:vue/vue3-strongly-recommended"
			],
			plugins: [
				"vue"
			],
			env: {
				browser: true,
				es2021: true
			},
			parser: "vue-eslint-parser",
			parserOptions: {
				ecmaVersion: 12,
				sourceType: "module",
				extraFileExtensions: [ ".vue" ]
			},
			rules: {
				indent: "off",
				"@typescript-eslint/indent": "off",
				"vue/script-indent": [ "error", "tab", {
					"baseIndent": 1,
					"switchCase": 1
				}],
				"vue/html-indent": [ "error", "tab" ],
				"vue/singleline-html-element-content-newline": "off",
				"vue/max-attributes-per-line": [ "error", {
					"singleline": 2
				}],
				"vue/script-setup-uses-vars": "off",
				"vue/eqeqeq": [ "error", "always" ],
				"vue/component-api-style": [ "error", [ "options", "composition" ] ],
				"vue/no-useless-mustaches": [ "error" ],
				"vue/no-useless-v-bind": [ "error" ],
				"vue/no-lone-template": [ "error" ],
				"vue/no-use-computed-property-like-method": [ "error" ],
				"vue/multi-word-component-names": "off",
				"vue/no-child-content": [ "error" ],
				"vue/no-expose-after-await": [ "error" ],
				"vue/component-options-name-casing": [ "error", "PascalCase" ]
			}
		}
	]
};