// @unocss-include
import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
import { Icon } from "@iconify/vue";

const iconify: (set: string) => IconSet = (set) => ({
  component: (props: IconProps) =>
    h(Icon, {
      ...props,
      icon: `${set}:${props.icon}`,
      disabled: props.disabled,
    }),
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vuetify:configuration", ({ vuetifyOptions }) => {
    vuetifyOptions.icons = {
      defaultSet: "heroicons",
      sets: {
        heroicons: iconify("heroicons"),
        tabler: iconify("tabler"),
        "simple-icons": iconify("simple-icons"),
        "mdi": iconify("mdi"),
      },
      aliases: {
        collapse: "mdi:chevron-up",
        complete: "mdi:check",
        cancel: "mdi:close-circle",
        close: "mdi:close",
        delete: "mdi:close-circle",
        // delete (e.g. v-chip close)
        clear: "mdi:close-circle",
        success: "mdi:check-circle",
        info: "mdi:information",
        warning: "mdi:alert-circle",
        error: "mdi:close-circle",
        prev: "mdi:chevron-left",
        next: "mdi:chevron-right",
        checkboxOn: "mdi:check-circle",
        checkboxOff: "mdi:circle",
        checkboxIndeterminate: "mdi:minus-box",
        delimiter: "mdi:circle",
        // for carousel
        sortAsc: "mdi:arrow-up",
        sortDesc: "mdi:arrow-down",
        expand: "mdi:chevron-down",
        menu: "mdi:menu",
        subgroup: "mdi:menu-down",
        dropdown: "mdi:menu-down",
        radioOn: "mdi:radiobox-marked",
        radioOff: "mdi:radiobox-blank",
        edit: "mdi:pencil",
        ratingEmpty: "mdi:star-outline",
        ratingFull: "mdi:star",
        ratingHalf: "mdi:star-half-full",
        loading: "mdi:cached",
        first: "mdi:page-first",
        last: "mdi:page-last",
        unfold: "mdi:unfold-more-horizontal",
        file: "mdi:paperclip",
        plus: "mdi:plus",
        minus: "mdi:minus",
        calendar: "mdi:calendar",
      },
    };
  });
});
