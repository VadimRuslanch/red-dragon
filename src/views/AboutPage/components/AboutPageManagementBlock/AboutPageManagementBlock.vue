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
    image: '/images/Management/natalia.jpg',
  },
  {
    id: 2,
    title: 'Уруймагов Петр',
    description: 'Вице-президент фонда',
    image: '/images/Management/petr.jpg',
  },
  {
    id: 3,
    title: 'Селезнева Анастасия',
    description: 'PR директор',
    image: '/images/Management/anastasha.jpg',
  },
  {
    id: 4,
    title: 'Уваров Евгений',
    description: 'Руководитель проекта "Спорт"',
    image: '/images/Management/evgeniy.jpg',
  },
  {
    id: 5,
    title: 'Снегур Марина',
    description: 'Руководитель проекта "Искусство"',
    image: '/images/Management/marina.jpg',
  },
  {
    id: 6,
    title: 'Самедова Белла',
    description: 'Руководитель проекта "Музыка"',
    image: '/images/Management/bella.jpg',
  },
  {
    id: 6,
    title: 'Чекрызов Дмитрий',
    description: 'Руководитель проекта "Технологии"',
    image: '/images/Management/dima.jpg',
  },
  {
    id: 6,
    title: 'Искендерова Алина ',
    description: 'Руководитель проекта "Мода"',
    image: '/images/Management/alina.jpg',
  },
];

const setSlide = (data: number) => {
  indexCurrentSlide.value = data;
};

const image = computed<string>(() => {
  return listArray[indexCurrentSlide.value]?.image || '';
});
</script>
