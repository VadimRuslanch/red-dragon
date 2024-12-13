<template>
  <div class="PartnersAccompanimentCard">
    <span class="PartnersAccompanimentCard__title">{{ title }}</span>
    <span class="PartnersAccompanimentCard__number">{{ number }}</span>
  </div>
</template>

<script setup lang="ts">
import './PartnersAccompanimentCard.scss';
const { title, number } = defineProps<{ title: string; number: string }>();
</script>
