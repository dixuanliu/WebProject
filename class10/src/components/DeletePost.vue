<template>
    <div>
        <a :href="link">{{ title }}</a>
        <button @click="$emit('deletePost', id)">删除</button>
    </div>
</template>

<script>

export default {
        props: ["id", "title", "link"],
        emits: ["deletePost"],
};
</script>
<style >
div {
    margin-bottom: 1em;
}

</style>