<template>
  <h1 class="TitlePage">{{ title }}</h1>
</template>

<script setup lang="ts">
import './TitlePage.scss';

const { title } = defineProps<{ title: string }>();
</script>
