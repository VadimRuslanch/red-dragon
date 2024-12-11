<template>
  <header class="Header" :class="{ hidden: isHidden }">
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
import { ref, onMounted, onUnmounted } from 'vue';
import './HeaderComponent.scss';
import ButtonDefault from '@/ui/ButtonDefault/ButtonDefault.vue';
import ButtonBurger from '@/ui/ButtonBurger/ButtonBurger.vue';
import LogoComponent from '@/ui/LogoComponent/LogoComponent.vue';

const isHidden = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Проверяем направление скролла
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
	isHidden.value = true; // Скролл вниз - скрыть
  } else {
	isHidden.value = false; // Скролл вверх - показать
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
