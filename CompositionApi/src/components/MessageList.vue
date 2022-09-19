<template>
    <input
        type="text"
        name="search"
        v-model="searchTerm"
        placeholder="搜索"
    />
    <h1>title:{{ options.title }}</h1>
    <p>user:{{ options.user.name }}</p>
    <p>online:{{ options.user.active }}</p>
    <ul>
        <li
            v-for="msg in searchMessage"
            :key="msg.id"
        >
            {{ msg.content }}
        </li>
    </ul>
    <button @click="messages = []">删除所有</button>
    <button @click="options.title = '修改标题'">修改标题</button>
    <button @click="options.user = ''">删除用户</button>
</template>
<script>
import { ref, computed, watch, reactive } from "vue";
export default {
    setup() {
        const options = reactive({
            title: "消息列表",
            user: {
                name: "张三",
                active: true,
            },
        });
        const messages = ref([
            {
                id: 1,
                content: "这是一条消息提醒1",
            },
            {
                id: 2,
                content: "这是一条消息提醒2",
            },
            {
                id: 3,
                content: "这是一条消息提醒3",
            },
            {
                id: 4,
                content: "这是一条消息提醒4",
            },
        ]);
        const searchTerm = ref("");
        const searchMessage = computed(() => {
            if (searchTerm.value === "") return messages.value;
            return messages.value.filter((msg) => {
                return msg.content.includes(searchTerm.value);
            });
        });
        console.log(messages.value);

        watch(
            () => searchTerm.value,
            (newVal, oldVal) => {
                console.log("搜索词:", newVal, oldVal);
            }
        );
        watch(
            () => options.title,
            (newVal, oldVal) => {
                console.log(newVal, oldVal);
            }
        );
        watch(
            () => options.user.name,
            (newVal, oldVal) => {
                console.log(newVal, oldVal);
            }
        );

        return {
            messages,
            searchTerm,
            searchMessage,
            options,
        };
    },
};
</script>
