<script setup lang="ts">
const mode = useColorMode({ emitAuto: true });
const { state, next } = useCycleList(["dark", "light", "auto"] as const, {
  initialValue: mode,
});
watchEffect(() => (mode.value = state.value));

const iconTheme = computed(() => {
  if (mode.value === "light") {
    return "mdi:white-balance-sunny";
  } else if (mode.value === "dark") {
    return "mdi:moon-waning-crescent";
  } else {
    return "mdi:theme-light-dark";
  }
});

const { setLocale, locale, availableLocales } = useI18n();
</script>

<template>
  <VApp>
    <VAppBar app>
      <VAppBarTitle>{{ mode }}</VAppBarTitle>
      <VSpacer />
      <VBtn :icon="iconTheme" @click="next()" />
      <VMenu>
        <template #activator="{ props }">
          <VBtn v-bind="props" :icon="`circle-flags:${locale}`" />
        </template>
        <VList>
          <VListItem
            v-for="l in availableLocales"
            :key="l"
            @click="setLocale(l)"
          >
            <VIcon :icon="`circle-flags:${l}`" />
          </VListItem>
        </VList>
      </VMenu>
    </VAppBar>
    <VMain>
      <slot />
    </VMain>
  </VApp>
</template>
