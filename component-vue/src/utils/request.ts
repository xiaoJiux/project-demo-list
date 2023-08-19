import type { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import axios from "axios";
import { getEnvValue } from "@/utils/env";

const Axios = axios.create({
	baseURL: getEnvValue("VITE_BASE_URL"),
	timeout: 3500
});
// 处理请求响应器
Axios.interceptors.request.use((config: AxiosRequestConfig) => {
	// 在发送请求之前做些什么
	return config as any;
});
//处理响应拦截器
Axios.interceptors.response.use(
	(response: AxiosResponse) => {
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		if (response.status === 200) {
			return response.data;
		} else {
			console.warn(response);
		}
	},
	function (error) {
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);

/**
 * @param method 请求方法
 * @param url 地址
 * @param submitData 请求数据
 * @param config 请求头等配置项
 * */
const http = <T>(method: Method, url: string, submitData?: object, config?: AxiosRequestConfig) => {
	//ts内不可以传泛型
	return Axios.request<T, Data<T>>({
		url,
		method,
		[method.toLowerCase() === "get" ? "params" : "data"]: submitData,
		...config
	});
};
export default http;