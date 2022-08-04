const app = Vue.createApp({
    data() {
        return {
            fontSize:16,
            textclass:"text-blue",
            stateclass:"danger",
            hidden:false,
        }
    },
    computed:{
        pStyle(){
            return{
                color : "white",
                fontSize : this.fontSize + "px",
            }
        }
    },
})
app.mount("#app")