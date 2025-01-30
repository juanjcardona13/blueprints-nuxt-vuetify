// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "vuetify-nuxt-module",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  googleFonts: {
    families: {
      'DM+Sans': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    }
  },
  runtimeConfig: {
    public: {
      mixpanelToken: "",
      posthogKey: "",
      posthogHost: "https://us.i.posthog.com",
    },
  },
});