<template>
  <div class="SupportFond">
    <div class="page">
      <h3 class="SupportFond__title">
        Поддержите наш Фонд, который способствует развитию талантов и укреплению
        культурных ценностей в обществе
      </h3>

      <p class="SupportFond__description">
        Наши инновационные решения улучшают качество жизни и обеспечивают
        долгосрочную пользу для общества.
      </p>
      <ButtonMainCallBack @toggleModal="toggleModal" />
    </div>
    <IconDragon class="SupportFond__image" width="607" heigth="667" />

    <Teleport to="body">
      <ModalOverlay v-if="isActive">
        <CallBackComponent
          v-scroll-lock="isActive"
          @toggleModal="toggleModal"
        />
      </ModalOverlay>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import './SupportFond.scss';
import { ref } from 'vue';
import IconDragon from '@/assets/svg/dragon.svg';
import ButtonMainCallBack from '@/ui/ButtonMainCallBack/ButtonMainCallBack.vue';
import ModalOverlay from '@/components/ModalOverlay/ModalOverlay.vue';
import CallBackComponent from '@/components/CallBackComponent/CallBackComponent.vue';

const isActive = ref<boolean>(false);

const toggleModal = () => {
  isActive.value = !isActive.value;
};
</script>
