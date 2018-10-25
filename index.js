module.exports = {
  "extends": [
    "airbnb-base"
  ],
  "plugins": [
    "import"
  ],
  "env": {
    "node": true
  },
  "rules": {
    "strict": 0,
    "max-len": ["error", {
      "code": 120,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true
    }],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],
    "import/no-extraneous-dependencies": 0
  }
};
