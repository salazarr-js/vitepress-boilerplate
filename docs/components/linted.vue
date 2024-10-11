<template>
  <!-- ❗Component name "linted" should always be multi-word. eslint(vue/multi-word-component-names) -->
  <h1><code>.vue</code> files are linted</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'
  console.warn(`'.vue' files are linted`)

  // ❗ 'lorem' is declared but its value is never read. `ts-plugin(6133)`
  // ❗ 'lorem' is assigned a value but never used. [eslint@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)
  const lorem = ref('ipsum')
</script>
