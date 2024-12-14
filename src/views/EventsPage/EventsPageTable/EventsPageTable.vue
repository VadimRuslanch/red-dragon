<template>
  <div class="EventsPageTable">
    <table class="EventsPageTable__table">
      <thead class="EventsPageTable__head">
        <tr>
          <th class="EventsPageTable__title">ПРОЕКТ</th>
          <th class="EventsPageTable__title">ФОРМАТ</th>
          <th class="EventsPageTable__title">НАЗВАНИЕ МЕРОПРИЯТИЯ</th>
          <th class="EventsPageTable__title">ДАТА</th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import './EventsPageTable.scss';
</script>
