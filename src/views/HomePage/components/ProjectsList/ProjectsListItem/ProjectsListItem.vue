<template>
  <li
    class="ProjectsList__list-item"
    @mouseenter="toggleTrue"
    @mouseleave="toggleFalse"
  >
    <span class="ProjectsList__list-item-number">0{{ number }}</span>
    <p class="ProjectsList__list-item-text-wr">
      <span class="ProjectsList__list-item-text"> {{ title }} </span>
    </p>

    <div class="ProjectsList__list-item-image-wr">
      <img class="ProjectsList__list-item-image" :src="image" />
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from '@vue/runtime-dom';

const isActive = ref<boolean>(false);

const toggleFalse = () => {
  isActive.value = false;
};

const toggleTrue = () => {
  isActive.value = true;
};

const { title, number, image } = defineProps<{
  title: string;
  number: number;
  image: string;
}>();
</script>
