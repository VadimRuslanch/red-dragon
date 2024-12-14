<template>
  <div class="AboutPage">
    <div class="AboutPage__mission">
      <div class="page">
        <section class="AboutPage__mission-info">
          <TitlePage title="миссия" />
          <p class="AboutPage__description">
            поддержка культурных инициатив, повышение культурной осведомленности
            и создание условий для участия молодежи в культурных событиях,
            укрепляя связь с традициями и искусством.
          </p>
        </section>
        <img class="AboutPage__mission-image" src="/images/second.jpg" />
      </div>
    </div>
    <div class="page">
      <section class="AboutPage__target">
        <TitlePage :title="'цель'" />
        <p class="AboutPage__description">
          Фонд реализует программы социальной политики, поддерживающие
          талантливую молодежь и предоставляющие возможности для самореализации,
          формируя общество, где культура способствует гармоничному развитию.
        </p>
      </section>
      <TitleInnerBlock title="Задачи фонда" />
      <div class="AboutPage__target-list">
        <template v-for="card in cardArray" :key="card.id">
          <AboutPageCard
            v-if="!card.position || isWideScreen"
            :title="card.title"
            :description="card.description"
            :background="card.background"
            :position="card.position"
          />
        </template>
      </div>
      <AboutPageManagementBlock />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import './AboutPage.scss';
import TitlePage from '@/components/TitlePage/TitlePage.vue';
import AboutPageCard from '@/views/AboutPage/components/AboutPageCard/AboutPageCard.vue';
import AboutPageManagementBlock from '@/views/AboutPage/components/AboutPageManagementBlock/AboutPageManagementBlock.vue';
import TitleInnerBlock from '@/components/TitleInnerBlock/TitleInnerBlock.vue';

const cardArray = [
  {
    id: 1,
    title: 'Развитие и модернизация инфраструктуры',
    description: 'Выявление лучших практик среди российских девелоперов',
    background: 'rgba(255, 255, 255, 0.04)',
  },
  {
    id: 2,
    title: 'Стимулирование экономического роста',
    description:
      'Создание новых рабочих мест в строительстве и эксплуатации объектов',
    background: 'rgba(239, 71, 81, 1)',
  },
  {
    position: {
      top: '56%',
      right: '0',
    },
  },
  {
    id: 31,
    title: 'Поддержка устойчивого развития',
    description:
      'Внедрение экологически чистых технологий в инфраструктурные проекты',
    background: 'rgba(255, 255, 255, 0.04)',
  },
  {
    position: {
      top: '-26%',
      right: '33%',
    },
  },
  {
    id: 4,
    title: 'Улучшение качества жизни населения',
    description: 'Повышение качества развлекательных и образовательных услуг',
    background: 'rgba(255, 255, 255, 0.04)',
  },
  {
    id: 5,
    title: 'Развитие массового спорта',
    description:
      'Популяризация физической культуры и спорта среди всех возрастных групп',
    background: 'rgba(255, 255, 255, 0.04)',
  },
  {
    id: 6,
    title: 'Поддержка творческих деятелей',
    description:
      'Создание условий для развития отечественных культурных деятелей',
    background: 'rgba(239, 71, 81, 1)',
  },
  {
    id: 7,
    title: 'Развитие деловых коммуникаций',
    description: 'Стимулирование новых перспективных интеграций B2B',
    background: 'rgba(255, 255, 255, 0.04)',
  },
  {
    position: {
      top: '-23%',
      right: '-38%',
    },
  },
  {
    id: 8,
    title: 'Проведение спортивных мероприятий',
    description: 'Спортивные мероприятия, включая соревнования в онлайн среде',
    background: 'rgba(239, 71, 81, 1)',
  },
  {
    id: 9,
    title: 'Поддержка молодежных инициатив',
    description:
      'Создание условий для реализации культурных проектов молодых людей',
    background: 'rgba(255, 255, 255, 0.04)',
  },
  {
    id: 10,
    title: 'Развитие навыков в сфере ИТ',
    description: 'Организация образовательных программ в сфере ИИ и ИТ',
    background: 'rgba(239, 71, 81, 1)',
  },
  {
    id: 11,
    title: 'Создание возможностей для самореализации',
    description:
      'Организация конкурсов, фестивалей и выставок для молодых талантов',
    background: 'rgba(255, 255, 255, 0.04)',
  },
  {
    position: {
      top: '46%',
      right: '33%',
    },
  },
  {
    id: 12,
    title: 'Поддержка здорового образа жизни',
    description: 'Пропаганда ЗОЖ и проведение спортивных мероприятий',
    background: 'rgba(255, 255, 255, 0.04)',
  },
];

const isWideScreen = ref(false);

function updateScreenWidth() {
  isWideScreen.value = window.matchMedia('(min-width: 1281px)').matches;
}

onMounted(() => {
  updateScreenWidth();
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>
