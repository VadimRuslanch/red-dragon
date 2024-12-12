<template>
  <div class="PartnersPagePartnersList">
    <PartnersListCard
      v-for="item in listArray"
      :key="item.id"
      :image="item.image"
    />
  </div>
</template>

<script setup lang="ts">
import './PartnersPagePartnersList.scss';
import PartnersListCard from '@/views/PartnersPage/components/PartnersPagePartnersList/PartnersListCard/PartnersListCard.vue';

const listArray = [
  {
    id: 1,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 12,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 13,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 14,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 15,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 16,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 17,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 18,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 19,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 10,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 111,
    image: 'src/assets/images/logoPartner.png',
  },
  {
    id: 1222,
    image: 'src/assets/images/logoPartner.png',
  },
];
</script>
