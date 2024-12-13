<template>
  <div class="PartnersPagePartnersSupport">
    <TitleInnerBlock title="Поддержка от спонсора" />
    <h4 class="PartnersPagePartnersSupport__title">
      Поддержка фонда спонсорами и партнерами может производиться доступными
      ресурсами в следующих вариациях:
    </h4>
    <ProjectsPageDropDown
      v-for="item in listArray"
      :key="item.id"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<script setup lang="ts">
import './PartnersPagePartnersSupport.scss';
import TitleInnerBlock from '@/components/TitleInnerBlock/TitleInnerBlock.vue';
import ProjectsPageDropDown from '@/views/PartnersPage/components/PartnersPagePartnersPossibilities/ProjectsPageDropDown/ProjectsPageDropDown.vue';
const listArray = [
  {
    id: 1,
    title: 'УЧАСИЕ В ПРОЕКТАХ',
    description:
      'Вложение спонсорских средств в определенные проекты фонда, имеющие наибольший отклик  или вызывающие повышенный интерес. При выборе данной формы участия, менеджер фонда регулярно предоставляет  спонсору актуальную информацию и новости о ходе развития выбранных проектов.',
  },
  {
    id: 12,
    title: 'ОБЩИЙ ВКЛАД В РАЗВИИЕ',
    description:
      'Вложение спонсорских средств в определенные проекты фонда, имеющие наибольший отклик  или вызывающие повышенный интерес. При выборе данной формы участия, менеджер фонда регулярно предоставляет  спонсору актуальную информацию и новости о ходе развития выбранных проектов.',
  },
  {
    id: 13,
    title: 'РЕСУРСНОЕ СНАБЖЕНИЕ',
    description:
      'Вложение спонсорских средств в определенные проекты фонда, имеющие наибольший отклик  или вызывающие повышенный интерес. При выборе данной формы участия, менеджер фонда регулярно предоставляет  спонсору актуальную информацию и новости о ходе развития выбранных проектов.',
  },
];
</script>
