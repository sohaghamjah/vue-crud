import { createRouter, createWebHistory } from "vue-router";
const routes = [
    { path: '/add-new', name: 'add', component: () => import('../crud/AddNew.vue')},
    { path: '/', name: 'list', component: () => import('../crud/List.vue')},
    { path: '/student/:id/edit', name: 'student.edit', component: () => import('../crud/Edit.vue')},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;