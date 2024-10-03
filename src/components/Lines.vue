<script setup lang="ts">
defineProps<{
  pos: "top" | "bottom";
}>();
</script>
<template>
  <div class="w-full z-10 relative">
    <div v-if:pos="pos === 'top'">
      <div class="w-full h-[15px] bg-black"></div>
      <div class="w-full h-[15px] mt-[3px] bg-black"></div>
      <div class="w-full h-[5px] mt-[3px] bg-black"></div>
      <div class="w-full h-[3px] mt-[3px] bg-black"></div>
    </div>
    <div v-else>
      <div class="w-full h-[3px] mb-[3px] bg-black"></div>
      <div class="w-full h-[5px] mb-[3px] bg-black"></div>
      <div class="w-full h-[15px] mb-[3px] bg-black"></div>
      <div class="w-full h-[15px] bg-black"></div>
    </div>
  </div>
</template>
