<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import WordCount from './components/WordCount.vue';
import MessageList from './components/MessageList.vue';
import MessageList1 from './components/MessageList.vue';
</script>

<template>
<MessageList1 name = "Bob" msg = "hello" time ="19:38"></MessageList1>
<MessageList1 name = "Bob" msg = "hello" time ="19:38"></MessageList1>
</template>

<style>
*{
  color: white;
  padding: 0%;
  margin: 0%;
}
body {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: rgb(20,20,70);
  }
#app{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}

</style>
