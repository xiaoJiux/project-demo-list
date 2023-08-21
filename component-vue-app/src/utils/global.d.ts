/*列表配置*/
declare interface IstateList {
	api: (data?: any) => Promise<Data<unknown>>;
}
