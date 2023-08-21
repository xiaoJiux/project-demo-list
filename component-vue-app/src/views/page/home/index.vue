<script lang="ts" setup>
import PageContainer from "@/components/common/page-container.vue";
import { ref } from "vue";
import { getUserInfo } from "@/api/page/user";

const state = ref<IstateList>({
	api: getUserInfo()
});
</script>

<template>
	<page-container :state="state" tabber>
		<div>这里是默认内容</div>
		<template #list="data"></template>
	</page-container>
</template>

<style lang="scss" scoped></style>