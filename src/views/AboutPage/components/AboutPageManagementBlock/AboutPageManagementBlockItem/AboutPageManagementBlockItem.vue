<template>
  <div class="AboutPageManagementBlockItem">
    <li
      class="ProjectsList__list-item"
      @mouseenter="toggleTrue"
      @mouseleave="toggleFalse"
    >
      <span class="ProjectsList__list-item-number">{{ description }}</span>
      <p class="ProjectsList__list-item-text-wr">
        <span class="ProjectsList__list-item-text"> {{ title }} </span>
      </p>
    </li>
  </div>
</template>

<script setup lang="ts">
import './AboutPageManagementBlockItem.scss';
import { ref } from '@vue/runtime-dom';

const isActive = ref<boolean>(false);

const toggleFalse = () => {
  isActive.value = false;
};

const toggleTrue = () => {
  isActive.value = true;
};

const { title, description } = defineProps<{
  title: string;
  description: string;
}>();
</script>
