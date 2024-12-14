<template>
  <div class="EventsPageTabItem">
    <div class="EventsPageTabItem__info">
      <span class="EventsPageTabItem__title">{{ title }}</span>
      <span class="EventsPageTabItem__description">{{ description }}</span>
    </div>
    <div class="EventsPageTabItem__right">
      <span class="EventsPageTabItem__date">{{ date }}</span>
      <span class="EventsPageTabItem__time">{{ time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import './EventsPageTabItem.scss';

const { title, description, date, time } = defineProps<{
  title: string;
  description: string;
  date: string;
  time: string;
}>();
</script>
