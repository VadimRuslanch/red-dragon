<template>
  <button class="LogoComponent" @click="routeTo">
    <IconLogo/>
  </button>
</template>

<script setup lang="ts">
import './LogoComponent.scss';
import IconLogo from '@/assets/svg/logo.svg';
import {useRouter} from 'vue-router';

const router = useRouter();

const routeTo = () => {
  router.push('/');
};
</script>
