<template>
    <button @click="onclick('点击了按钮')">按钮一</button>
</template>
<script>
export default {
    props: ["onclick"]
}
</script>