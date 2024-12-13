<template>
  <div class="AboutPageManagementBlockItem">
    <li
      class="AboutPageManagementBlock__list-item"
      @mouseenter="toggleTrue"
      @mouseleave="toggleFalse"
    >
      <span class="AboutPageManagementBlock__list-item-number">{{
        description
      }}</span>
      <p class="AboutPageManagementBlock__list-item-text-wr">
        <span class="AboutPageManagementBlock__list-item-text">
          {{ title }}
        </span>
      </p>
      <div class="AboutPageManagementBlockItem__image-wr">
        <div class="AboutPageManagementBlockItem__image-content">
          <img class="AboutPageManagementBlockItem__image" :src="image" />
        </div>
      </div>
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

const { title, description, image } = defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>
