<script setup lang="ts">
const mode = useColorMode({ emitAuto: true, })
const { state, next } = useCycleList(['dark', 'light', 'auto'] as const, { initialValue: mode })
watchEffect(() => mode.value = state.value)
</script>

<template>
  <VApp>
    <VAppBar app>
      <VAppBarTitle>{{mode}}</VAppBarTitle>
      <VSpacer />
      <VBtn :icon="mode === 'light' ? 'mdi:white-balance-sunny' : mode === 'dark' ? 'mdi:moon-waning-crescent' : 'mdi:theme-light-dark'" @click="next()" />
    </VAppBar>
    <VMain>
      <slot />
    </VMain>
  </VApp>
</template>
