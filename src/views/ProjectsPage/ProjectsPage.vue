<template>
  <div class="ProjectsPage">
    <div class="page">
      <TitlePage title="проекты" />
      <div class="ProjectsPage__list">
        <ProjectsPageCard
          v-for="(item, index) in listArray"
          :key="item.id"
          :title="item.title"
          :image="item.image"
          :description="item.description"
          @toggle="setIndex(index)"
        />
      </div>
    </div>
    <Teleport to="body">
      <ModalOverlay v-if="isActiveModal">
        <ProjectModal
          v-scroll-lock="isActiveModal"
          v-if="currentProject"
          :data="currentProject"
          @toggleModal="toggleModal"
        />
      </ModalOverlay>
    </Teleport>
    <SupportFond />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import './ProjectsPage.scss';
import TitlePage from '@/components/TitlePage/TitlePage.vue';
import ProjectsPageCard from '@/views/ProjectsPage/components/ProjectsPageCard.vue';
import SupportFond from '@/components/SupportFond/SupportFond.vue';
import ModalOverlay from '@/components/ModalOverlay/ModalOverlay.vue';
import ProjectModal from '@/components/ProjectModal/ProjectModal.vue';

const listArray = [
  {
    id: 1,
    title: 'ИСКУССТВО',
    description:
      'Участие или создание событий, посвященных современному изобразительному искусству',
    titleList:
      'Участие или создание событий, посвященных современному изобразительному искусству:',
    list: [
      {
        id: 1,
        title: 'Арт-объекты',
      },
      {
        id: 1,
        title: 'Выставки современного художества;',
      },
      {
        id: 1,
        title: 'Творческие инсталляции.',
      },
    ],
    about:
      'Формирование внутреннего сообщества художников и деятелей искусства.',
    image: '/images/Projects/projects-1.jpg',
  },
  {
    id: 12,
    title: 'МОДА',
    description:
      'Проведение или участие в проведении модных показов в поддержку молодых и развивающихся отечественных брендов одежды и дизайннеров.',
    image: '/images/Projects/projects-2.jpg',
    titleList:
      'Участие или создание событий, посвященных современному изобразительному искусству:',
    list: [
      {
        id: 1,
        title: 'Арт-объекты',
      },
      {
        id: 1,
        title: 'Выставки современного художества;',
      },
      {
        id: 1,
        title: 'Творческие инсталляции.',
      },
    ],
    about:
      'Формирование внутреннего сообщества художников и деятелей искусства.',
  },
  {
    id: 13,
    title: 'МУЗЫКА',
    description:
      'Организация крупных событий и фестивалей электронной музыки, направленных на популяризацию и развитие отечественной электронной сцены и артистов.',
    image: '/images/Projects/projects-3.jpg',
    titleList:
      'Участие или создание событий, посвященных современному изобразительному искусству:',
    list: [
      {
        id: 1,
        title: 'Арт-объекты',
      },
      {
        id: 1,
        title: 'Выставки современного художества;',
      },
      {
        id: 1,
        title: 'Творческие инсталляции.',
      },
    ],
    about:
      'Формирование внутреннего сообщества художников и деятелей искусства.',
  },
  {
    id: 14,
    title: 'КРАСОТА',
    description:
      'Серия мероприятий будет реализована при поддержке Комитета по Противодействию Коррупции, что будет подразумевать собой полное отсутствие возможности проплачивать призовые номинации победительниц, что является крайне насущным вопросом в этой сфере',
    image: '/images/Projects/projects-4.jpg',
    titleList:
      'Участие или создание событий, посвященных современному изобразительному искусству:',
    list: [
      {
        id: 1,
        title: 'Арт-объекты',
      },
      {
        id: 1,
        title: 'Выставки современного художества;',
      },
      {
        id: 1,
        title: 'Творческие инсталляции.',
      },
    ],
    about:
      'Формирование внутреннего сообщества художников и деятелей искусства.',
  },
  {
    id: 15,
    title: 'ТЕХНОЛОГИИ',
    description: '???',
    image: '/images/Projects/projects-5.jpg',
    titleList:
      'Участие или создание событий, посвященных современному изобразительному искусству:',
    list: [
      {
        id: 1,
        title: 'Арт-объекты',
      },
      {
        id: 1,
        title: 'Выставки современного художества;',
      },
      {
        id: 1,
        title: 'Творческие инсталляции.',
      },
    ],
    about:
      'Формирование внутреннего сообщества художников и деятелей искусства.',
  },
  {
    id: 16,
    title: 'СПОРТ',
    description:
      'Организация и проведение собственных турнирных соревнований по бильярду среди любителей Москвы, Московской области и других регионов России.',
    image: '/images/Projects/projects-6.jpg',
    titleList:
      'Участие или создание событий, посвященных современному изобразительному искусству:',
    list: [
      {
        id: 1,
        title: 'Арт-объекты',
      },
      {
        id: 1,
        title: 'Выставки современного художества;',
      },
      {
        id: 1,
        title: 'Творческие инсталляции.',
      },
    ],
    about:
      'Формирование внутреннего сообщества художников и деятелей искусства.',
  },
];

const isActiveModal = ref<boolean>(false);
const currentIndex = ref<number>(0);

const toggleModal = () => {
  isActiveModal.value = !isActiveModal.value;
};

const setIndex = (index: number) => {
  currentIndex.value = index;
  toggleModal();
};

const currentProject = computed(() => {
  return listArray[currentIndex.value];
});
</script>
