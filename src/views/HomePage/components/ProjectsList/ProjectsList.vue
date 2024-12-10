<template>
  <div class="ProjectsList">
    <div class="page">
      <span class="HomePage__description">Наши проекты</span>

      <ul class="ProjectsList__list">
        <ProjectsListItem
          v-for="(item, index) in listArray"
          :title="item.title"
          :number="index + 1"
          :image="item.image"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import './ProjectsList.scss';
import ProjectsListItem from '@/views/HomePage/components/ProjectsList/ProjectsListItem/ProjectsListItem.vue';

const listArray = [
  {
    id: 1,
    title: 'КИБЕРСПОРТ',
    image: '/images/first.jpg',
  },
  {
    id: 2,
    title: 'МОДА',
    image: '/images/first.jpg',
  },
  {
    id: 3,
    title: 'МУЗЫКА',
    image: '/images/first.jpg',
  },
  {
    id: 14,
    title: 'ИСКУССТВО',
    image: '/images/first.jpg',
  },
  {
    id: 51,
    title: 'КРАСОТА',
    image: '/images/first.jpg',
  },
  {
    id: 16,
    title: 'СПОРТ',
    image: '/images/first.jpg',
  },
];
</script>
