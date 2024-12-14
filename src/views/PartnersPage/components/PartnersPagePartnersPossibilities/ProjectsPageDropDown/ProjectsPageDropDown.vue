<template>
  <div class="ProjectsPageDropDown">
    <details class="ProjectsPageDropDown__details" name="ProjectsPageDropDown">
      <summary class="ProjectsPageDropDown__title">
        {{ title }} <IconPlus class="ProjectsPageDropDown__title_icon" />
      </summary>

      <div class="ProjectsPageDropDown__inner">
        <span class="ProjectsPageDropDown__inner-wr">
          <p class="ProjectsPageDropDown__inner-text">{{ description }}</p>
        </span>
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
import './ProjectsPageDropDown.scss';
import IconPlus from '@/assets/svg/plus.svg';

const { title, description } = defineProps<{
  title: string;
  description: string;
}>();
</script>
