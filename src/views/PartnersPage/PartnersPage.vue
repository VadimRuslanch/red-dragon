<template>
  <div class="PartnersPage page">
    <TitlePage title="партнерам" />
    <div class="PartnersPage-wr">
      <PartnersPagePreviewBlock />
      <PartnersPagePartnersList />
      <PartnersPagePartnersPossibilities />
    </div>
  </div>
</template>

<script setup lang="ts">
import './PartnersPage.scss';
import TitlePage from '@/components/TitlePage/TitlePage.vue';
import PartnersPagePreviewBlock from '@/views/PartnersPage/components/PartnersPagePreviewBlock/PartnersPagePreviewBlock.vue';
import PartnersPagePartnersList from '@/views/PartnersPage/components/PartnersPagePartnersList/PartnersPagePartnersList.vue';
import PartnersPagePartnersPossibilities from '@/views/PartnersPage/components/PartnersPagePartnersPossibilities/PartnersPagePartnersPossibilities.vue';
</script>
