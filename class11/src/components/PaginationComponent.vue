<template>
    <div>
        <p>当前页数 {{currentPage}}</p>
        <button v-for="n in totalPage" @click="currentPage = n">
            {{ n }}
        </button>
    </div>
</template>
<script>
export default {
    props: ["totalPage","DefaultCurrentPage"],
    data() {
        return {
            currentPage:this.DefaultCurrentPage,
        }
    },
    watch:{
        totalPage(newVal,oldVal){
            console.log(newVal,oldVal)
            this.currentPage = 1
        }
    }
};
</script>
<style scoped>
</style>