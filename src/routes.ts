import { createWebHistory, createRouter } from "vue-router";
import { routes } from "vue-router/auto-routes";

export const router = createRouter({
    history: createWebHistory(),
    routes
});