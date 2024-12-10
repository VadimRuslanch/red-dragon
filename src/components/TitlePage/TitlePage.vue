<template>
  <h2 class="TitlePage">{{ title }}</h2>
</template>

<script setup lang="ts">
import './TitlePage.scss';

const { title } = defineProps<{ title: string }>();
</script>
