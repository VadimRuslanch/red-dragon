<template>
  <div>
    <TitleInnerBlock title="Нас поддерживают" />
    <div class="PartnersPagePartnersList">
      <PartnersListCard
        v-for="item in listArray"
        :key="item.id"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import './PartnersPagePartnersList.scss';
import PartnersListCard from '@/views/PartnersPage/components/PartnersPagePartnersList/PartnersListCard/PartnersListCard.vue';
import TitleInnerBlock from '@/components/TitleInnerBlock/TitleInnerBlock.vue';

const listArray = [
  {
    id: 1,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 12,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 13,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 14,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 15,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 16,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 17,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 18,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 19,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 10,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 111,
    image: '/images/Partners/logoPartner.png',
  },
  {
    id: 1222,
    image: '/images/Partners/logoPartner.png',
  },
];
</script>
