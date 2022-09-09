<template>
    <div>
        <MovieItem :title="movie.title" :item="movie.item"></MovieItem>
    </div>
</template>
<script>
import MovieItem from './MovieItem.vue';
export default {
    components: {
        MovieItem
    },
    data() {
        return {
            movie: {
                title: "电影",
                item: "这是一段电影描述"
            }
        }
    },
    provide() {
        return {
            title: this.movie.title,
            item: this.movie.item
        }
    }
}
</script>
<style scoped>
div {
    border: 1px solid hsl(240deg, 100%, 80%);
    border-radius: 7px;
    padding: 20px 40px 20px 20px;
}
</style>