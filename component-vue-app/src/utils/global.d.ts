/**
 * 列表配置
 * @param api 接口地址
 * @param limit 每页数据条数(可选默认10)
 * @param page 页码(可选默认1)
 * */

declare interface IstateList {
	api: (data?: any) => Promise<Data<unknown>>;
	limit?: number;
	page?: number;
}

/**
 * 默认返回数据配置
 * @param code 响应码
 * @param data 数据
 * */
declare interface IData<T> {
	code: number;
	msg?: string;
	data: T;
}
