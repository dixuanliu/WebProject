<template>
    <h1>{{blogPost.title}}</h1>
    <p>{{blogPost.body}}</p>
    <router-link :to="`/${this.$route.params.id-1>0?this.$route.params.id-1:this.$route.params.id}`">上一篇</router-link>
    <router-link :to="`/${this.$route.params.id-0+1}`">下一篇</router-link>
</template>
<script>
import getData from '../getData';

export default{
    data(){
        return{
            blogPost:{}
        }
    },
    watch:{
        "$route.params":{
            handler(params,oldparams){
                getData(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((data)=>{this.blogPost = data})
            },
            immediate:true,
        }
    }
}
</script>

<style>
</style>