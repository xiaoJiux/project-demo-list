<script lang="ts" setup>
function resetStr() {
	console.log(str.match(/\[\w.+]/));
	return str.match(/\[\w.+]/)[0];
}

let str = "22[1,[3,4],{name:'张三'}]";
</script>

<template>
	<div class="error">{{ resetStr() }}</div>
</template>

<style lang="scss" scoped></style>
