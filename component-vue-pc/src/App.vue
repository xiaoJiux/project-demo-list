<script lang="ts" setup></script>

<template>
	<RouterView />
	<van-tabbar route>
		<van-tabbar-item icon="home-o" replace to="/home">home</van-tabbar-item>
		<van-tabbar-item icon="search" replace to="/user">user</van-tabbar-item>
	</van-tabbar>
</template>

<style lang="scss" scoped></style>