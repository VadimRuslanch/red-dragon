<template>
  <div class="DropDown">
    <details>
      <summary>{{ title }}</summary>
    </details>
  </div>
</template>

<script setup lang="ts">
import './DropDown.scss';

const { title } = defineProps<{ title: string }>();
</script>
