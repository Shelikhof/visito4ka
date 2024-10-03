<script setup lang="ts">
import playSound from "@/utils/playSound";
import { inject } from "vue";
import SoundWrapper from "./SoundWrapper.vue";

defineProps<{
  style: number;
}>();

const store = inject("store") as any;
</script>
<template>
  <div class="w-full relative" v-if="style === 1">
    <ul class="absolute bottom-[100px] left-[100px] grid gap-[25px] text-white">
      <SoundWrapper>
        <li class="font-caveat text-4xl cursor-pointer text-purple-300 transition-all" @click="store.setCurBlock(1)">обо мне</li>
      </SoundWrapper>
      <SoundWrapper>
        <li class="font-caveat text-4xl cursor-pointer hover:text-purple-100 transition-all" @click="store.setCurBlock(2)">навыки</li>
      </SoundWrapper>
      <SoundWrapper>
        <li class="font-caveat text-4xl cursor-pointer hover:text-purple-100 transition-all" @click="store.setCurBlock(3)">проекты</li>
      </SoundWrapper>
    </ul>
    <svg width="698" height="636" viewBox="0 0 698 636" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_39_1260)">
        <circle cx="162.5" cy="531.5" r="435.5" fill="url(#paint0_linear_39_1260)" />
      </g>
      <defs>
        <filter id="filter0_d_39_1260" x="-373" y="0" width="1071" height="1071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="50" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_1260" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_1260" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_39_1260" x1="126.5" y1="96" x2="162" y2="933.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFAE46" />
          <stop offset="1" stop-color="#F0AF75" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="w-full relative" v-else-if="style === 2">
    <ul class="absolute top-[50px] left-[150px] 2xl:left-[100px] grid gap-[25px] text-purple-300">
      <SoundWrapper>
        <li class="font-caveat cursor-pointer text-4xl hover:text-purple-100 transition-all" @click="store.setCurBlock(1)">обо мне</li>
      </SoundWrapper>
      <SoundWrapper>
        <li class="font-caveat cursor-pointer text-4xl text-red-100" @click="store.setCurBlock(2)">навыки</li>
      </SoundWrapper>
      <SoundWrapper>
        <li class="font-caveat cursor-pointer text-4xl hover:text-purple-100 transition-all" @click="store.setCurBlock(3)">проекты</li>
      </SoundWrapper>
    </ul>
    <svg width="698" height="409" viewBox="0 0 698 409" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_39_1135)">
        <circle cx="162.5" cy="-130.5" r="435.5" fill="url(#paint0_linear_39_1135)" />
      </g>
      <defs>
        <filter id="filter0_d_39_1135" x="-373" y="-662" width="1071" height="1071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="50" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_1135" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_1135" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_39_1135" x1="162.5" y1="-566" x2="162.5" y2="305" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F7FBF7" />
          <stop offset="1" stop-color="#D1D1D1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="w-full relative" v-else-if="style === 3">
    <ul class="absolute top-[90px] left-[100px] grid gap-[25px] text-purple-300">
      <SoundWrapper>
        <li class="font-caveat cursor-pointer text-4xl hover:text-purple-100 transition-all" @click="store.setCurBlock(1)">обо мне</li>
      </SoundWrapper>
      <SoundWrapper>
        <li class="font-caveat cursor-pointer text-4xl hover:text-purple-100 transition-all" @click="store.setCurBlock(2)">навыки</li>
      </SoundWrapper>
      <SoundWrapper>
        <li class="font-caveat cursor-pointer text-4xl text-red-100" @click="store.setCurBlock(3)">проекты</li>
      </SoundWrapper>
    </ul>
    <svg width="698" height="454" viewBox="0 0 698 454" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_44_1331)">
        <circle cx="162.5" cy="-85.5" r="435.5" fill="#FFAE46" />
      </g>
      <defs>
        <filter id="filter0_d_44_1331" x="-373" y="-617" width="1071" height="1071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="50" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_1331" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_1331" result="shape" />
        </filter>
      </defs>
    </svg>
  </div>
</template>
