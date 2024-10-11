console.warn(`'.ts' files are linted`)

// ❗ 'lorem' is assigned a value but never used. [eslint@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)
// ❗ Unexpected any. Specify a different type. [eslint@typescript-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
const lorem: any = 'ipsum'
