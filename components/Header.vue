<script setup lang="ts">
interface Props {
  init?: string
}

defineProps<Props>()

const { $links } = useNuxtApp() // Access the injected links
</script>

<template>
  <header class="header" :class="init ? 'init' : ''">
    <!-- <LangSwitcher /> -->
    <SecondLandSwitcher />
    <div class="our-container header-content">
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
      <h1 v-if="init">{{ $t('header.title') }}</h1>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply bg-darkGray pt-4 px-0 pb-12 text-white;
  .header-content {
    @apply flex flex-col justify-between px-2 max-w-[90rem] mx-auto;
    h1 {
      @apply text-left ml-5 md:ml-10 font-bold max-w-[60rem] text-4xl md:text-5xl;
      line-height: 2;
    }
  }
  &.init {
    background-image: url(/img/header.jpg);
    @apply bg-transparent bg-center bg-cover bg-no-repeat md:min-h-[60rem];
    .header-content {
      @apply md:min-h-[60rem];
    }
  }
}
.bar {
  @apply flex flex-col justify-center items-center md:flex-row md:justify-between max-w-7xl w-full mx-auto px-2 pt-11;
}
</style>
