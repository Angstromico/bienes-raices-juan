export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  locales: [
    {
      code: 'en',
      iso: 'en-US',
    },
    {
      code: 'es',
      iso: 'es-ES',
    },
  ],
  messages: {
    en: {
      title: 'Welcome',
      TBD: 'Real State',
      meta: {
        title: 'Real State',
        description: "Real Estate Page of Juan de la Torre's Course but in Nuxt",
        author: 'Manuel Morales',
        keywords: 'Nuxt, Angstromico',
      },
      layouts: {
        title: 'Real State',
      },
      header: {
        title: 'Sale of Exclusive Luxury Houses and Apartments',
        links: {
          us: 'Us',
          advertisements: 'Advertisements',
          blog: 'Blog',
          contact: 'Contacts',
        },
      },
      footer: { rights: 'All rights reserved' },
      us: {
        title: 'About Us',
      },
      advertisements: {
        title: 'Advertisements',
      },
      contact: {
        title: 'Contact',
      },
    },
    es: {
      title: 'Bienvenido',
      TBD: 'Pagina de Manuel',
      meta: {
        title: 'Bienes Raíces',
        description: 'Pagina de Bienes Raíces del Curso de Juan de la Torre pero en Nuxt',
        author: 'Manuel Morales',
        keywords: 'Nuxt, Angstromico',
      },
      layouts: {
        title: 'Bienes Raíces',
      },
      header: {
        title: 'Venta de Casa y Departamentos Exclusivos de Lujo',
        links: {
          us: 'Nosotros',
          advertisements: 'Anuncios',
          blog: 'Blog',
          contact: 'Contactos',
        },
      },
      footer: { rights: 'Todos los derechos reservados' },
      us: {
        title: 'Sobre Nosotros',
      },
      advertisements: {
        title: 'Anuncios',
      },
      contact: {
        title: 'Contacto',
      },
    },
  },
}))
