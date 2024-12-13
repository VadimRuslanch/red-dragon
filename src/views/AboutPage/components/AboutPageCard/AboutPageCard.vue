<template>
  <div
    class="AboutPageCard"
    :style="`--color-bg: ${background}; display: ${mobile};`"
  >
    <h4 class="AboutPageCard__title">{{ title }}</h4>
    <span class="AboutPageCard__description">{{ description }}</span>
    <IconDragon
      v-if="position"
      width="385"
      heigth="366"
      class="AboutPageCard__image"
      :style="{ top: position?.top, right: position?.right }"
    />
  </div>
</template>

<script setup lang="ts">
import './AboutPageCard.scss';
import IconDragon from '@/assets/svg/dragon.svg';

interface Position {
  top: string;
  right: string;
}

const { title, description, background, position } = defineProps<{
  title?: string;
  description?: string;
  background?: string;
  position?: Position;
  mobile?: string;
}>();
</script>
