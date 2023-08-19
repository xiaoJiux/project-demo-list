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
/*空*/
const nullState = ref<boolean>(false);

//翻页
withDefaults(
	defineProps<{
		option: {
			api: Promise<Data<unknown>>;
		};
	}>(),
	{}
);
const requestFn = async () => {
	const page = 1;
	const limit = 12;
	const res = await getUserInfo({ page, limit });
	dataList.value = [...(res.resultdata.data as any[]), ...dataList.value];
	if (nullState.value) {
		dataList.value = res.resultdata.data as any[];
		nullState.value = false;
	}
	loading.value = false;
};

async function onLoad() {
	console.log("触发");
	setTimeout(() => {
		/*刷新后加载数据*/
		if (refreshing.value) {
			refreshing.value = false;
		}

		requestFn().catch(err => {
			nullState.value = true;
		});

		// 异步更新数据
		// setTimeout 仅做示例，真实场景中一般为 ajax 请求
		loading.value = false;

		if (dataList.value.length > 60) {
			finished.value = true;
		}
	}, 2500);
}

/*刷新*/
async function onRefresh() {
	// 重新加载数据
	// 将 loading 设置为 true，表示处于加载状态
	loading.value = true;
	await onLoad();
}
</script>

<template>
	<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
		<van-list v-model:loading="loading" :finished="finished" :offset="300" finished-text="没有更多了" @load="onLoad">
			<slot v-if="!nullState" :datalist="dataList"></slot>
			<van-image v-else :src="nullImg" />
		</van-list>
	</van-pull-refresh>
</template>

<style lang="scss" scoped></style>