<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
	<div
		@click="
			router.push({
				path: '/test/news',
				query: {
					id: 1
				}
			})
		"
	>
		test
	</div>
</template>

<style lang="scss" scoped></style>