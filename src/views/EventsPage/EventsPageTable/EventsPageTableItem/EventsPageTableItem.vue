<template>
  <tr class="EventsPageTableItem">
    <td class="EventsPageTableItem__text">{{ project }}</td>
    <td>{{ form }}</td>
    <td>{{ name }}</td>
    <td>{{ date }}</td>
  </tr>
</template>

<script setup lang="ts">
import './EventsPageTableItem.scss';

const { project, form, name, date } = defineProps<{
  project: string;
  form: string;
  name: string;
  date: string;
}>();
</script>
