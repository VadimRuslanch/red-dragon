import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomePage from '@/views/HomePage/HomePage.vue';
import AboutPage from '@/views/AboutPage/AboutPage.vue';
import ProjectsPage from '@/views/ProjectsPage/ProjectsPage.vue';
import EventsPage from '@/views/EventsPage/EventsPage.vue';
import PartnersPage from '@/views/PartnersPage/PartnersPage.vue';
import ContactsPage from '@/views/ContactsPage/ContactsPage.vue';
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage/PrivacyPolicyPage.vue';
import NotFoundPage from '@/views/NotFoundPage/NotFoundPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsPage,
  },
  {
    path: '/partners',
    name: 'Partners',
    component: PartnersPage,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsPage,
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicyPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // @ts-ignore
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Возвращает сохранённую позицию для переходов назад/вперёд
    } else {
      return { top: 0 }; // Скроллит вверх при переходе на новую страницу
    }
  },
});

export default router;
