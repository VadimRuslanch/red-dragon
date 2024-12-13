<template>
  <div class="PartnersPage">
    <div class="PartnersPage-container">
      <div class="page">
        <TitlePage title="партнерам" />
        <div class="PartnersPage-wr">
          <PartnersPagePreviewBlock />
          <PartnersPagePartnersList />
          <PartnersPagePartnersPossibilities />
          <PartnersPagePartnersSupport />
          <PartnersPagePartnersAccompaniment />
        </div>
      </div>
    </div>

    <SupportFond />
  </div>
</template>

<script setup lang="ts">
import './PartnersPage.scss';
import TitlePage from '@/components/TitlePage/TitlePage.vue';
import PartnersPagePreviewBlock from '@/views/PartnersPage/components/PartnersPagePreviewBlock/PartnersPagePreviewBlock.vue';
import PartnersPagePartnersList from '@/views/PartnersPage/components/PartnersPagePartnersList/PartnersPagePartnersList.vue';
import PartnersPagePartnersPossibilities from '@/views/PartnersPage/components/PartnersPagePartnersPossibilities/PartnersPagePartnersPossibilities.vue';
import PartnersPagePartnersSupport from '@/views/PartnersPage/components/PartnersPagePartnersSupport/PartnersPagePartnersSupport.vue';
import PartnersPagePartnersAccompaniment from '@/views/PartnersPage/components/PartnersPagePartnersAccompaniment/PartnersPagePartnersAccompaniment.vue';
import SupportFond from '@/components/SupportFond/SupportFond.vue';
</script>
