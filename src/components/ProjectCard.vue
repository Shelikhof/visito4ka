<script setup lang="ts">
import { ref } from "vue";
import ProjectPopUp from "./project-popup.vue";
import SoundWrapper from "./SoundWrapper.vue";

defineProps<{
  title: string;
  image: string;
  links: {
    project: string | null;
    repository: string | null;
    design: string | null;
    schema: string | null;
  };
}>();

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <li>
    <Transition>
      <ProjectPopUp v-if="isOpen" :toogle="toggle" :title="title" :image="image" :is-open="isOpen" :links="links">
        <template #description>
          <slot name="description" />
        </template>
      </ProjectPopUp>
    </Transition>
    <SoundWrapper>
      <div class="cursor-pointer hover:translate-x-2 transition-all w-full grid gap-2 border-2 border-black rounded-2xl p-[10px] sm:max-h-[250px] sm:max-w-[750px] bg sm:grid-cols-2 sm:items-center" @click="isOpen = true">
        <h4 class="font-orelega text-lg text-white leading-5 sm:text-4xl">{{ title }}</h4>
        <img :src="image" alt="preview" class="w-full sm:h-full object-cover border border-black rounded-lg overflow-hidden aspect-video" />
      </div>
    </SoundWrapper>
  </li>
</template>
<style scoped>
.bg {
  background: linear-gradient(180deg, #f150f6 0%, #ffae46 100%);
}
@media (min-width: 640px) {
  .bg {
    background: linear-gradient(90deg, #f150f6 0%, #ffae46 100%);
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
