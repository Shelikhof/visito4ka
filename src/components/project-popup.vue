<script setup lang="ts">
import SoundWrapper from "./SoundWrapper.vue";

defineProps<{
  toogle: () => void;
  isOpen: boolean;
  title: string;
  image: string;
  links: {
    project: string | null;
    repository: string | null;
    design: string | null;
    schema: string | null;
  };
}>();
</script>
<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white grid justify-center z-[51]" @click="toogle">
    <div v-if="isOpen" class="overflow-auto bg w-full max-w-3xl h-full p-4 relative min-h-lvh border-black sm:border-[5px] sm:rounded-2xl sm:min-h-0 sm:max-h-[80%] sm:mt-14" @click.stop>
      <SoundWrapper>
        <button class="absolute top-4 right-4 w-8 h-8 border-2 border-white rounded-full flex items-center justify-center sm:left-2 sm:top-2" @click="toogle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white" />
          </svg>
        </button>
      </SoundWrapper>
      <div class="grid gap-5">
        <div class="grid gap-4 sm:grid-cols-2 sm:items-center">
          <h4 class="font-orelega text-2xl text-white leading-5 pr-8 sm:text-4xl sm:pr-0">{{ title }}</h4>
          <img :src="image" alt="preview" class="object-cover border border-black rounded-lg overflow-hidden aspect-video" />
        </div>
        <div>
          <p class="font-orelega">
            <span class="text-xl">Ссылка на проект: </span>
            <component :is="links.project ? 'a' : 'span'" :href="links.project" class="font-ubuntu" target="_blank">
              {{ links.project ? links.project : "в разработке" }}
            </component>
          </p>
          <p class="font-orelega">
            <span class="text-xl">Репозиторий проекта: </span>
            <component :is="links.repository ? 'a' : 'span'" :href="links.repository" class="font-ubuntu" target="_blank">
              {{ links.repository ? links.repository : "в разработке" }}
            </component>
          </p>
          <p class="font-orelega">
            <span class="text-xl">Дизайн проекта: </span>
            <component :is="links.design ? 'a' : 'span'" :href="links.design" class="font-ubuntu" target="_blank">
              {{ links.design ? links.design : "в разработке" }}
            </component>
          </p>
          <p class="font-orelega">
            <span class="text-xl">Схема проекта: </span>
            <component :is="links.schema ? 'a' : 'span'" :href="links.schema" class="font-ubuntu" target="_blank">
              {{ links.schema ? links.schema : "в разработке" }}
            </component>
          </p>
        </div>
        <div>
          <h4 class="font-orelega text-2xl text-white">О проекте</h4>
          <slot name="description" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg {
  background: linear-gradient(90deg, #f150f6 0%, #ffae46 100%);
}

::-webkit-scrollbar {
  width: 5px;
  padding: 5px;
}

::-webkit-scrollbar-thumb {
  background: #757575;
  border-radius: 10px;
}

a {
  text-decoration: underline;
  word-wrap: break-word;
  word-break: break-all;
  hyphens: auto;
  overflow-wrap: break-word;
  white-space: normal;
}
</style>
