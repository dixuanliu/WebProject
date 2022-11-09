<template>
    <div class="wrap">
        <div class="span">
            <span>Search</span>
        </div>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>
<script>
export default {
    props: ["modelValue"],
    emits: ["update:modeValue"]
}
</script>
<style>
.wrap{
    display: flex;
    flex-direction: row;
}
input {
    margin-left: 1rem;
}

.span {
    width: 50px;
    display: inline-block;
    text-align: left;
    overflow: hidden;
    white-space: normal;
    word-break: break-all;
}
</style>