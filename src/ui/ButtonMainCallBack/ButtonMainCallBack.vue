<template>
  <button class="ButtonMainCallBack" @click="$emit('toggleModal')">
    {{ title ? title : 'Поддержать фонд' }}
  </button>
</template>

<script setup lang="ts">
import './ButtonMainCallBack.scss';

const { title } = defineProps<{ title?: string }>();
</script>
