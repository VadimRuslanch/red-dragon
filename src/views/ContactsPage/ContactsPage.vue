<template>
  <div class="ContactsPage page">
    <TitlePage class="ContactsPage__title" title="контакты" />
    <div class="ContactsPage__inner">
      <div class="ContactsPage__inner-wr">
        <h2 class="ContactsPage__inner-title">Связаться с нами</h2>
        <a
          class="ContactsPage__inner-link"
          target="_blank"
          href="https://yandex.ru/maps/-/CHE7YWz8"
        >
          Россия, Москва, ул. Название улицы, офис 12
        </a>
        <a
          class="ContactsPage__inner-link"
          target="_blank"
          href="mailto:Pochta@mail.ru"
        >
          Pochta@mail.ru
        </a>
        <a
          class="ContactsPage__inner-link"
          target="_blank"
          href="tel:+7 (999) 999-99-99"
        >
          +7 (999) 999-99-99
        </a>
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
            href="https://t.me/fond_red_dragon"
            class="Footer__middle-right-socials-item Footer__middle-right-socials-item-whatsapp"
          >
            <IconWhatsapp />
          </a>
        </div>
      </div>
      <div class="ContactsPage__inner-wr">
        <h2 class="ContactsPage__inner-title">Реквизиты</h2>
        <div class="ContactsPage__inner-item">
          <span class="ContactsPage__inner-type"
            >Наименование организации:</span
          >
          <p class="ContactsPage__inner-name">Название</p>
        </div>
        <div class="ContactsPage__inner-item">
          <span class="ContactsPage__inner-type">Юридический адрес:</span>
          <p class="ContactsPage__inner-name">
            Россия, Москва, ул. Название улицы, офис 12
          </p>
        </div>
        <div class="ContactsPage__inner-item">
          <span class="ContactsPage__inner-type">ОГРН:</span>
          <p class="ContactsPage__inner-name">321321321321</p>
        </div>
        <div class="ContactsPage__inner-item">
          <span class="ContactsPage__inner-type">ИНН:</span>
          <p class="ContactsPage__inner-name">3213213213213</p>
        </div>
        <div class="ContactsPage__inner-item">
          <span class="ContactsPage__inner-type">ОКПО:</span>
          <p class="ContactsPage__inner-name">3213213232</p>
        </div>
        <div class="ContactsPage__inner-item">
          <span class="ContactsPage__inner-type">Расчетный счет:</span>
          <p class="ContactsPage__inner-name">321321321321321</p>
        </div>
        <div class="ContactsPage__inner-item">
          <span class="ContactsPage__inner-type">Корреспондентский счет:</span>
          <p class="ContactsPage__inner-name">321321312321321321321</p>
        </div>
        <div class="ContactsPage__inner-item">
          <span class="ContactsPage__inner-type">БИК банка:</span>
          <p class="ContactsPage__inner-name">321321321321321</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './ContactsPage.scss';
import TitlePage from '@/components/TitlePage/TitlePage.vue';
import IconWhatsapp from '@/assets/svg/icon-whatsapp.svg';
import IconVK from '@/assets/svg/icon-vk.svg';
</script>
