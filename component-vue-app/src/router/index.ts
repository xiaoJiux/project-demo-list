import type { Router } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { getStorage } from "@/utils/storage";

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
			path: "/error",
			name: "Error",
			component: () => import("@/views/error/index.vue")
		},
		{
			path: "/personal",
			name: "Personal",
			component: () => import("@/views/page/personal/index.vue")
		}
	]
});
/*拦截器拦截错误跳转*/
router.beforeEach((to, from, next) => {
	const routes = router.getRoutes().map(item => item.path);
	/*判断是否登录*/
	if (getStorage("userInfo")) {
		return next();
	}
	if (routes.includes(to.path)) {
		next();
	} else {
		return next({ path: "/error" });
	}
});
export default router;
