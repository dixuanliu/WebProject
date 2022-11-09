<template>
    <button @click="$emit('customClick', '点击了按钮')">按钮二</button>
</template>
<script>
export default {
    emits: ["customClick"]
}
</script>