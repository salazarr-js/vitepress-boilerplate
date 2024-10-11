# `.md` files aren't linted

- [ ] github tasks


<LintedComponent />

```ts
import { ref } from 'vue'
import LintedComponent from './components/linted.vue'

console.warn(`'.md' files aren't linted`)

const lorem = ref('ipsum')
```

<script setup lang="ts">
  import { ref } from 'vue'
  import LintedComponent from './components/linted.vue'

  console.warn(`'.md' files aren't linted`)

  // ❗'lorem' is declared but its value is never read. `ts-plugin(6133)`
  // ❗'lorem' is assigned a value but never used. [eslint@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)
  const lorem = ref('ipsum')
</script>
