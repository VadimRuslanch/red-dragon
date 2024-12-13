<template>
  <div class="CallBackComponent">
    <img class="CallBackComponent__image" src="/images/second.jpg" />

    <button
      @click="$emit('toggleModal')"
      class="CallBackComponent__button-close"
    >
      <IconClose width="14" height="14" />
    </button>
    <div class="CallBackComponent__inner">
      <span class="CallBackComponent__title">Связаться с нами</span>
      <span class="CallBackComponent__description">
        Напишите нам и мы ответим на все ваши вопросы максимально быстро
      </span>
      <form class="CallBackComponent__form" @submit.prevent="submit">
        <Dropdown :options="listArray" v-model="selectedProject" />
        <label class="CallBackComponent__input-label">
          <input class="CallBackComponent__input" placeholder="ФИО" />
        </label>
        <label class="CallBackComponent__input-label">
          <input class="CallBackComponent__input" placeholder="E-mail" />
        </label>
        <label class="CallBackComponent__input-label">
          <input
            class="CallBackComponent__input"
            placeholder="+7 (999) 999-99-99"
          />
        </label>
        <label class="CallBackComponent__input-label-check">
          <input
            class="CallBackComponent__input-check"
            type="checkbox"
            checked
          />
          <span class="CallBackComponent__input-label-check-text"
            >Даю согласие на обработку персональных данных.</span
          >
        </label>

        <button type="submit" class="CallBackComponent__button-submit">
          Отправить заявку
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import './CallBackComponent.scss';
import IconClose from '@/assets/svg/icon-close.svg';
import Dropdown from '@/ui/DropDown/DropDown.vue';
import { ref } from 'vue';
import { onUpdated } from '@vue/runtime-dom';

const selectedProject = ref<string>('');

onUpdated(() => {
  console.log(selectedProject.value);
});

const listArray = [
  {
    id: 1,
    title: 'Проект "Мода"',
    value: 'fashion',
  },
  {
    id: 12,
    title: 'Проект "Искусство"',
    value: 'art',
  },
  {
    id: 14,
    title: 'Проект "Музыка"',
    value: 'music',
  },
  {
    id: 15,
    title: 'Проект "Красота"',
    value: 'beauty',
  },
  {
    id: 16,
    title: 'Проект "Спорт"',
    value: 'sport',
  },
  {
    id: 17,
    title: 'Проект "Технологии"',
    value: 'tech',
  },
  {
    id: 18,
    title: 'Общее развитие фонда',
    value: 'other',
  },
];

const submit = () => {};
</script>
