module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint"
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	rules: {
		indent: "off",
		"@typescript-eslint/indent": [ "error", "tab", {
			SwitchCase: 1,
			offsetTernaryExpressions: true
		}],
		"brace-style": [ 2, "1tbs", {
			allowSingleLine: true
		}],
		"prefer-const": "error",
		"@typescript-eslint/explicit-function-return-type": [ "error", {
			allowExpressions: true
		}],
		quotes: "off",
		"@typescript-eslint/quotes": [ "error" ],
		semi: "off",
		"@typescript-eslint/semi": [ "error" ],
		eqeqeq: [ "error", "always" ],
		"space-before-function-paren": "off",
		"@typescript-eslint/space-before-function-paren": [ "error" ],
		"template-curly-spacing": [ "error", "never" ],
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
		"space-infix-ops": "off",
  		"@typescript-eslint/space-infix-ops": [ "error" ],
		"@typescript-eslint/naming-convention": [ "error",
			{
				selector: [ "variableLike", "function" ],
				format: [ "strictCamelCase", "UPPER_CASE" ],
				leadingUnderscore: "allow"
			},
			{
				selector: "memberLike",
				modifiers: [ "private" ],
				format: [ "strictCamelCase" ],
				leadingUnderscore: "require"
			},
			{
				selector: "typeLike",
				format: [ "PascalCase" ]
			}
		]
	}
};  