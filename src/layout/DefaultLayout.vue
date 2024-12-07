<template>
  <HeaderComponent />
  <main>
    <slot />
    <ButtonMainCallBack />
  </main>
  <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue';
import ButtonMainCallBack from '@/ui/ButtonMainCallBack/ButtonMainCallBack.vue';
</script>
