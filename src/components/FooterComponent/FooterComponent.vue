<template>
  <footer class="Footer">
    <div class="page">

      <div class="Footer__logo">

        <LogoComponent/>

      </div>

      <div class="Footer__middle">

        <div class="Footer__middle-left">
          <p class="Footer__middle-left-title">Фонд развития инфраструктурных проектов, спорта и молодёжных движений</p>
          <span class="Footer__middle-left-description">Наши инновационные решения улучшают качество жизни и обеспечивают долгосрочную пользу для общества.</span>
        </div>

        <div class="Footer__middle-right">
          <a target="_blank" class="Footer__middle-right-item" href="tel:+78009589878">8 800 958 98 78</a>
          <a target="_blank" class="Footer__middle-right-item"
             href="mailto:reddragonfond@mail.ru">reddragonfond@mail.ru</a>
          <a target="_blank" class="Footer__middle-right-item" href="https://yandex.ru/maps/-/CHEIFA~p">Россия, г.
            Москва, ул.
            Горбунова, д.2с3, офис 803.1</a>
          <div class="Footer__middle-right-socials">
            <a target="_blank" href="vk.ru"
               class="Footer__middle-right-socials-item Footer__middle-right-socials-item-vk">
              <IconVK/>
            </a>
            <a target="_blank" href="vk.ru"
               class="Footer__middle-right-socials-item Footer__middle-right-socials-item-whatsapp">
              <IconWhatsapp/>
            </a>

          </div>
        </div>

      </div>

      <div class="Footer__bottom">

        <div class="Footer__bottom-left">
          <span class="Footer__bottom-left-copy">&#169; 2024 Фонд Красный Дракон</span>
          <RouterLink to="privacy-policy" class="Footer__bottom-left-privacy">Политика конфиденциальности</RouterLink>
        </div>

        <IconVendor/>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import './FooterComponent.scss';
import LogoComponent from "@/ui/LogoComponent/LogoComponent.vue";
import IconVK from '@/assets/svg/icon-vk.svg'
import IconWhatsapp from '@/assets/svg/icon-whatsapp.svg'
import IconVendor from '@/assets/svg/Victor.svg'
</script>
