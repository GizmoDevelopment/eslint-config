module.exports = {
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
};  