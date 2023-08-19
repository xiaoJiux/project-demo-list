<script lang="ts" setup>
import FreshLoading from "@/components/common/fresh-loading.vue";
import { getUserInfo } from "@/api/page/user";

const opt = {
	api: getUserInfo()
};
</script>

<template>
	<fresh-loading :option="opt">
		<template v-slot="{ datalist }">
			<div v-for="item in datalist" :key="item.Id">
				{{ item }}
			</div>
		</template>
	</fresh-loading>
	<RouterView />
</template>

<style lang="scss" scoped></style>