<template>
  <div class="HomePage">
    <div class="HomePage__preview">
      <div class="HomePage__preview-item HomePage__preview-item--left">
        <NavigationMain />
        <img class="HomePage__preview-image" src="/images/first.jpg" />
      </div>

      <section class="HomePage__preview-item HomePage__preview-item--center">
        <h2 class="HomePage__preview-center-title">ФОНД «КРАСНЫЙ ДРАКОН»</h2>
        <p class="HomePage__preview-center-description">
          Создание инфраструктуры по развитию современного искусства и
          творчества, музыки и моды, спортивных мероприятий и новых современных
          технологий в сфере IT.
        </p>
        <img class="HomePage__preview-image" src="/images/second.jpg" />
      </section>

      <img
        class="HomePage__preview-item--right HomePage__preview-image"
        src="/images/third.png"
      />
    </div>

    <InfoComponent />
  </div>
</template>

<script setup lang="ts">
import './HomePage.scss';
import NavigationMain from '@/components/NavigationMain/NavigationMain.vue';
import InfoComponent from '@/components/InfoComponent/InfoComponent.vue';
</script>
