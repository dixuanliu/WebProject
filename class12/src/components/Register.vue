<script>
export default {
    emits:["CustomClick"]
}
</script>
<template>
    <div class="container">
        <label for="name">用户名</label>
        <input type="text" name="name">
        <label for="name">密码</label>
        <input type="password" name="password">
        <button @click="$emit('customClick')">下一步</button>
    </div>
</template>
<style lang="scss">
    .container{
        display: flex;
        flex-direction: column;
    }
</style>