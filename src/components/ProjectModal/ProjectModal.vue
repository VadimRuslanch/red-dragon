<template>
  <div v-if="data" class="ProjectModal">
    <button
      @click="$emit('toggleModal')"
      class="CallBackComponent__button-close"
    >
      <IconClose width="14" height="14" />
    </button>
    <img class="ProjectModal__image" v-if="data.image" :src="data.image" />
    <div class="ProjectModal__info">
      <span class="ProjectModal__title" v-if="data.title">{{
        data.title
      }}</span>
      <span class="ProjectModal__description" v-if="data.titleList">{{
        data.titleList
      }}</span>
      <ul v-if="data.list">
        <li
          class="ProjectModal__list-item ProjectModal__text"
          v-for="item in data.list"
        >
          {{ item.title }}
        </li>
      </ul>
      <span class="ProjectModal__text" v-if="data.about">{{ data.about }}</span>
      <RouterLink
        to="news"
        @click="$emit('toggle')"
        class="ProjectModal__button"
      >
        График мероприятий
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import './ProjectModal.scss';
import IconClose from '@/assets/svg/icon-close.svg';

interface ProjectItem {
  id: number;
  title: string;
  titleList: string;
  list: ProjectItemList[];
  about: string;
  image: string;
}

interface ProjectItemList {
  id: number;
  title: string;
}

const { data } = defineProps<{
  data: ProjectItem | null;
  onToggleModal: () => void;
}>();
</script>
