<template>
	<button @click="router.push('/blogs')">BLOG POST</button>
    <button @click="router.push('/1')">BLOG ITEM</button>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

function go(url) {
	router.push(url);
}
</script>
<style lang="scss">
button{
    margin: 15px 0;
    padding: 10% 10%;
    min-width: 180px;
    width: 80%;
    justify-items: center;
}
</style>
