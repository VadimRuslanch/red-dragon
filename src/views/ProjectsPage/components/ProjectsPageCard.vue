<template>
  <div class="ProjectsPageCard">
    <img class="ProjectsPageCard__image" :src="image" />
    <div class="ProjectsPageCard__info">
      <span class="ProjectsPageCard__title">{{ title }}</span>
      <span class="ProjectsPageCard__description">{{ description }}</span>
      <button @click="$emit('toggle')" class="ProjectsPageCard__button">
        Подробнее
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import './ProjectsPageCard.scss';

const { image, title, description } = defineProps<{
  image: string;
  title: string;
  description: string;
}>();
</script>
