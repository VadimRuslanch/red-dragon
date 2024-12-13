<template>
  <div class="DropDown">
    <details class="DropDown__details" name="DropDown">
      <summary class="DropDown__title">
        {{ title }} <IconPlus class="DropDown__title_icon" />
      </summary>

      <div class="DropDown__inner">
        <span class="DropDown__inner-wr">
          <p class="DropDown__inner-text">{{ description }}</p>
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
