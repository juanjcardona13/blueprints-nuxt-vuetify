<script setup>
const { setLocale } = useI18n();
const { $analytics } = useNuxtApp();
$analytics.trackPageView();
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
      <p>{{ $t("welcome") }}</p>
    </div>
  </div>
</template>
