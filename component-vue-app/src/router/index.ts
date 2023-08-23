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
