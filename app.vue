<script setup>
const mode = useColorMode()
</script>

<template>
  <VThemeProvider :theme="mode">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VThemeProvider>
</template>
