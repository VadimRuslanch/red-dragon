<template>
  <header class="Header">
    <div class="container">
      <div class="Header__logo">
        <LogoComponent />
      </div>
      <div class="Header__button">
        <ButtonDefault />
      </div>
      <div class="Header__burger">
        <ButtonBurger />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import './HeaderComponent.scss';
import ButtonDefault from '@/ui/ButtonDefault/ButtonDefault.vue';
import ButtonBurger from '@/ui/ButtonBurger/ButtonBurger.vue';
import LogoComponent from '@/ui/LogoComponent/LogoComponent.vue';
</script>
