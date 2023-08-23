/**
 * 保存Storage
 * @param key 键
 * @param val 值
 * */
export const setStorage = (key: string, val: any) => {
	localStorage.setItem(key, JSON.stringify(val));
};

/*获取Storage*/
export const getStorage = (key: string) => {
	return JSON.parse(<string>localStorage.getItem(key));
};

/*移除Storage*/
export const removeStorage = (key: string) => {
	localStorage.removeItem(key);
};

/*清除Storage*/
export const clearStorage = () => {
	localStorage.clear();
};

/*保存session*/
export const setSession = (key: string, val: any) => {
	sessionStorage.setItem(key, JSON.stringify(val));
};

/*获取session*/
export const getSession = (key: string) => {
	return JSON.parse(<string>sessionStorage.getItem(key));
};

/*移除session*/
export const removeSession = (key: string) => {
	sessionStorage.removeItem(key);
};

/*清除session*/
export const clearSession = () => {
	sessionStorage.clear();
};

/*获取url参数*/
export const getUrlParam = (name: string) => {
	const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	const r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
};
