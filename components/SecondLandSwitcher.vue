<script setup lang="ts">
const { locale, setLocale } = useI18n()
const isOpen = ref(false)

const toggleLanguageMenu = () => {
  isOpen.value = !isOpen.value
}

const switchLanguage = (lang: string) => {
  setLocale(lang)
  isOpen.value = false
}
</script>

<template>
  <div class="lang-switcher relative">
    <!-- Current language and toggle arrow -->
    <button class="flex items-center gap-2" @click="toggleLanguageMenu" aria-label="Toggle language menu">
      <span class="capitalize">{{ locale }}</span>
      <span class="transition-transform duration-300 text-lg md:text-xl" :class="{ 'rotate-180': isOpen }"> ▼ </span>
    </button>

    <!-- Alternate language dropdown -->
    <div v-if="isOpen" class="absolute left-3 top-full mt-2 text-xl transition-opacity duration-300">
      <button
        class="block text-sm opacity-75 hover:opacity-100"
        @click="switchLanguage(locale === 'en' ? 'es' : 'en')"
        aria-label="Switch language"
      >
        {{ locale === 'en' ? 'Español' : 'English' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.lang-switcher {
  @apply text-white text-2xl md:text-3xl px-3;
}
.lang-switcher button {
  @apply focus:outline-none cursor-pointer;
}
.lang-switcher div {
  @apply text-white text-opacity-75;
}
</style>
