<template>
  <header class="Header" :class="{ hidden: isHidden }">
    <div class="container">
      <div class="Header__logo">
        <LogoComponent />
      </div>
      <div class="Header__button">
        <ButtonDefault @toggleModal="toggleModal" />
      </div>
      <div class="Header__burger">
        <ButtonBurger @toggleMenu="openModal" />
      </div>
    </div>

    <Teleport to="body">
      <ModalOverlay v-if="isActive">
        <CallBackComponent
          v-scroll-lock="isActive"
          @toggleModal="toggleModal"
        />
      </ModalOverlay>
    </Teleport>

    <Teleport to="body">
      <Transition name="ModalOverlay">
        <ModalOverlay v-if="isActiveManu">
          <MainManu v-scroll-lock="isActiveManu" @toggleMenu="closeModal" />
        </ModalOverlay>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import './HeaderComponent.scss';
import ButtonDefault from '@/ui/ButtonDefault/ButtonDefault.vue';
import ButtonBurger from '@/ui/ButtonBurger/ButtonBurger.vue';
import LogoComponent from '@/ui/LogoComponent/LogoComponent.vue';
import ModalOverlay from '@/components/ModalOverlay/ModalOverlay.vue';
import CallBackComponent from '@/components/CallBackComponent/CallBackComponent.vue';
import MainManu from '@/components/MainManu/MainManu.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = ref<boolean>(false);
const isActiveManu = ref<boolean>(false);

watch(
  () => route.path,
  () => {
    isActiveManu.value = false;
  }
);

const isHidden = ref(false);
let lastScrollY = 0;

const toggleModal = () => {
  isActive.value = !isActive.value;
  console.log(isActive.value);
};

const openModal = () => {
  isActiveManu.value = true;
};

const closeModal = () => {
  isActiveManu.value = false;
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
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
