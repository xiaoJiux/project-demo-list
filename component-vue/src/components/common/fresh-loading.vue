<script lang="ts" setup>
import { ref } from "vue";
import { getUserInfo } from "@/api/page/user";
import nullImg from "@common-img/null.png";

const dataList = ref<any[]>([]);
/*加载*/
const loading = ref<boolean>(false);
/*完成*/
const finished = ref<boolean>(false);
/*刷新*/
const refreshing = ref<boolean>(false);

//翻页
const page = 1;
const limit = 10;

const props = defineProps<{
	option: {
		api: Promise<Data<unknown>>;
	};
}>();

const requestFn = async (page: number, limit: number) => {
	const res = await getUserInfo({ page, limit });
	dataList.value = [...(res.resultdata.data as any[]), ...dataList.value];
	loading.value = false;
};

async function onLoad() {
	console.log("加载了");
	/*刷新后加载数据*/
	if (refreshing.value) {
		dataList.value = [];
		refreshing.value = false;
	}
	await requestFn(page, limit);
	// 异步更新数据
	// setTimeout 仅做示例，真实场景中一般为 ajax 请求
	loading.value = false;

	if (dataList.value.length > 60) {
		finished.value = true;
	}
}

/*刷新*/
async function onRefresh() {
	// 清空列表数据
	finished.value = false;

	// 重新加载数据
	// 将 loading 设置为 true，表示处于加载状态
	loading.value = true;
	await onLoad();
}
</script>

<template>
	<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
		<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<slot v-if="dataList.length" :datalist="dataList"></slot>
			<van-image :src="nullImg" />
		</van-list>
	</van-pull-refresh>
</template>

<style lang="scss" scoped></style>