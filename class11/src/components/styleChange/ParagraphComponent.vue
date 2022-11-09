<template>
<div>
    <p><TextComponent>some words</TextComponent></p>
    <p><TextComponent>
        <div>father text</div>
    </TextComponent></p>
</div>
</template>
<script>
import TextComponent from './TextComponent.vue';
export default {
    components: { TextComponent }
}
</script>
<style scoped>
p{
    margin-top: 2rem;
    background-color: hsl(250deg, 100%, 62%);
    padding: 1rem;
    border-radius: 4px;
}
.text{
    color: hsl(30deg, 100%, 50%);
}
.text :deep(a){
    display: block;
    color: hsl(0deg,100%,90%);
}
</style>