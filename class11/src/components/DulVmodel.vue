<template>
    <div>
        <input type="text" name="search" :value="searchTerm" @input="$emit('update:searchTerm', $event.target.value)" />
        <p>{{ searchTerm }}</p>
    </div>
    <div class="select">
        <select name="selectList" :value="category" @change="$emit('update:category', $event.target.value)">
            <option value="default">默认</option>
            <option value="frontend">前端</option>
            <option value="backend">后端</option>
            <option value="fullstack">全栈</option>
        </select>
    </div>
    <p>{{ category }}</p>
</template>
<script>
export default {
    props: ["searchTerm", "category"],
    emits: ["update:searchTerm", "update:category"]
}
</script>
<style scoped lang="scss">
div {
    padding-bottom: 10px;
}

</style>