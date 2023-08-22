/**
 * 列表配置
 * @param api 接口地址
 * @param limit 每页数据条数
 * @param page 第几页
 * */
declare interface IstateList {
	api: (data?: any) => Promise<Data<unknown>>;
	limit?: number;
	page?: number;
}
