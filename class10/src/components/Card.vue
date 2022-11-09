<template>
    <div class="card">
        <div class="title">
            <slot name = "title"></slot>
        </div>
        <div class = "content">
            <slot name = "content"></slot>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.card {
    padding: 20px 20px;
    border: 1px solid lightpink;
    border-radius: 5px;
}
.title{
    font-size: larger;
    font-weight: bold;
}
</style>