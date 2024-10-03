<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import projectOne from "@/assets/preview/project-1.png";
import projectTwo from "@/assets/preview/project-2.png";
import projectThree from "@/assets/preview/project-3.png";
import Lines from "@/components/Lines.vue";
import { inject, onMounted, ref } from "vue";
import { animate, inView, stagger } from "motion";
import Menu from "@/components/Menu.vue";
import project1 from "@/description/project1.vue";
import project2 from "@/description/project2.vue";
import project3 from "@/description/project3.vue";

const PROJECTS = [
  {
    title: "Сайт учёта посещаемости студентов",
    image: projectOne,
    describtion: project1,
    links: {
      project: "https://www.visittracker.shelikhoff.ru/",
      repository: "https://github.com/Shelikhof/visitTracker",
      design: "https://www.figma.com/design/A69OBEYplz5yPfzaQuDWvz/visitSystem?node-id=0-1&node-type=canvas&t=0nYQMnpAlvk9yeDX-0",
      schema: "https://kappa.lol/V5GkM",
    },
  },
  {
    title: "Сайт с расписанием электричек",
    image: projectTwo,
    describtion: project2,
    links: {
      project: null,
      repository: null,
      design: "https://www.figma.com/design/RGOpDqrErGyGJFngdxoodp/SuburbanTrain?t=0nYQMnpAlvk9yeDX-1",
      schema: "https://kappa.lol/Qrc2b",
    },
  },
  {
    title: "Система учёта заявок на выдачу справок",
    image: projectThree,
    describtion: project3,
    links: {
      project: "https://www.ticket.shelikhoff.ru/",
      repository: "https://github.com/Shelikhof/ticketSystem",
      design: "https://www.figma.com/design/FEgctZEvW1FHlwBq82McCL/pizdatnya?node-id=0-1&t=0nYQMnpAlvk9yeDX-1",
      schema: "https://kappa.lol/aGOrv",
    },
  },
];

const projects = ref<HTMLElement>();
const plane = ref<HTMLElement>();
const menu = ref<HTMLElement>();
const car = ref<HTMLElement>();

const { isMobile } = inject("store") as any;

onMounted(() => {
  if (projects.value)
    inView(projects.value as Element, ({ target }) => {
      animate("li", { opacity: 1 }, { delay: stagger(0.05) });
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

  if (plane.value)
    inView(projects.value as Element, ({ target }) => {
      animate(plane.value as Element, { transform: "none" }, { delay: 0.2, duration: 1, easing: [0.17, 0.55, 0.55, 1] });
      return () => {
        if (!isMobile) {
          plane.value?.style.setProperty("transform", "");
          plane.value?.style.setProperty("opacity", "");
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

  if (car.value)
    inView(car.value as Element, ({ target }) => {
      animate(car.value as Element, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] });
      return () => {
        if (!isMobile) {
          car.value?.style.setProperty("transform", "");
          car.value?.style.setProperty("opacity", "");
        }
      };
    });
});
</script>
<template>
  <section class="px-5 py-16 relative overflow-hidden xl:flex items-center justify-end xl:min-h-dvh 2xl:pr-40">
    <div class="w-full absolute top-0 left-0">
      <Lines pos="top" />
    </div>
    <img src="@/assets/car.png" class="absolute bottom-0 left-0 z-1 hidden 2xl:block -translate-x-full opacity-0" ref="car" />
    <div class="absolute top-0 left-0 hidden xl:block -translate-x-full -translate-y-56 z-[4]" ref="menu">
      <Menu :style="3" />
    </div>
    <div class="z-20 relative">
      <h3 class="font-orelega text-2xl uppercase text-yellow-200 text-center mb-7 sm:text-4xl xl:hidden">ПРОЕКТЫ</h3>
      <ul class="grid gap-8" ref="projects">
        <ProjectCard v-for="project in PROJECTS" :title="project.title" :image="project.image" :links="project.links">
          <template #description>
            <component :is="project.describtion" />
          </template>
        </ProjectCard>
      </ul>
    </div>
    <picture>
      <source srcset="@/assets/plane.png" media="(min-width: 320px)" />
      <img ref="plane" src="@/assets/plane-m.png" class="absolute bottom-0 right-0 z-1 h-full translate-y-full" />
    </picture>
    <div class="w-full absolute bottom-0 left-0">
      <Lines pos="bottom" />
    </div>
  </section>
</template>
<style scoped>
section {
  background: linear-gradient(180deg, #2b2337 0%, #202135 100%);
}
li {
  opacity: 0;
  list-style: none;
}
</style>
