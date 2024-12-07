<template>
  <nav>
    <ul class="NavigationMain">
      <li>
        <NavLink :title="'О фонде'" :link="'about'" />
      </li>
      <li>
        <NavLink :title="'Проекты'" :link="'projects'" />
      </li>
      <li>
        <NavLink :title="'Новости'" :link="'news'" />
      </li>
      <li>
        <NavLink :title="'Партнеры'" :link="'partners'" />
      </li>
      <li>
        <NavLink :title="'Контакты'" :link="'contacts'" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import './NavigationMain.scss';
import NavLink from '@/components/NavigationMain/components/NavLink/NavLink.vue';
</script>
