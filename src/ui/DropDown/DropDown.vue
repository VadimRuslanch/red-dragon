<template>
  <div class="Dropdown">
    <div class="Dropdown__selected" @click="toggleDropdown">
      {{ selectedLabel || 'Выберите проект' }}
      <IconArrow :class="['Dropdown__selected-icon', { active: isOpen }]" />
    </div>
    <ul class="Dropdown__options" v-if="isOpen" role="listbox">
      <li
        class="Dropdown__option"
        v-for="option in options"
        :key="option.id"
        @click="selectOption(option)"
        role="option"
        :aria-selected="option.value === selectedValue"
      >
        {{ option.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IconArrow from '@/assets/svg/icon-arrow-select.svg';
import './DropDown.scss';
import { ref, computed } from 'vue';

// Принимаем значение через v-model
const { options, modelValue } = defineProps<{
  options: { id: number; title: string; value: string }[];
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedValue = ref(modelValue || null);
const selectedLabel = computed(
  () => options.find((option) => option.value === selectedValue.value)?.title
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: { id: number; title: string; value: string }) => {
  selectedValue.value = option.value;
  emit('update:modelValue', option.value);
  isOpen.value = false;
};
</script>
