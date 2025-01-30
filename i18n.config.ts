// i18n.config.ts
import ar from "~/locales/ar";
import en from "~/locales/en";
import es from "~/locales/es";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "en",
    messages: {
      en,
      es,
      ar,
    },
  };
});
