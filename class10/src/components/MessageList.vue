<template>
    <div>
        <p>{{ name }}</p>
        <span>{{ time }}</span>
        <p>{{ msg }}</p>
    </div>
</template>
<script>
export default {
    props: ["name", "time", "msg"],
    mounted() {
        console.log(this.name)
    },
}
</script>
<style scoped>
div {
    display: grid;
    grid-template-areas:
        "name time"
        "msg msg"
    ;
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    padding: 1rem;
    width: 250px;
}

span {
    justify-self: end;
}

div>p:last-child {
    margin-top: 1rem;
}
</style>