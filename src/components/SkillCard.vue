<script setup lang="ts">
import SoundWrapper from "./SoundWrapper.vue";

defineProps<{ label: string; icon: string; type: number; link: string }>();

const styles = ["bg-1 text-white", "bg-2 text-black", "bg-3 text-white"];
</script>

<template>
  <li class="hover:scale-110 transition-all">
    <SoundWrapper>
      <a :href="link" target="_blank">
        <div :class="`flex flex-col items-center justify-center gap-[10px] w-20 h-20 border-2 border-black rounded-2xl sm:w-[150px] sm:h-[150px] ${styles[type - 1]}`">
          <img :src="icon" class="w-10 h-10 sm:w-20 sm:h-20" />
          <p class="font-prosto text-[10px] sm:text-base">{{ label }}</p>
        </div>
      </a>
    </SoundWrapper>
  </li>
</template>

<style scoped>
.bg-1 {
  background: linear-gradient(180deg, #f77c91 0%, #fa374a 100%);
}
.bg-2 {
  background: linear-gradient(0deg, #ffae46 0%, #f77c91 100%);
}
.bg-3 {
  background: linear-gradient(0deg, #fa374a 0%, #7e38d8 100%);
}
</style>
