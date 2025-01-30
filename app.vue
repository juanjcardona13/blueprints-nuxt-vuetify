<script setup>
const mode = useColorMode();
// #region Bug-Fix: Por alguna razón, el valor del locale en Vuetify (useLocale) no se actualiza automáticamente con el de i18nNuxt (useI18n)
const { locale } = useI18n();
const { current } = useLocale();
onBeforeMount(() => {
  current.value = locale.value;
});
</script>

<template>
  <VThemeProvider :theme="mode">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VThemeProvider>
</template>
