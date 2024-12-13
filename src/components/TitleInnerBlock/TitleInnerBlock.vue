<template>
  <div class="TitleInnerBlock">{{ title }}</div>
</template>

<script setup lang="ts">
import './TitleInnerBlock.scss';
const { title } = defineProps<{ title: string }>();
</script>
