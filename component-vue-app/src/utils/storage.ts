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