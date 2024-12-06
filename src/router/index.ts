import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Импортируйте ваши компоненты
import HomePage from '@/views/HomePage/HomePage.vue';
import AboutPage from '@/views/AboutPage/AboutPage.vue';
import ProjectsPage from '@/views/ProjectsPage/ProjectsPage.vue';
import NewsPage from '@/views/NewsPage/NewsPage.vue';
import PartnersPage from '@/views/PartnersPage/PartnersPage.vue';
import ContactsPage from '@/views/ContactsPage/ContactsPage.vue';
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
    path: '/news',
    name: 'News',
    component: NewsPage,
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
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
