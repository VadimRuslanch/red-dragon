import { createRouter, createWebHistory } from 'vue-router';
// Импортируйте ваши компоненты
import HomePage from "@/views/HomePage/HomePage.vue";
import AboutPage from '@/views/AboutPage/AboutPage.vue';
import ProjectsPage from '@/views/ProjectsPage/ProjectsPage.vue';
import NewsPage from '@/views/NewsPage/NewsPage.vue';
import PartnersPage from '@/views/PartnersPage/PartnersPage.vue';
import ContactsPage from '@/views/ContactsPage/ContactsPage.vue';
import NotFoundPage from '@/views/NotFoundPage/NotFoundPage.vue';
// Определите маршруты
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage, // Можно сделать AboutPage домашней страницей
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
        path: '/:pathMatch(.*)*', // Обработка 404
        name: 'NotFound',
        component: NotFoundPage,
    },
];
// Создайте экземпляр роутера
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map