<template>
  <div class="PartnersPagePartnersAccompaniment">
    <TitleInnerBlock title="Этапы сопровождения" />
    <div class="PartnersPagePartnersAccompaniment__list">
      <PartnersAccompanimentCard
        v-for="item in listArray"
        :class="{ PartnersAccompanimentCard__empty: item.empty }"
        :title="item.title"
        :number="item.number"
      />
    </div>
    <ButtonMainCallBack @toggleModal="toggleModal" title="Стать партнером" />
    <Teleport to="body">
      <Transition name="ModalOverlay">
        <ModalOverlay v-if="isActive">
          <CallBackComponent
            v-scroll-lock="isActive"
            @toggleModal="toggleModal"
          />
        </ModalOverlay>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import './PartnersPagePartnersAccompaniment.scss';
import TitleInnerBlock from '@/components/TitleInnerBlock/TitleInnerBlock.vue';
import PartnersAccompanimentCard from '@/views/PartnersPage/components/PartnersPagePartnersAccompaniment/PartnersAccompanimentCard/PartnersAccompanimentCard.vue';
import ButtonMainCallBack from '@/ui/ButtonMainCallBack/ButtonMainCallBack.vue';
import ModalOverlay from '@/components/ModalOverlay/ModalOverlay.vue';
import CallBackComponent from '@/components/CallBackComponent/CallBackComponent.vue';
import { ref } from 'vue';

const isActive = ref<boolean>(false);
const toggleModal = () => {
  isActive.value = !isActive.value;
  console.log(isActive.value);
};
const listArray = [
  {
    id: 1,
    title: 'ЗАПОЛНЕНИЕ АНКЕТЫ',
    number: '01',
  },
  {
    empty: true,
    id: 12,
    title: '',
    number: '',
  },
  {
    empty: true,
    id: 12,
    title: '',
    number: '',
  },
  {
    id: 123,
    title: 'ЛИЧНОЕ ИНТЕРВЬЮ С ОРГАНИЗАТОРОМ ПО  СОЗДАНИЮ ПИАР КОМПАНИИ',
    number: '02',
  },

  {
    id: 142,
    title: 'ВНЕСЕНИЕ НА САЙТ   (ПО ЖЕЛАНИЮ)',
    number: '03',
  },
  {
    empty: true,
    id: 12,
    title: '',
    number: '',
  },
  {
    empty: true,
    id: 12,
    title: '',
    number: '',
  },
  {
    id: 152,
    title: 'СОЗДАНИЕ  ЛИЧНОГО ЧАТА',
    number: '03',
  },
  {
    id: 125,
    title: 'ЗНАКОМСТВО С  ПОТЕНЦИАЛЬНЫМИ  ПАРТНЕРАМИ',
    number: '04',
  },
  {
    empty: true,
    id: 12,
    title: '',
    number: '',
  },
  {
    empty: true,
    id: 12,
    title: '',
    number: '',
  },
  {
    id: 125,
    title: 'ЗАБЛАГОВРЕМЕННОЕ  ОПОВЕЩЕНИЕ О ВСЕХ  МЕРОПРИЯТИЯХ',
    number: '04',
  },
  {
    id: 152,
    title: 'ПУБЛИКАЦИИ В  СОЦИАЛЬНЫХ  СЕТЯХ И СМИ',
    number: '05',
  },
  {
    empty: true,
    id: 12,
    title: '',
    number: '',
  },
  {
    empty: true,
    id: 12,
    title: '',
    number: '',
  },
  {
    id: 152,
    title: 'ВИП ЗАЛ НА  МЕРОПРИЯТИИ ДЛЯ  СПОНСОРОВ',
    number: '06',
  },
];
</script>
