<template>
    <div class="container">
        <label for="name">邮箱</label>
        <input type="email" id="name">
        <label for="gender">性别</label>
        <select name="gender" id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <button @click="$emit('customClick')">上一步</button>
    </div>
</template>

<script>
export default {
    emits: ["CustomClick"],
    data(){
        return{
            select:"hhhh",
        }
    }
}
</script>
<style lang="scss">
    .container{
        display: flex;
        flex-direction: column;
    }
</style>