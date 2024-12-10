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
      <ButtonMainCallBack />
    </div>
    <IconDragon class="SupportFond__image" width="607" heigth="667" />
  </div>
</template>

<script setup lang="ts">
import './SupportFond.scss';
import IconDragon from '@/assets/svg/dragon.svg';
import ButtonMainCallBack from '@/ui/ButtonMainCallBack/ButtonMainCallBack.vue';
</script>
