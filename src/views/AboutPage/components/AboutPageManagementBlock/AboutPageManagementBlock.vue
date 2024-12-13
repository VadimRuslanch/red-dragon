<template>
  <div class="AboutPageManagementBlock">
    <TitleInnerBlock title="Руководство фонда" />

    <div class="AboutPageManagementBlock__info">
      <Transition>
        <img class="AboutPageManagementBlock__image" :src="image" />
      </Transition>

      <ul class="AboutPageManagementBlock__list">
        <AboutPageManagementBlockItem
          @mouseenter="setSlide(index)"
          v-for="(item, index) in listArray"
          :title="item.title"
          :description="item.description"
          :image="item.image"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import './AboutPageManagementBlock.scss';
import { computed } from 'vue';
import AboutPageManagementBlockItem from '@/views/AboutPage/components/AboutPageManagementBlock/AboutPageManagementBlockItem/AboutPageManagementBlockItem.vue';
import { ref } from '@vue/runtime-dom';
import TitleInnerBlock from '@/components/TitleInnerBlock/TitleInnerBlock.vue';

const indexCurrentSlide = ref<number>(0);

interface ListArray {
  id: number;
  title: string;
  description: string;
  image: string;
}

const listArray: ListArray[] = [
  {
    id: 1,
    title: 'Стофарандова Наталия',
    description: 'Президент фонда',
    image: '/images/manager.jpg',
  },
  {
    id: 2,
    title: 'Уруймагов Петр',
    description: 'Вице-президент фонда',
    image: '/images/first.jpg',
  },
  {
    id: 3,
    title: 'Селезнева Анастасия',
    description: 'PR директор',
    image: '/images/manager.jpg',
  },
  {
    id: 4,
    title: 'Евгений Уваров',
    description: 'Руководитель проекта "Спорт"',
    image: '/images/manager.jpg',
  },
  {
    id: 5,
    title: 'Снегур Марина',
    description: 'Руководитель проекта "Искусство"',
    image: '/images/manager.jpg',
  },
  {
    id: 6,
    title: 'Самедова Белла',
    description: 'Руководитель проекта "Музыка"',
    image: '/images/manager.jpg',
  },
  {
    id: 6,
    title: 'Чекрызов Дмитрий',
    description: 'Руководитель проекта "Технологии"',
    image: '/images/manager.jpg',
  },
  {
    id: 6,
    title: 'Искендерова Алина ',
    description: 'Руководитель проекта "Мода"',
    image: '/images/manager.jpg',
  },
];

const setSlide = (data: number) => {
  indexCurrentSlide.value = data;
};

const image = computed<string>(() => {
  return listArray[indexCurrentSlide.value]?.image || '';
});
</script>
