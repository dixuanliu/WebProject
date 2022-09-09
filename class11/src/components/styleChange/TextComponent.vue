<template>
    <span class="text">
        <slot />
        <a href="#">this is link</a>
    </span>
</template>
<script>
export default {}
</script>
<style scoped>
:slotted(div){
    color: hsl(100deg, 60%, 50%);
}
</style>
