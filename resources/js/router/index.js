import { createRouter, createWebHistory } from "vue-router";
const routes = [
    { path: '/add-new', name: 'add', component: () => import('../crud/AddNew.vue')},
    { path: '/', name: 'list', component: () => import('../crud/List.vue')},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;