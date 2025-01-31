// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ["@/assets/css/vuetify/globals.scss"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    '@nuxtjs/apollo',
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "vuetify-nuxt-module",
  ],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "es",
        name: "Español",
      },
      {
        code: "ar",
        name: "العربية",
        dir: "rtl",
      },
    ],
    strategy: "no_prefix",
    vueI18n: "./i18n.config.ts",
  },
  googleFonts: {
    families: {
      "DM+Sans": {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      Roboto: {
        wght: [100, 200, 300, 400, 500, 700, 900],
      },
    },
  },
  vuetify: {
    moduleOptions: {
      disableVuetifyStyles: true,
      styles: {
        configFile: "/assets/css/vuetify/components.scss",
      },
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:8000/graphql',
      }
    },
  },
  runtimeConfig: {
    public: {
      mixpanelToken: "",
      posthogKey: "",
      posthogHost: "https://us.i.posthog.com",
    },
  },
});
