<template>
  <button class="ButtonBurger" :class="{ active: isActive }" @click="toggle">
    <span />
  </button>
</template>

<script setup lang="ts">
import './ButtonBurger.scss';
import { ref } from '@vue/runtime-dom';
const isActive = ref<boolean>(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>
