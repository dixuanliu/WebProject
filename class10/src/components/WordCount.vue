<template>
    <div>
        <input type="text" v-model="content">
        <p>你输入了{{ count }}个字符</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content: "",
        };
    },
    computed: {
        count() {
            return this.content.length;
        }
    }
}
</script>
<style scoped>
*{
    font-size: 27px;
}
input {
    background: none;
    border: 1px solid purple;
    color: white;
    outline: none;
}

p {
    margin-top: 12px;
    color: white;
}
</style>