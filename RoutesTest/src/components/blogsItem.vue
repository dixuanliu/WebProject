<template>
    <h1>{{blogPost.title}}</h1>
    <p>{{blogPost.body}}</p>
    <router-link :to="`/${route.params.id-1>0?route.params.id-1:route.params.id-1}`">上一篇</router-link>
    <router-link :to="`/${route.params.id-0+1}`">下一篇</router-link>
    <router-link :to="`/`">首页</router-link>
</template>
<script setup>
import getData from "../getData";
import { ref, watch } from "vue";
import { useRoute,useRouter } from "vue-router";

let blogPost = ref({})
const route = useRoute()
const router = useRouter()

watch(
    ()=>route.params.id,
    (params,oldparams)=>{
        (async ()=>{
            const response = await getData(`https://jsonplaceholder.typicode.com/posts/${params}`)
        blogPost.value = response
        })()
    },
    {
        immediate:true
    }
)

// watch:{
//         "$route.params":{
//             handler(params,oldparams){
//                 getData(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((data)=>{this.blogPost = data})
//             },
//             immediate:true,
//         }
//     },
</script>


<style>
</style>