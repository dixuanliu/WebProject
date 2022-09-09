<template>
    <div class="box"></div>
    <div class="control">
        <input type="range" min="0" max="360" v-model="degree">
        <p>当前角度 {{ degree }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            degree: 0,
        }
    },
    computed:{
        degreeStr(){
            return this.degree+ "deg"
        }
    }
}
</script>
<style scoped>
p {
    text-align: center;
}

.box {
    width: 250px;
    height: 250px;
    border-radius: 8px;
    background-color: hsl(300deg, 90%, 80%);
    transform: rotate(v-bind(degreeStr));
}
.control{
    margin-top: 57px;
}
input[type = "range"]{
    width: 100%;
    outline: 0;
    margin: 0;
    padding: 0;
}
</style>
