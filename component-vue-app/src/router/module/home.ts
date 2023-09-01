import type { RouteRecordRaw } from "vue-router";

export const testRouter: RouteRecordRaw[] = [
	{
		path: "",
		name: "test",
		component: () => import("@/views/page/test/index.vue")
	},
	{
		path: "news",
		name: "news",
		component: () => import("@/views/page/home/news/index.vue")
	}
];
