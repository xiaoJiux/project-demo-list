import type { Router } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { testRouter } from "@/router/module/home";

const router: Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			alias: "/home",
			component: () => import("@/views/page/home/index.vue")
		},
		{
			path: "/test",
			name: "Test",
			children: [...testRouter]
		},
		{
			path: "/error",
			name: "Error",
			component: () => import("@/views/error/index.vue")
		},
		{
			path: "/personal",
			name: "Personal",
			component: () => import("@/views/page/personal/index.vue")
		},
		{
			path: "/loading",
			name: "Loading",
			component: () => import("@/views/loading/index.vue")
		}
	]
});
/*拦截器拦截错误跳转*/
// router.beforeEach((to, from, next) => {
// 	const routes = router.getRoutes().map(item => item.path);
// 	/*判断是否登录*/
// 	if (getStorage("userInfo")) {
// 		return next();
// 	}
// 	if (routes.includes(to.path)) {
// 		next();
// 	} else {
// 		return next({ path: "/error" });
// 	}
// });
export default router;
