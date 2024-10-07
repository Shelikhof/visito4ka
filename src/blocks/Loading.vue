<template>
  <div class="w-dvw h-dvh bg-black flex items-center justify-center cursor-pointer">
    <div class="w-[500px] h-4">
      <div class="w-full h-4 bg-white line-animation"></div>
      <p class="font-orelega text-white text-2xl text-center mt-4 text-animation opacity-0">Нажмите ЛКМ</p>
    </div>
  </div>
</template>
<style scoped>
.line-animation {
  animation: line-animation 2s ease-in normal forwards;
  transform-origin: left;
}

@keyframes line-animation {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.text-animation {
  animation: text-animation infinite 1s;
  animation-delay: 2.5s;
}

@keyframes text-animation {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
