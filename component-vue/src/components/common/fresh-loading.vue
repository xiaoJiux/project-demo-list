<script lang="ts" setup>
import { ref } from "vue";

const dataList = ref<any[]>([]);
const loading = ref<boolean>(false);
const finished = ref<boolean>(false);
const refreshing = ref<boolean>(false);

const resFn = new Promise((res, rej) => {
	let testData: any[] = [];
	setTimeout(() => {
		testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
		loading.value = false;
		res(testData);
	}, 15000);
	// rej();
});

async function onLoad() {
	/*刷新后加载数据*/
	console.log(refreshing.value);
	if (refreshing.value) {
		dataList.value = [];
		refreshing.value = false;
	}
	// 异步更新数据
	// setTimeout 仅做示例，真实场景中一般为 ajax 请求
	const res = await resFn;
	dataList.value = [...dataList.value, ...res];
	loading.value = false;
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
			<van-cell v-for="item in dataList" :key="item" :title="item" />
		</van-list>
	</van-pull-refresh>
</template>

<style lang="scss" scoped></style>