<template>
  <button class="ButtonBurger-wr" @click="$emit('toggleMenu')">
    <span class="ButtonBurger">
      <span />
    </span>
  </button>
</template>

<script setup lang="ts">
import './ButtonBurger.scss';
</script>
