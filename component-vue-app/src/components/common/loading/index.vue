<script lang="ts" setup>
withDefaults(
	defineProps<{
		state: boolean;
	}>(),
	{
		state: false
	}
);
</script>

<template>
	<div v-if="state" class="loading w-screen h-screen fixed top-0 left-0 z-50 grid place-content-center">LOGO</div>
</template>

<style lang="scss" scoped></style>
