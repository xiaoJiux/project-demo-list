import { showToast } from "vant";
import type { ToastOptions, ToastType } from "vant/es";

// 弹窗
export const Toast = (type: ToastType, msg: string, option?: ToastOptions) => {
	return showToast({
		type,
		message: msg,
		forbidClick: true,
		...option
	});
};
