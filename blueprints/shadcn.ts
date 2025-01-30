import type { Blueprint } from "vuetify";

export const shadcn: Blueprint = {
  defaults: {
    global: {},
    VBtn: {
      rounded: "lg",
    },
    VLabel: {
      class: "font-weight-medium",
    },
  },
  aliases: {},
  components: {},
  date: {
    // adapter
    // formats
    // locale
  },
  directives: {},
  display: {},
  goTo: {},
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#18181b",
          "on-primary": "#FAFAFA",
          surface: "#F4F4F5",
          background: "#FFF",
        },
        variables: {
          "rounded-pill": "4px",
          "body-font-family":
            "ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          "heading-font-family":
            "ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#0EA5E9",
          background: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
  icons: {},
  locale: {},
};
