<template>
    <MovieTitle></MovieTitle>
    <p>{{ item }}</p>
</template>
<script>
import MovieTitle from './MovieTitle.vue';
export default {
    inject: ["item"],
    components: { MovieTitle }
}
</script>
<style scoped>
p {
    margin-top: 20px;
}
</style>