<template>
  <div class="PreviewBlock">
    <div class="page">
      <div class="PreviewBlock__preview">
        <div
          class="PreviewBlock__preview-item PreviewBlock__preview-item--left"
        >
          <NavigationMain />
          <img class="PreviewBlock__preview-image" src="/images/first.jpg" />
        </div>

        <section
          class="PreviewBlock__preview-item PreviewBlock__preview-item--center"
        >
          <h1 class="Info__title Info__title--mobile">
            <span>КРАСНЫЙ</span>
            ДРАКОН
          </h1>
          <h2 class="PreviewBlock__preview-center-title">
            ФОНД «КРАСНЫЙ ДРАКОН»
          </h2>
          <p class="PreviewBlock__preview-center-description">
            Создание инфраструктуры по развитию современного искусства и
            творчества, музыки и моды, спортивных мероприятий и новых
            современных технологий в сфере IT.
          </p>
          <img class="PreviewBlock__preview-image" src="/images/second.jpg" />
        </section>

        <img
          class="PreviewBlock__preview-item--right PreviewBlock__preview-image"
          src="/images/third.png"
        />
      </div>

      <InfoComponent />

      <ButtonMainCallBack />
    </div>
  </div>
</template>

<script setup lang="ts">
import './PreviewBlock.scss';
import NavigationMain from '@/components/NavigationMain/NavigationMain.vue';
import InfoComponent from '@/components/InfoComponent/InfoComponent.vue';
import ButtonMainCallBack from '@/ui/ButtonMainCallBack/ButtonMainCallBack.vue';
</script>
