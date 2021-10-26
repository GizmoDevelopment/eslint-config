// Variables
const jsRules = {
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
};
const tsRules = {
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
};

// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	overrides: [
		{
			files: "**/*.ts",
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
				...jsRules,
				...tsRules
			}
		},
		{
			files: "**/*.js",
			extends: [
				"eslint:recommended",
			],
			parserOptions: {
				ecmaVersion: 10
			},
			rules: jsRules
		}
	]
};  