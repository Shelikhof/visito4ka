<script setup lang="ts">
import Lines from "@/components/Lines.vue";
import Menu from "@/components/Menu.vue";
import SoundWrapper from "@/components/SoundWrapper.vue";
import { animate, inView } from "motion";
import { inject, onMounted, ref } from "vue";

const info = ref<HTMLElement>();
const img = ref<HTMLElement>();
const palm = ref<HTMLElement>();
const menu = ref<HTMLElement>();

const { isMobile } = inject("store") as any;

onMounted(() => {
  if (info.value)
    inView(info.value as Element, ({ target }) => {
      animate(info.value as Element, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.7, easing: [0.17, 0.55, 0.55, 1] });
      return () => {
        if (!isMobile) {
          info.value?.style.setProperty("transform", "");
          info.value?.style.setProperty("opacity", "");
        }
      };
    });

  if (img.value)
    inView(img.value as Element, ({ target }) => {
      animate(img.value as Element, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.7, easing: [0.17, 0.55, 0.55, 1] });
      return () => {
        if (!isMobile) {
          img.value?.style.setProperty("transform", "");
          img.value?.style.setProperty("opacity", "");
        }
      };
    });

  if (palm.value)
    inView(palm.value as Element, ({ target }) => {
      animate(palm.value as Element, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 1, easing: [0.17, 0.55, 0.55, 1] });
      return () => {
        if (!isMobile) {
          palm.value?.style.setProperty("transform", "");
          palm.value?.style.setProperty("opacity", "");
        }
      };
    });

  if (menu.value)
    inView(menu.value as Element, ({ target }) => {
      animate(menu.value as Element, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] });
      return () => {
        if (!isMobile) {
          menu.value?.style.setProperty("transform", "");
          menu.value?.style.setProperty("opacity", "");
        }
      };
    });
});
</script>

<template>
  <section class="min-h-svh relative py-[40px] overflow-hidden">
    <div class="w-full absolute top-0">
      <Lines pos="top" />
    </div>
    <div class="hidden absolute bottom-0 z-10 xl:block -translate-x-full translate-y-full" ref="menu">
      <Menu :style="1" />
    </div>
    <picture>
      <source srcset="@/assets/palm-1.png" media="(min-width: 768px)" />
      <img ref="palm" class="absolute bottom-0 left-0 md:h-full object-cover md:left-[-50px] palm" src="@/assets/palm-1-m.png" />
    </picture>
    <div class="flex gap-1 items-center absolute bottom-16 right-4 links" ref="img">
      <SoundWrapper>
        <a href="https://github.com/Shelikhof" target="_blank">
          <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_120_458)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.43 0C10.4738 0 0 10.5417 0 23.5831C0 34.0079 6.71093 42.8322 16.0208 45.9554C17.1847 46.1902 17.6111 45.448 17.6111 44.8236C17.6111 44.2769 17.5727 42.4029 17.5727 40.4503C11.0551 41.8562 9.69783 37.639 9.69783 37.639C8.6504 34.9059 7.09844 34.2034 7.09844 34.2034C4.96521 32.7587 7.25383 32.7587 7.25383 32.7587C9.62013 32.9149 10.8618 35.1795 10.8618 35.1795C12.9562 38.7713 16.3311 37.7564 17.6888 37.1316C17.8825 35.6088 18.5036 34.5546 19.1631 33.9691C13.9648 33.4224 8.49549 31.3921 8.49549 22.3335C8.49549 19.7565 9.4259 17.6482 10.9002 16.0085C10.6676 15.4229 9.85274 13.0017 11.1332 9.7611C11.1332 9.7611 13.1116 9.13627 17.5722 12.1819C19.482 11.6656 21.4515 11.403 23.43 11.4008C25.4083 11.4008 27.425 11.6744 29.2872 12.1819C33.7484 9.13627 35.7267 9.7611 35.7267 9.7611C37.0072 13.0017 36.1919 15.4229 35.9593 16.0085C37.4724 17.6482 38.3645 19.7565 38.3645 22.3335C38.3645 31.3921 32.8952 33.3831 27.6581 33.9691C28.5117 34.7108 29.2484 36.1162 29.2484 38.342C29.2484 41.5045 29.21 44.0426 29.21 44.8232C29.21 45.448 29.6369 46.1902 30.8003 45.9559C40.1102 42.8318 46.8211 34.0079 46.8211 23.5831C46.8595 10.5417 36.3473 0 23.43 0Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_120_458">
                <rect width="47" height="46" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </SoundWrapper>
      <SoundWrapper>
        <a href="https://t.me/shelikoff" target="_blank">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 2C37.703 2 48 12.297 48 25C48 37.703 37.703 48 25 48C12.297 48 2 37.703 2 25C2 12.297 12.297 2 25 2ZM32.934 34.375C33.357 33.077 35.339 20.141 35.584 17.592C35.658 16.82 35.414 16.307 34.936 16.078C34.358 15.8 33.502 15.939 32.509 16.297C31.147 16.788 13.735 24.181 12.729 24.609C11.775 25.014 10.873 25.456 10.873 26.096C10.873 26.546 11.14 26.799 11.876 27.062C12.642 27.335 14.571 27.92 15.71 28.234C16.807 28.537 18.056 28.274 18.756 27.839C19.498 27.378 28.061 21.648 28.676 21.146C29.29 20.644 29.78 21.287 29.278 21.79C28.776 22.292 22.898 27.997 22.123 28.787C21.182 29.746 21.85 30.74 22.481 31.138C23.202 31.592 28.387 35.07 29.168 35.628C29.949 36.186 30.741 36.439 31.466 36.439C32.191 36.439 32.573 35.484 32.934 34.375Z" fill="black" />
          </svg>
        </a>
      </SoundWrapper>
    </div>

    <div class="text-right mt-20 mx-auto mr-4 info opacity-0 translate-x-full pb-28" ref="info">
      <h1 class="font-orelega text-4xl uppercase mb-2 sm:text-5xl md:text-6xl">
        Меня зовут <br />
        Александр
      </h1>

      <h3 class="font-orelega text-2xl sm:text-3xl md:text-4xl">
        и я
        <span class="gradient-text"> typeSript </span>
        <br />
        <span class="gradient-text"> web-разработчик </span>
      </h3>

      <picture>
        <source srcset="@/assets/ts.png" media="(min-width: 768px)" />
        <img src="@/assets/ts-m.png" class="ml-auto mt-9" />
      </picture>
    </div>
    <div class="w-full absolute bottom-0">
      <Lines pos="bottom" />
    </div>
  </section>
</template>
<style scoped>
section {
  background: linear-gradient(180deg, #ffae46 0%, #f77c91 99.91%);
}

.links {
  transform: translateY(100%);
  opacity: 0;
}

.palm {
  opacity: 0;
}

.gradient-text {
  background: linear-gradient(90deg, #3f4081 0%, #45286a 99.99%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
