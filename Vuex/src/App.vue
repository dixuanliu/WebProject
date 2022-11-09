<template>
	<main>
		<p v-for="items in user" :key="items.id">
      <span v-for="item in items" :key="item.id">{{item}}---</span>
    </p>
	</main>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const setuser = () => store.dispatch("fetchData");
const user = computed(()=>store.state.user)
onMounted(setuser);
</script>
<style lang="scss">
main {
	width: 100vw;
	height: 100vh;
	display: grid;
	place-items: center;
  span{
    font-size: small;
  }
}
</style>
