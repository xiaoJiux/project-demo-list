declare interface ViteEnv {
	VITE_ENV: string;
	VITE_BASE_URL: string;
	VITE_BASE_IMG_URL: string;
	VITE_TOKEN: string;
}

//再次对请求方法封装

declare type Data<T> = {
	code: number;
	data: T;
};