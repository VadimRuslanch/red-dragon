<template>
  <HeaderComponent/>
  <main>
    <slot/>
  </main>
  <FooterComponent/>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue';
</script>
