<template>
  <RouterLink :to="link" class="NavigationMain__item">
    <span class="NavigationMain__item-title">{{ title }}</span>
    <IconArrow class="NavigationMain__item-icon" />
  </RouterLink>
</template>

<script setup lang="ts">
import './NavLink.scss';
import IconArrow from '@/assets/svg/arrow-link.svg';

const { title, link } = defineProps<{
  title: string;
  link: string;
}>();
</script>
