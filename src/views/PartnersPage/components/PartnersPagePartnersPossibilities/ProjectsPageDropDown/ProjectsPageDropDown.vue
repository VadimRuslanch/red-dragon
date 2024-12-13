<template>
  <div class="DropDown">
    <details>
      <summary class="DropDown__title">{{ title }}</summary>
    </details>
  </div>
</template>

<script setup lang="ts">
import './ProjectsPageDropDown.scss';

const { title } = defineProps<{ title: string }>();
</script>
