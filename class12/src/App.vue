<template>
  <button @click="msg.push('这是一段消息'+(msg.length+1))">添加消息</button>
  <Transport v-for="msgs in msg">{{msgs}}</Transport>
</template>
<script>
// import NextVue from './components/Next.vue';
// import RegisterVue from './components/Register.vue';
import Transport from './components/Transport.vue'

export default {
  components: {
    // RegisterVue,
    // NextVue,
    Transport,
  },
  data() {
    return {
      msg:[],
    }
  },
}
</script>



<style lang="scss">

</style>