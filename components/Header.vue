<script setup lang="ts">
const { setLocale } = useI18n()

const { $links } = useNuxtApp() // Access the injected links
</script>

<template>
  <header class="header">
    <div class="our-container header-content">
      <!-- <LangSwitcher /> -->
      <SecondLandSwitcher />
      <div class="bar">
        <NuxtLink to="/">
          <NuxtImg src="/logo.svg" alt="logo" />
        </NuxtLink>
        <div class="navegation">
          <NuxtLink v-for="link in $links" :key="link" :to="'/' + link">
            {{ link }}
          </NuxtLink>
        </div>
      </div>
      <h1>{{ $t('header.title') }}</h1>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply bg-darkGray pt-4 px-0 pb-12;
}
.bar {
  @apply flex flex-col justify-center items-center md:flex-row md:justify-between max-w-7xl w-full mx-auto px-2 pt-11;
}
</style>
