<script lang="ts" setup>
import PageContainer from "@/components/common/page-container.vue";
import { ref } from "vue";
import { getUserInfo } from "@/api/page/user";

const state = ref<IstateList>({
	api: data => getUserInfo(data),
	limit: 15
});
</script>

<template>
	<page-container :state="state" tabber>
		<div>这里是默认内容</div>
		<template #list="{ dataList }">
			<div v-for="item in dataList" :key="item" class="item">{{ item }}</div>
		</template>
	</page-container>
</template>

<style lang="scss" scoped>
.item {
	font-size: 18px;
	padding: 12px 6px;
	border-bottom: 1px solid black;
}
</style>