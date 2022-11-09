<template>
	<div class="main">
		<div class="sidebar">
            <sideBar></sideBar>
		</div>
		<div class="blogs">
            <RouterView></RouterView>
		</div>
	</div>
</template>
<script setup>
import { useRoute } from "vue-router";
import sideBar from "./sideBar.vue"
const route = useRoute();
</script>
<style lang="scss" scoped>
.main {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	justify-content: flex-start;
}
.sidebar {
	width: 20%;
	min-width: 210px;
	max-width: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.blogs {
	max-height: 100vh;
	flex-grow: 1;
	padding: 15px 15px;
	justify-content: center;
}
</style>
