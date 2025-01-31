import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
// import { md1, md2, md3 } from 'vuetify/blueprints'
// import { nuxtUi } from '@/blueprints/nuxt-ui'
import { shadcn } from "@@/blueprints/shadcn";

export default defineVuetifyConfiguration({
  icons: {
    defaultSet: "custom",
  },
  blueprint: shadcn,
  // blueprint: nuxtUi
});
