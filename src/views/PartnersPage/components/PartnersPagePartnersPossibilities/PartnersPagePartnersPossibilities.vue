<template>
  <div class="PartnersPagePartnersPossibilities">
    <TitleInnerBlock title="Возможности для спонсора" />
    <span class="PartnersPagePartnersPossibilities__title"></span>
    <div class="PartnersPagePartnersPossibilities__content">
      <ProjectsPageDropDown v-for="item in listArray" :title="item.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import './PartnersPagePartnersPossibilities.scss';
import ProjectsPageDropDown from '@/views/PartnersPage/components/PartnersPagePartnersPossibilities/ProjectsPageDropDown/ProjectsPageDropDown.vue';
import TitleInnerBlock from '@/components/TitleInnerBlock/TitleInnerBlock.vue';

const listArray = [
  {
    id: 1,
    title: 'ЮРИДИЧЕСКОЕ И БУХГАЛТЕРСКОЕ  СОПРОВОЖДЕНИЕ',
    description:
      'Оказание юридической поддержки и  бухгалтерского учета любой сложности на всех  этапах партнерства и совместной деятельности',
  },
  {
    id: 12,
    title: 'РЕКЛАМНАЯ ПОДДЕРЖКА',
    description:
      'Оказание юридической поддержки и  бухгалтерского учета любой сложности на всех  этапах партнерства и совместной деятельности',
  },
  {
    id: 13,
    title: 'ПАРТНЕРСКАЯ ПРОГРАММА',
    description:
      'Оказание юридической поддержки и  бухгалтерского учета любой сложности на всех  этапах партнерства и совместной деятельности',
  },
  {
    id: 14,
    title: 'ИНДИВИДУАЛЬНОЕ СОПРОВОЖДЕНИЕ',
    description:
      'Оказание юридической поддержки и  бухгалтерского учета любой сложности на всех  этапах партнерства и совместной деятельности',
  },
  {
    id: 15,
    title: 'НАЛОГОВАЯ ОПТИМИЗАЦИЯ',
    description:
      'Оказание юридической поддержки и  бухгалтерского учета любой сложности на всех  этапах партнерства и совместной деятельности',
  },
  {
    id: 16,
    title: 'Красников алексей',
    description:
      'Оказание юридической поддержки и  бухгалтерского учета любой сложности на всех  этапах партнерства и совместной деятельности',
  },
];
</script>
