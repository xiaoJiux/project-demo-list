<script lang="ts" setup></script>

<template>
	<div class="loading">
		<div id="load">
			<!--	loading特效-->
			<div>G</div>
			<div>N</div>
			<div>I</div>
			<div>D</div>
			<div>A</div>
			<div>O</div>
			<div>L</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.loading {
	width: 100vw;
	overflow-x: clip;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

@media (max-width: 768px) {
	#load {
		width: 80% !important;

		& > div {
			font-size: 18px !important;
		}
	}
}

#load {
	position: absolute;
	width: 40%;
	height: 36px;
	overflow: visible;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	cursor: default;
}

#load div {
	position: absolute;
	width: 20px;
	height: 36px;
	opacity: 0;
	font-size: 28px;
	font-family: Helvetica, Arial, sans-serif;
	animation: move 2s linear infinite;
	-o-animation: move 2s linear infinite;
	-moz-animation: move 2s linear infinite;
	-webkit-animation: move 2s linear infinite;
	transform: rotate(180deg);
	-o-transform: rotate(180deg);
	-moz-transform: rotate(180deg);
	-webkit-transform: rotate(180deg);
	color: #35c4f0;
}

#load div:nth-child(2) {
	animation-delay: 0.2s;
	-o-animation-delay: 0.2s;
	-moz-animation-delay: 0.2s;
	-webkit-animation-delay: 0.2s;
}

#load div:nth-child(3) {
	animation-delay: 0.4s;
	-o-animation-delay: 0.4s;
	-webkit-animation-delay: 0.4s;
	-webkit-animation-delay: 0.4s;
}

#load div:nth-child(4) {
	animation-delay: 0.6s;
	-o-animation-delay: 0.6s;
	-moz-animation-delay: 0.6s;
	-webkit-animation-delay: 0.6s;
}

#load div:nth-child(5) {
	animation-delay: 0.8s;
	-o-animation-delay: 0.8s;
	-moz-animation-delay: 0.8s;
	-webkit-animation-delay: 0.8s;
}

#load div:nth-child(6) {
	animation-delay: 1s;
	-o-animation-delay: 1s;
	-moz-animation-delay: 1s;
	-webkit-animation-delay: 1s;
}

#load div:nth-child(7) {
	animation-delay: 1.2s;
	-o-animation-delay: 1.2s;
	-moz-animation-delay: 1.2s;
	-webkit-animation-delay: 1.2s;
}

@keyframes move {
	0% {
		left: 0;
		opacity: 0;
	}
	35% {
		left: 41%;
		-moz-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		opacity: 1;
	}
	65% {
		left: 59%;
		-moz-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		opacity: 1;
	}
	100% {
		left: 100%;
		-moz-transform: rotate(-180deg);
		-webkit-transform: rotate(-180deg);
		-o-transform: rotate(-180deg);
		transform: rotate(-180deg);
		opacity: 0;
	}
}

@-moz-keyframes move {
	0% {
		left: 0;
		opacity: 0;
	}
	35% {
		left: 41%;
		-moz-transform: rotate(0deg);
		transform: rotate(0deg);
		opacity: 1;
	}
	65% {
		left: 59%;
		-moz-transform: rotate(0deg);
		transform: rotate(0deg);
		opacity: 1;
	}
	100% {
		left: 100%;
		-moz-transform: rotate(-180deg);
		transform: rotate(-180deg);
		opacity: 0;
	}
}

@-webkit-keyframes move {
	0% {
		left: 0;
		opacity: 0;
	}
	35% {
		left: 41%;
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
		opacity: 1;
	}
	65% {
		left: 59%;
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
		opacity: 1;
	}
	100% {
		left: 100%;
		-webkit-transform: rotate(-180deg);
		transform: rotate(-180deg);
		opacity: 0;
	}
}

@-o-keyframes move {
	0% {
		left: 0;
		opacity: 0;
	}
	35% {
		left: 41%;
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		opacity: 1;
	}
	65% {
		left: 59%;
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		opacity: 1;
	}
	100% {
		left: 100%;
		-o-transform: rotate(-180deg);
		transform: rotate(-180deg);
		opacity: 0;
	}
}
</style>
