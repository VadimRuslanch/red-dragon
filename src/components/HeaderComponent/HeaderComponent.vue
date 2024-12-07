<template>
  <header class="Header">
    <LogoComponent />
    <ButtonDefault />
    <ButtonBurger />
  </header>
</template>

<script setup lang="ts">
import './HeaderComponent.scss';
import ButtonDefault from '@/ui/ButtonDefault/ButtonDefault.vue';
import ButtonBurger from '@/ui/ButtonBurger/ButtonBurger.vue';
import LogoComponent from '@/ui/LogoComponent/LogoComponent.vue';
</script>
