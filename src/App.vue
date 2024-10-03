<script setup lang="ts">
import About from "@/blocks/About.vue";
import Projects from "@/blocks/Projects.vue";
import Skills from "@/blocks/Skills.vue";

import { onMounted, provide, ref, watch } from "vue";
import Loading from "./blocks/Loading.vue";
import playSound from "./utils/playSound.ts";

onMounted(() => {
  window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    isMobile.value = screenWidth < 1280;
  });
});

const curBlock = ref(1);
const isMobile = ref(window.innerWidth < 1280);

const block1 = ref<HTMLElement>();
const block2 = ref<HTMLElement>();
const block3 = ref<HTMLElement>();

const setCurBlock = (block: number) => {
  curBlock.value = block;
};

watch(curBlock, () => {
  const blocks = [block1, block2, block3];
  blocks.forEach((block) => {
    if (block.value) {
      block.value.style.display = "none";
    }

    const curBlockEl = blocks[curBlock.value - 1].value;

    if (curBlockEl) {
      curBlockEl.style.display = "block";
    }
  });
});

provide("store", {
  curBlock,
  setCurBlock,
  isMobile: isMobile.value,
});

const loading = ref<HTMLElement>();
const main = ref<HTMLElement>();

const onClickLoading = () => {
  if (loading.value && main.value) {
    loading.value.style.display = "none";
    main.value.style.display = "block";
  }
  playSound("click");
};
</script>

<template>
  <div class="hidden lg:block" @click="onClickLoading" ref="loading">
    <Loading />
  </div>
  <div class="lg:hidden block" ref="main">
    <div class="block xl:block" ref="block1">
      <About />
    </div>
    <div class="block xl:hidden" ref="block2">
      <Skills />
    </div>
    <div class="block xl:hidden" ref="block3">
      <Projects />
    </div>
  </div>
</template>
