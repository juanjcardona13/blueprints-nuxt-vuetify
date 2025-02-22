<template>
  <VContainer
    fluid
    class="d-flex justify-center align-center fill-height bg-surface"
  >
    <VCard
      class="pa-6 rounded-lg bg-background"
      elevation="1"
      width="450"
      :border="'sm'"
    >
      <h2 class="font-weight-bold text-h5 mb-4">
        {{ $t("welcome") }}
      </h2>

      <!-- Campo para agregar tarea -->
      <div class="d-flex align-center">
        <VTextField
          v-model="newTask"
          variant="outlined"
          placeholder="Enter your task"
          density="comfortable"
          hide-details
          class="flex-grow-1"
        />
        <VBtn
          color="primary"
          variant="flat"
          class="ms-2"
          prepend-icon="heroicons:plus"
          text="Add"
          @click="addTask"
        />
      </div>

      <VDivider class="my-4" />

      <VList bg-color="transparent" class="mb-4">
        <VListSubheader> Your tasks </VListSubheader>
        <VListItem
          v-for="(task, index) in tasks"
          :key="index"
          variant="tonal"
          :base-color="taskClasses(task)"
          class="mb-3 rounded-pill"
        >
          <template #prepend>
            <VCheckbox
              v-model="task.completed"
              density="compact"
              color="background"
              base-color="background"
              hide-details
              class="me-2"
            />
          </template>
          <span
            class="text-body-1 font-weight-medium"
            :class="{
              'text-decoration-line-through text-success': task.completed,
            }"
          >
            {{ task.title }}
          </span>
          <template #append>
            <VChip
              v-if="task.due && !task.completed"
              color="error"
              size="small"
              variant="tonal"
              rounded="pill"
              class="ms-3"
            >
              Due date
            </VChip>
            <template v-else-if="!task.completed">
              <template v-if="false">
                <VBtn
                  class="me-2"
                  :icon="true"
                  variant="flat"
                  size="x-small"
                  density="comfortable"
                  @click="editTask(index)"
                >
                  <VIcon color="primary" icon="mdi:pencil" size="12" />
                </VBtn>
                <VBtn
                  :icon="true"
                  variant="flat"
                  size="x-small"
                  density="comfortable"
                  @click="removeTask(index)"
                >
                  <VIcon color="error" icon="mdi:close" size="12" />
                </VBtn>
              </template>

              <template v-if="true">
                <VBtn
                  class="me-1"
                  variant="flat"
                  color="primary"
                  size="small"
                  text="Edit"
                  @click="editTask(index)"
                />
                <VBtn
                  variant="flat"
                  color="error"
                  size="small"
                  text="Delete"
                  @click="removeTask(index)"
                />
              </template>
            </template>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Task {
  title: string;
  completed: boolean;
  due: boolean;
}

const { data } = await useAsyncQuery<{ searchTasks: { objects: Task[] } }>(
  searchTasks(`id title completed`),
);
console.log("====>", data);
const taskDefault = [
  { title: "Learn Vuetify", completed: false, due: false },
  { title: "Developing in Nuxt", completed: true, due: false },
  { title: "Install Pinia", completed: false, due: false },
  { title: "Study Vue.js", completed: false, due: true },
];
const newTask = ref("");
const tasks = computed<Task[]>(() => {
  if (data) {
    return data.value?.searchTasks?.objects as Task[];
  } else {
    return taskDefault;
  }
});

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ title: newTask.value, completed: false, due: false });
    newTask.value = "";
  }
};

const editTask = (index: number) => {
  const editedTask = prompt("Edit task:", tasks.value[index].title);
  if (editedTask !== null) {
    tasks.value[index].title = editedTask;
  }
};

const removeTask = (index: number) => {
  tasks.value.splice(index, 1);
};

const taskClasses = (task: Task) => {
  if (task.completed) {
    return "success";
  } else if (task.due) {
    return "error";
  } else {
    return "primary";
  }
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

.v-selection-control__input > .v-icon {
  opacity: 1 !important;
}
</style>
