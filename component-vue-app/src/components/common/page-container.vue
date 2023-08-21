<script lang="ts" setup>
/**
 * @param tabber 是否空出底部tabbar
 * */
import { ref } from "vue";
import nullImg from "@common-img/null.png";

const props = withDefaults(
	defineProps<{
		/*是否空出底部tabbar*/
		tabber: boolean;
		/*如果是懒加载列表(默认false)*/
		state?: IstateList | false;
	}>(),
	{
		tabber: true,
		state: false
	}
);
const dataList = ref<any[]>([]);
/*加载*/
const loading = ref<boolean>(false);
/*完成*/
const finished = ref<boolean>(false);
/*刷新*/
const refreshing = ref<boolean>(false);
/*空*/
const nullState = ref<boolean>(false);

const page = ref(1);
const limit = ref(10);

/*数据加载*/
async function requestData() {
	const state = <IstateList>props.state;
	/*刷新状态*/
	if (refreshing.value) {
		await state.api({ page: page.value, limit: limit.value });
	}
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
						:offset="300"
						finished-text="没有更多了"
						@load="requestData"
					>
						<slot v-if="!nullState" :list="dataList" name="list"></slot>
						<van-image v-else :src="nullImg" />
					</van-list>
				</van-pull-refresh>
				<!--				<slot :list="dataList" name="list"></slot>-->
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