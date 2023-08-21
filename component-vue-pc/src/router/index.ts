import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			alias: "/home",
			component: () => import("@/views/page/home/index.vue")
		},
		{
			path: "/error",
			name: "Error",
			component: () => import("@/views/error/index.vue")
		},
		{
			path: "/loading",
			name: "Loading",
			component: () => import("@/views/loading/index.vue")
		},
		{
			path: "/user",
			name: "User",
			component: () => import("@/views/page/user/index.vue")
		}
	]
});
/*拦截器拦截错误跳转*/
/*router.beforeEach((to, from, next) => {
	if (to.name === "Error") {
		next();
	} else {
		next();
	}
});*/
export default router;