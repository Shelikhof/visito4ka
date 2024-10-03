<script setup lang="ts">
import SkillCard from "@/components/SkillCard.vue";
import reactIcon from "@/assets/icon/React.svg";
import reduxIcon from "@/assets/icon/Redux.svg";
import tailwindcssIcon from "@/assets/icon/TailwindCSS.svg";
import nestIcon from "@/assets/icon/Nest.svg";
import postgresIcon from "@/assets/icon/PostgresSQL.svg";
import prismaIcon from "@/assets/icon/Prisma.svg";
import sequelizeIcon from "@/assets/icon/Sequelize.svg";
import dockerIcon from "@/assets/icon/Docker.svg";
import nginxIcon from "@/assets/icon/NGINX.svg";
import Lines from "@/components/Lines.vue";
import { inject, onMounted, ref } from "vue";
import { animate, inView, stagger } from "motion";
import Menu from "@/components/Menu.vue";

const SKILLS_1 = [
  {
    icon: tailwindcssIcon,
    label: "TAILWIND",
    style: 1,
    link: "https://tailwindcss.com/",
  },
  {
    icon: reactIcon,
    label: "REACT",
    style: 1,
    link: "https://react.dev/",
  },
  {
    icon: reduxIcon,
    label: "REDUX",
    style: 1,
    link: "https://redux.js.org/",
  },
];

const SKILLS_2 = [
  {
    icon: nestIcon,
    label: "NESTJS",
    style: 2,
    link: "https://nestjs.com/",
  },
  {
    icon: postgresIcon,
    label: "POSTGRES",
    style: 2,
    link: "https://www.postgresql.org/",
  },
  {
    icon: prismaIcon,
    label: "PRISMA",
    style: 2,
    link: "https://www.prisma.io/",
  },
  {
    icon: sequelizeIcon,
    label: "SEQUELIZE",
    style: 2,
    link: "https://sequelize.org/",
  },
];

const SKILLS_3 = [
  {
    icon: dockerIcon,
    label: "DOCKER",
    style: 3,
    link: "https://www.docker.com/",
  },
  {
    icon: nginxIcon,
    label: "NGINX",
    style: 3,
    link: "https://nginx.org/ru/",
  },
];

const cards = ref<HTMLElement>();
const palm = ref<HTMLElement>();
const menu = ref<HTMLElement>();
const helicopter = ref<HTMLElement>();

const { isMobile } = inject("store") as any;

onMounted(() => {
  if (cards.value)
    inView(cards.value as Element, ({ target }) => {
      animate("li", { opacity: 1 }, { delay: stagger(0.1) });
      return () => {
        if (!isMobile) {
          const li = document.querySelectorAll("li");
          li.forEach((li) => {
            li.style.setProperty("transform", "");
            li.style.setProperty("opacity", "");
          });
        }
      };
    });

  if (palm.value)
    inView(palm.value as Element, ({ target }) => {
      animate(palm.value as Element, { opacity: 1, transform: "none" }, { delay: 0.4, duration: 1, easing: [0.17, 0.55, 0.55, 1] });
      return () => {
        if (!isMobile) {
          palm.value?.style.setProperty("transform", "");
          palm.value?.style.setProperty("opacity", "");
        }
      };
    });

  if (cards.value)
    inView(cards.value as Element, ({ target }) => {
      animate("h4", { opacity: 1 }, { delay: stagger(0.15) });
      return () => {
        if (!isMobile) {
          const h4 = document.querySelectorAll("h4");
          h4.forEach((h4) => {
            h4.style.setProperty("transform", "");
            h4.style.setProperty("opacity", "");
          });
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

  if (helicopter.value)
    inView(helicopter.value as Element, ({ target }) => {
      animate(helicopter.value as Element, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 1, easing: [0.17, 0.55, 0.55, 1] });
      return () => {
        if (!isMobile) {
          helicopter.value?.style.setProperty("transform", "");
          helicopter.value?.style.setProperty("opacity", "");
        }
      };
    });
});
</script>

<template>
  <section class="py-16 px-4 relative overflow-hidden xl:min-h-dvh xl:flex items-center justify-end pr-2 2xl:pr-40">
    <div class="w-full absolute top-0 left-0">
      <Lines pos="top" />
    </div>
    <div class="absolute top-0 left-0 hidden xl:block 2xl:left-0 -translate-x-full z-[4]" ref="menu">
      <Menu :style="2" />
    </div>
    <picture>
      <source srcset="@/assets/palm-2.png" media="(min-width: 768px)" />
      <img ref="palm" src="@/assets/palm-2-m.png" class="absolute bottom-2 right-0 z-1 opacity-0" />
    </picture>
    <img src="@/assets/helicopter.png" class="absolute left-0 bottom-15 hidden 2xl:block -translate-x-full opacity-0" ref="helicopter" />
    <div ref="cards" class="z-20 relative">
      <h3 class="font-orelega text-2xl uppercase text-yellow-200 text-center mb-7 sm:text-4xl xl:hidden">Стек технологий</h3>
      <div class="mb-8 xl:flex items-center gap-8">
        <h4 class="font-orelega text-lg uppercase text-white mb-4 sm:text-4xl xl:text-5xl opacity-0">Клиент</h4>
        <ul class="flex gap-5 flex-wrap">
          <SkillCard v-for="skill in SKILLS_1" :key="skill.label" :icon="skill.icon" :label="skill.label" :type="skill.style" :link="skill.link" />
        </ul>
      </div>
      <div class="mb-8 xl:flex items-center gap-12">
        <h4 class="font-orelega text-lg uppercase text-white mb-4 sm:text-4xl xl:text-5xl opacity-0">Сервер</h4>
        <ul class="flex gap-5 flex-wrap">
          <SkillCard v-for="skill in SKILLS_2" :key="skill.label" :icon="skill.icon" :label="skill.label" :type="skill.style" :link="skill.link" />
        </ul>
      </div>
      <div class="mb-8 xl:flex items-center gap-8">
        <h4 class="font-orelega text-lg uppercase text-white mb-4 sm:text-4xl xl:text-5xl opacity-0">DEV OPS</h4>
        <ul class="flex gap-5 flex-wrap">
          <SkillCard v-for="skill in SKILLS_3" :key="skill.label" :icon="skill.icon" :label="skill.label" :type="skill.style" :link="skill.link" />
        </ul>
      </div>
    </div>
    <div class="w-full absolute bottom-0 left-0">
      <Lines pos="bottom" />
    </div>
  </section>
</template>

<style scoped>
section {
  background: linear-gradient(181deg, #5565b0 0.59%, #45286a 100%);
}
li {
  opacity: 0;
  list-style: none;
}
</style>
