<template>
  <VContainer fluid class="d-flex justify-center align-center fill-height bg-surface">
    <VCard class="pa-6 rounded-lg bg-background" elevation="1" width="384" :border="'sm'">
        <!-- Icono superior y Títulos -->
        <div class="text-center mb-4">
          <VIcon icon="heroicons:lock-closed" size="32" />
          <h2 class="font-weight-bold text-h5 mt-4 mb-1">Welcome back</h2>
          <p class="text-body-1">
            <span class="opacity-50">Don't have an account? </span>
            <RouterLink
              to="/signup"
              class="text-primary text-decoration-none font-weight-bold"
              >Sign up</RouterLink
            >
          </p>
        </div>
        <!-- Formulario -->
        <VForm @submit.prevent="login">
          <VLabel class="mb-0 opacity-100 text-body-2" text="Email"/>
          <VTextField
            v-model="user.email"
            variant="outlined"
            bg-color="background"
            density="compact"
            placeholder="Enter your email"
            required
            hide-details="auto"
            class="mb-6"
          />
          <div class="d-flex justify-space-between text-caption mt-1">
            <VLabel class="mb-0 opacity-100 text-body-2" text="Password" />
            <RouterLink
              to="/forgot-password"
              class="text-primary text-decoration-none"
            >
              Forgot password?
            </RouterLink>
          </div>
          <VTextField
            v-model="user.password"
            variant="outlined"
            bg-color="background"
            density="compact"
            placeholder="Enter your password"
            type="password"
            :append-inner-icon="showPassword ? 'heroicons:eye-slash' : 'heroicons:eye'"
            required
            hide-details="auto"
            class="mb-6"
            @click:append-inner="showPassword = !showPassword"
          />
          <VBtn type="submit" variant="flat" block color="primary" text="Continue" append-icon="heroicons:arrow-right" />
        </VForm>
        <!-- Separador -->
        <VDivider class="flex-grow-1 my-8">
          <span class="text-body-2 font-weight-medium">or</span>
        </VDivider>
        <!-- Botón de GitHub -->
        <VBtn variant="flat" block :border="'md'" color="background" text="Continue with GitHub" prepend-icon="simple-icons:github" />
      <!-- Términos y condiciones -->
      <p class="text-center text-body-2  mt-4">
        <span class="opacity-50">By signing in, you agree to our </span>
        <RouterLink to="/terms" class="text-primary text-decoration-none"
          >Terms of Service</RouterLink
        >
      </p>
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const user = ref({
  email: "",
  password: "",
});

const showPassword = ref(false);

const login = () => {
  console.log("Logging in:", user.value);
};
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  background: var(--v-background-radial-gradient);
}
.v-container.fill-height .bg-background {
  background: rgba(var(--v-theme-background), 0.75) !important;
  backdrop-filter: blur(8px);
  
}
</style>
