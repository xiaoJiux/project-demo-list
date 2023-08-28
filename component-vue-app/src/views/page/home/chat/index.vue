<script lang="ts" setup>
import io from "socket.io-client";
import { onUnmounted, ref } from "vue";

const msg = ref("");
const socket = io("http://127.0.0.1:3001");
const chartList = ref<string[]>([]);

socket.on("connect", () => {
	const engine = socket.io.engine;
	console.log(engine.transport.name); // in most cases, prints "polling"

	engine.once("upgrade", () => {
		// called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
		console.log(engine.id); // in most cases, prints "websocket"
	});

	engine.on("packet", ({ type, data }) => {
		// called for each packet received
		console.log(type, data);
	});

	engine.on("packetCreate", ({ type, data }) => {
		// called for each packet sent
	});

	engine.on("drain", () => {
		// called when the write buffer is drained
	});

	engine.on("close", reason => {
		// called when the underlying connection is closed
	});
});

socket.on("disconnect", () => {
	console.log(socket.connected); // false
});

function sendMsg() {
	socket.volatile.emit("join", { name: msg.value }, (err: Error) => {
		if (err) {
			alert(err);
		}
	});
	chartList.value.push(msg.value);
	msg.value = "";
}

onUnmounted(() => {
	socket.close();
});
</script>

<template>
	<div class="chat text-center text-xl">
		<div v-for="(item, index) in chartList" :key="index" class="text-center text-xl font-sans">{{ item }}</div>
		<div class="input">
			<input v-model="msg" placeholder="输入" type="text" />
			<van-button type="primary" @click="sendMsg">发送</van-button>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>