<template>
  <div class="EventsPage">
    <div class="EventsPage-wr page">
      <TitlePage class="EventsPage__title" title="мероприятия" />
      <EventsPageTable>
        <EventsPageTableItem
          v-for="item in tableArray"
          :project="item.project"
          :date="item.date"
          :name="item.name"
          :form="item.form"
        />
      </EventsPageTable>
      <EventsPageTabs />
    </div>
  </div>
</template>

<script setup lang="ts">
import './EventsPage.scss';
import TitlePage from '@/components/TitlePage/TitlePage.vue';
import EventsPageTable from '@/views/EventsPage/EventsPageTable/EventsPageTable.vue';
import EventsPageTableItem from '@/views/EventsPage/EventsPageTable/EventsPageTableItem/EventsPageTableItem.vue';
import EventsPageTabs from '@/views/EventsPage/EventsPageTabs/EventsPageTabs.vue';

const tableArray = [
  {
    id: 1,
    project: 'Искусство',
    form: 'Выставка (мал.)',
    name: 'Скоро',
    date: 'Январь',
  },
  {
    id: 2,
    project: 'Мода',
    form: 'Модный показ (сред.)',
    name: 'Скоро',
    date: 'Февраль',
  },
  {
    id: 3,
    project: 'Спорт',
    form: 'Бильярдный турнир',
    name: 'Скоро',
    date: 'Март',
  },
  {
    id: 4,
    project: 'Музыка',
    form: 'Фестиваль (сред.)',
    name: 'OPERA',
    date: 'Апрель',
  },
  {
    id: 5,
    project: 'Красота',
    form: 'Конкурс красоты (сред.)',
    name: 'Скоро',
    date: 'Май',
  },
  {
    id: 6,
    project: 'Мода',
    form: 'Модный показ (бол.)',
    name: 'Скоро',
    date: 'Июнь',
  },
  {
    id: 7,
    project: 'Технологии',
    form: 'Форум',
    name: 'Скоро',
    date: 'Июль',
  },
  {
    id: 8,
    project: 'Искусство',
    form: 'Выставка (сред.)',
    name: 'Скоро',
    date: 'Август',
  },
  {
    id: 9,
    project: 'Музыка',
    form: 'Фестиваль (бол.)',
    name: 'OPERA',
    date: 'Сентябрь',
  },
  {
    id: 10,
    project: 'Искусство',
    form: 'Выставка (бол.)',
    name: 'Скоро',
    date: 'Октябрь',
  },
  {
    id: 11,
    project: 'Музыка',
    form: 'Фестиваль (сред.)',
    name: 'OPERA',
    date: 'Ноябрь',
  },
  {
    id: 12,
    project: 'Технологии',
    form: 'Форум',
    name: 'Скоро',
    date: 'Декабрь',
  },
];
</script>
