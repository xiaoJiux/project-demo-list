<script lang="ts" setup>
/**
 * @param tabber 是否空出底部tabbar
 * */
import { ref } from "vue";
import nullImg from "@common-img/null.png";
import { state } from "vue-tsc/out/shared";

const props = withDefaults(
	defineProps<{
		/*是否空出底部tabbar*/
		tabber: boolean;
		/*如果是懒加载列表(默认false)*/
		state?: IstateList | undefined;
	}>(),
	{
		tabber: true,
		state: undefined
	}
);

/*传递给父组件数据*/
const dataList = ref<any[]>([]);

/*加载*/
const loading = ref<boolean>(false);

/*完成*/
const finished = ref<boolean>(false);

/*刷新*/
const refreshing = ref<boolean>(false);

/*空*/
const nullState = ref<boolean>(false);

const page = ref(props.state?.page || 1);
const limit = ref(props.state?.limit || 10);

/*数据加载*/
async function requestData() {
	const state = <IstateList>props.state;

	/*刷新状态*/
	if (refreshing.value) {
		refreshing.value = false;
		/*重置page,limit*/
		limit.value = <number>props.state?.limit || 10;
		page.value = <number>props.state?.page || 1;
		dataList.value = [];
	}
	const res = await state.api({ page: page.value, limit: limit.value });
	loading.value = false;
	dataList.value = [...dataList.value, ...(<any[]>res.data)];
	/*下一页*/
	page.value++;
}

/*刷新*/
const onRefresh = () => {
	// 清空列表数据
	finished.value = false;

	// 重新加载数据
	// 将 loading 设置为 true，表示处于加载状态
	loading.value = true;
	requestData();
};
</script>

<template>
	<div class="page-container flex flex-col h-screen">
		<div class="body flex-1 w-screen overflow-y-scroll">
			<!--默认显示-->
			<div v-if="!state" class="default h-full">
				<slot></slot>
			</div>
			<!--懒加载列表-->
			<div v-else class="load-list h-full">
				<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
					<van-list
						v-model:loading="loading"
						:finished="finished"
						:offset="50"
						finished-text="没有更多了"
						@load="requestData"
					>
						<slot v-if="!nullState" :dataList="dataList" name="list"></slot>
						<van-image v-else :src="nullImg" />
					</van-list>
				</van-pull-refresh>
			</div>
		</div>
		<div v-if="tabber" class="empty"></div>
	</div>
</template>
<style lang="scss" scoped>
.page-container {
	.empty {
		height: 50px;
		width: 100vw;
	}
}
</style>