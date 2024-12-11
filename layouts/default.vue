<script setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})
const title = computed(() => t('layouts.title', { title: t(route.meta.title ?? 'TBD') }))
const isIndexPage = computed(() => route.path === '/') // Check if the current page is the index page
useHead({
  title: title.value,
  meta: [
    { name: 'description', content: t('meta.description') },
    { name: 'keywords', content: t('meta.keywords') },
    { name: 'author', content: t('meta.author') },
  ],
  link: [
    {
      rel: 'canonical',
      href: route.fullPath,
    },
  ],
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <Header :init="isIndexPage" />
      <slot />
      <Footer />
    </Body>
  </Html>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900');

body {
  @apply font-primary;
  font-size: 1.6rem;
  line-height: 1.8;
}
p {
  @apply text-black text-3xl;
  font-size: 2rem;
}
.contenedor {
  width: 95%;
  max-width: 120rem;
  margin: 0 auto;
}

img,
picture {
  width: 100%;
  display: block;
}

h1,
h2,
h3 {
  margin: 2.5rem 0;
  font-weight: 300;
  text-align: center;
}

h1 {
  font-size: 3.8rem;
}
h2 {
  font-size: 3.4rem;
}
h3 {
  font-size: 3rem;
}
h4 {
  font-size: 2.6rem;
}
</style>
