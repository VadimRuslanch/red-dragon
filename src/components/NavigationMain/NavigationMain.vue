<template>
  <nav>
    <ul class="NavigationMain">
      <li class="NavigationMain__item">
        <span class="NavigationMain__item-title">О фонде</span>
        <IconArrow class="NavigationMain__item-icon" />
      </li>
      <li class="NavigationMain__item">
        <span class="NavigationMain__item-title">Проекты</span>
        <IconArrow class="NavigationMain__item-icon" />
      </li>
      <li class="NavigationMain__item">
        <span class="NavigationMain__item-title">Новости</span>
        <IconArrow class="NavigationMain__item-icon" />
      </li>
      <li class="NavigationMain__item">
        <span class="NavigationMain__item-title">Партнеры</span>
        <IconArrow class="NavigationMain__item-icon" />
      </li>
      <li class="NavigationMain__item">
        <span class="NavigationMain__item-title">Контакты</span>
        <IconArrow class="NavigationMain__item-icon" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import './NavigationMain.scss';
import IconArrow from '@/assets/svg/arrow-link.svg';
</script>
