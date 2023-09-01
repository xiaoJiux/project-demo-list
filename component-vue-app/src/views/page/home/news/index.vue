<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.query);
</script>
<template>
	<div>news</div>
</template>
<style lang="scss" scoped></style>