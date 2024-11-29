<script setup lang="ts">
const { setLocale } = useI18n()
</script>

<template>
  <div class="lang-switcher">
    <button @click="setLocale('en')">English</button>
    <button @click="setLocale('es')">Español</button>
  </div>
</template>

<style scoped>
.lang-switcher {
  @apply text-white flex gap-3 px-3 text-2xl md:text-3xl;
}
</style>
