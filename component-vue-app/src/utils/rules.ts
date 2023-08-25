/*聊天数据去除头部数字*/
export function cleanNumberVue(str: string) {
	return JSON.parse(str.replace(/^[0-9]+/, ""));
}
