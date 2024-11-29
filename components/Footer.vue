<script setup lang="ts">
const { $links } = useNuxtApp()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer seccion">
    <div class="our-container container-footer foo">
      <nav class="navegation foo">
        <NuxtLink v-for="link in $links" :key="link" :to="'/' + link">
          {{ link }}
        </NuxtLink>
      </nav>
    </div>
    <p class="copyright">{{ $t('footer.rights') }} {{ currentYear }} &copy;</p>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  @apply bg-darkGray py-10;
}
.container-footer {
  @apply flex justify-center w-full my-5;
}
.copyright {
  @apply text-center text-white text-base my-5;
}
</style>
