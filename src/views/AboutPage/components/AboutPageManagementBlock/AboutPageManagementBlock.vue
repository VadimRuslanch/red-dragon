<template>
  <div class="AboutPageManagementBlock">
    <div class="page">
      <span class="AboutPageManagementBlock__description"
        >Руководство фонда
      </span>

      <div class="AboutPageManagementBlock__info"   >
		<Transition>
		  <img class="AboutPageManagementBlock__image" :src="image" />
		</Transition>


        <ul class="AboutPageManagementBlock__list">
          <AboutPageManagementBlockItem
            @mouseenter="setSlide(index)"
            v-for="(item, index) in listArray"
            :title="item.title"
            :description="item.description"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './AboutPageManagementBlock.scss';
import { computed } from 'vue';
import AboutPageManagementBlockItem from '@/views/AboutPage/components/AboutPageManagementBlock/AboutPageManagementBlockItem/AboutPageManagementBlockItem.vue';
import { ref } from '@vue/runtime-dom';
const indexCurrentSlide = ref<number>(0);
interface ListArray {
  id: number;
  title: string;
  description: string;
  image: string;
}

const listArray: ListArray[] = [
  {
    id: 1,
    title: 'Александров Андрей',
    description: 'Руководитель фонда',
    image: '/images/manager.jpg',
  },
  {
    id: 2,
    title: 'Плотникова марина',
    description: 'Руководитель фонда',
    image: '/images/first.jpg',
  },
  {
    id: 3,
    title: 'Черных анастасия',
    description: 'Руководитель фонда',
    image: '/images/manager.jpg',
  },
  {
    id: 4,
    title: 'Воробьев никита',
    description: 'Руководитель фонда',
    image: '/images/manager.jpg',
  },
  {
    id: 5,
    title: 'Дружинникова наталья',
    description: 'Руководитель фонда',
    image: '/images/manager.jpg',
  },
  {
    id: 6,
    title: 'Красников алексей',
    description: 'Руководитель фонда',
    image: '/images/manager.jpg',
  },
];

const setSlide = (data: number) => {
  indexCurrentSlide.value = data;
};

const image = computed<string>(() => {
  return listArray[indexCurrentSlide.value]?.image || '';
});
</script>
