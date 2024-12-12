<template>
  <div class="PartnersListCard">
    <img class="PartnersListCard__image" :src="image" />
  </div>
</template>

<script setup lang="ts">
import './PartnersListCard.scss';
const { image } = defineProps<{ image: string }>();
</script>
