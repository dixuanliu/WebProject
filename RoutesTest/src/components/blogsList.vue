<template>
    <h1>BLOG POST</h1>
    <ul>
        <li v-for="item in data" :key="item.id">
        <router-link :to="`/${item.id}`">{{item.title}}</router-link>
        <p>{{item.body.substring(0,40)+"..."}}</p>
        </li>
    </ul>
    
</template>

<script setup>
import { onBeforeMount, onBeforeUpdate, ref } from 'vue';
import getData from '../getData.js'
let data = ref([])

onBeforeMount(async ()=>{
    data.value =  await getData("https://jsonplaceholder.typicode.com/posts")
    console.log(data.value);
})
// export default{
//     data(){
//         return{
//             data:[]
//         }
//     },
//     created(){
//         getData("https://jsonplaceholder.typicode.com/posts").then((data)=>{this.data = data})
//     }
// }
</script>
<style >
</style>