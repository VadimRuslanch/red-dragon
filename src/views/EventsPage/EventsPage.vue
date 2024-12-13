<template>
  <div class="EventsPage">
    <TitlePage title="мероприятия" />
    <EventsPageTable>
      <EventsPageTableItem
        v-for="item in tableArray"
        :project="item.project"
        :date="item.date"
        :name="item.name"
        :form="item.form"
      />
    </EventsPageTable>
  </div>
</template>

<script setup lang="ts">
import './EventsPage.scss';
import TitlePage from '@/components/TitlePage/TitlePage.vue';
import EventsPageTable from '@/views/EventsPage/EventsPageTable/EventsPageTable.vue';
import EventsPageTableItem from '@/views/EventsPage/EventsPageTable/EventsPageTableItem/EventsPageTableItem.vue';

const tableArray = [
  {
    id: 1,
    project: 'Искусство',
    form: 'Выставка (мал.)',
    name: 'Скоро',
    date: 'Январь',
  },
];
</script>
