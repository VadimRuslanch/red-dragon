<template>
  <div class="MissionBlock">
    <div class="page">
      <span class="HomePage__description">Миссия фонда</span>
      <section class="MissionBlock__left">
        <article class="MissionBlock__about">
          <h4 class="MissionBlock__title">
            развитие инфраструктурных проектов
          </h4>
          <p class="MissionBlock__info" ref="about1">
            создание современной, устойчивой и эффективной инфраструктуры,
            способствующей экономическому росту, улучшению качества жизни
            населения и обеспечению экологической безопасности, посредством
            инновационных решений и партнеров Фонда.
          </p>
        </article>

        <article class="MissionBlock__about">
          <h4 class="MissionBlock__title">Усилия Фонда направлены</h4>
          <p class="MissionBlock__info" ref="about2">
            на системное развитие инфраструктуры, спорта и молодежных движений,
            что в свою очередь будет способствовать улучшению качества жизни и
            перспектив для будущих поколений!
          </p>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import './MissionBlock.scss';

// Рефы для блоков
const about1 = ref<HTMLElement | null>(null);
const about2 = ref<HTMLElement | null>(null);

// Функция для разделения текста на слова
const splitText = (element: HTMLElement) => {
  const string = element.textContent || '';
  element.innerHTML = string
    .split(/(\s+)/) // Разделяет текст на слова и пробелы, сохраняя пробелы
    .map((chunk) => {
      const content = chunk === ' ' ? '&nbsp;' : chunk; // Заменяем обычные пробелы на неразрывные
      return `<span class="new">${content}</span>`;
    })
    .join('');
};


// Функция для обновления анимации в зависимости от скролла
const updateAnimation = (element: HTMLElement, progress: number) => {
  const spans = element.querySelectorAll('span.new');
  spans.forEach((span, i) => {
    const spanProgress = (i + 1) / spans.length; // Прогресс появления текущей буквы
    if (progress >= spanProgress) {
      span.style.opacity = '1';
    } else {
      span.style.opacity = '.1';
    }
  });
};

// Обработчик скролла
const handleScroll = () => {
  [about1.value, about2.value].forEach((element) => {
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Прогресс появления блока
      const start = windowHeight * 0.15; // Начало анимации
      const end = windowHeight * 0.5; // Конец анимации
      const progress = Math.min(
        Math.max((rect.top - start) / (end - start), 0),
        1
      );

      updateAnimation(element, 1 - progress); // Инвертируем прогресс для эффекта
    }
  });
};

onMounted(() => {
  // Разделение текста на буквы
  if (about1.value) splitText(about1.value);
  if (about2.value) splitText(about2.value);

  // Добавление слушателя скролла
  window.addEventListener('scroll', handleScroll);

  // Инициализация
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.MissionBlock__info .new {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
</style>
