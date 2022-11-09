<template>
    <li>
        {{msg}}
        <!-- <button v-on:click="remove(id)">删除</button> -->
        <button v-on:click="$emit('remove',id)">删除</button>
    </li>
</template>
<script setup>
import { useAttrs, useSlots, watch } from 'vue';


defineProps(["msg", "id"])
defineEmits(["remove"])
console.log(useAttrs())
        // function remove(id){
        //     emit ("remove",id)
        // }
</script>