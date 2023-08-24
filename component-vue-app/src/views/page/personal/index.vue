<script lang="ts" setup>
import io from "socket.io-client";

const socket = io("ws://localhost:3001");

socket.on("connect", () => {
	console.log(socket.id);
	console.log(socket.connected);
});
</script>

<template>
	<div class="personal text-center text-xl">
		<input placeholder="输入" type="text" />
		<van-button type="primary">发送</van-button>
	</div>
</template>

<style lang="scss" scoped></style>