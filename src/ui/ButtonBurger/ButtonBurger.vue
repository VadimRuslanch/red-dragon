<template>
  <button class="ButtonBurger" @click="$emit('toggleMenu')">
    <IconBurger />
  </button>
</template>

<script setup lang="ts">
import './ButtonBurger.scss';
import IconBurger from '@/assets/svg/icon-burger.svg';
</script>
