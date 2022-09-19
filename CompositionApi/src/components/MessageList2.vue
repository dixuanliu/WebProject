<template>
  <ul>
    <MessageListItem
      v-for="msg in message"
      :key="msg.id"
      :msg="msg.content"
      :id="msg.id"
      @remove="remove"
    ></MessageListItem>
  </ul>
</template>

<script setup>
import { ref, toRefs, useAttrs,watch } from "vue";
import MessageListItem from "./MessageListItem.vue";
const message = ref([
  { id: 1, content: "这是一条消息列表1" },
  { id: 2, content: "这是一条消息列表2" },
  { id: 3, content: "这是一条消息列表3" },
  { id: 4, content: "这是一条消息列表4" },
]);

function remove(id) {
  message.value = message.value.filter((msg) => msg.id !== id)
}

setTimeout(() => {
  message.value[1].content = "这是一条消息列表2-change"
}, 1500)

</script>
