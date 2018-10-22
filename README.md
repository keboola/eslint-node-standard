# eslint-config-node

Keboola Node.js coding standard

## Usage

1. Install: `yarn add --dev eslint eslint-plugin-import @keboola/eslint-config-node`
2. Add `keboola-node` to the plugins section of your `.eslintrc.json` configuration file.:

```json
{
    "plugins": [
        "keboola-node"
    ]
}
```

## Standard

The standard extends [AirBnB coding standard](https://github.com/airbnb/javascript) with these exceptions:

- `strict` is disabled. You are not required to define strict mode explicitly as it is switched on by default inside modules and classes.

- `max-len`. Maximum line length is increased to 120 with exceptions for comments and strings.

- `comma-dangle`. Trailing commas are required everywhere except for function declarations and function calls.

- `import/no-extraneous-dependencies` is disabled because `aws-sdk` module is preinstalled in Lambda environment and so it does not have to be specified in dependencies.
