<template>
  <div class="HomePage">
    <PreviewBlock />
    <MissionBlock />
    <ProjectsList />
    <SupportFond />
  </div>
</template>

<script setup lang="ts">
import './HomePage.scss';
import PreviewBlock from '@/views/HomePage/components/PreviewBlock/PreviewBlock.vue';
import MissionBlock from '@/views/HomePage/components/MissionBlock/MissionBlock.vue';
import ProjectsList from '@/views/HomePage/components/ProjectsList/ProjectsList.vue';
import SupportFond from '@/components/SupportFond/SupportFond.vue';
</script>
