<script setup lang="ts">
const num = useState<number>("random", () => Math.random());
const refreshNum = () => {
  num.value = Math.random();
};
</script>

<template>
  <div>
    <p>
      Number: <span>{{ num }}</span>
    </p>
    <button id="random-btn" @click="refreshNum">Refresh</button>
  </div>
</template>
