<template>
  <div class="MainManu">
    <div class="page">
      <div class="MainManu-top">
        <div class="MainManu-top-item" style="text-align: left">
          <LogoComponent />
        </div>
        <div class="MainManu-top-item" style="text-align: center">
          <ButtonDefault />
        </div>
        <div class="MainManu-top-item" style="text-align: right">
          <button class="MainManu__button-close" @click="$emit('toggleMenu')">
            <IconClose width="20" height="20" />
          </button>
        </div>
      </div>

      <ul class="MainManu__list">
        <li class="MainManu__list-item">
          <RouterLink class="MainManu__list-item-text" to="about"
            >о фонде</RouterLink
          >
        </li>
        <li class="MainManu__list-item">
          <RouterLink class="MainManu__list-item-text" to="projects"
            >проекты</RouterLink
          >
        </li>
        <li class="MainManu__list-item">
          <RouterLink class="MainManu__list-item-text" to="events"
            >мероприятия</RouterLink
          >
        </li>
        <li class="MainManu__list-item">
          <RouterLink class="MainManu__list-item-text" to="partners"
            >партнеры</RouterLink
          >
        </li>
        <li class="MainManu__list-item">
          <RouterLink class="MainManu__list-item-text" to="contacts"
            >контакты</RouterLink
          >
        </li>
      </ul>

      <div class="MainManu-bottom">
        <div class="Footer__middle-right-socials">
          <a
            target="_blank"
            href="vk.ru"
            class="Footer__middle-right-socials-item Footer__middle-right-socials-item-vk"
          >
            <IconVK />
          </a>
          <a
            target="_blank"
            href="vk.ru"
            class="Footer__middle-right-socials-item Footer__middle-right-socials-item-whatsapp"
          >
            <IconWhatsapp />
          </a>
        </div>
        <a class="MainManu-bottom__tel" href="tel:+78009589878" target="_blank"
          >8 800 958 98 78</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './MainManu.scss';
import LogoComponent from '@/ui/LogoComponent/LogoComponent.vue';
import ButtonDefault from '@/ui/ButtonDefault/ButtonDefault.vue';
import IconClose from '@/assets/svg/icon-close.svg';
import IconVK from '@/assets/svg/icon-vk.svg';
import IconWhatsapp from '@/assets/svg/icon-whatsapp.svg';
</script>
