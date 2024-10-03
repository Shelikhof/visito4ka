<script setup lang="ts">
import playSound from "@/utils/playSound.ts";
</script>
<template>
  <div @click="playSound('click')" @mouseenter="playSound('hover')">
    <slot />
  </div>
</template>
