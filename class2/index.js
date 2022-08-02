const app = Vue.createApp({
    data(){
        return{
            username : "",
            gender:"",
            interest:[],
            occupation:"",
            intro:"",
        }
    },
    methods:{
        getUsername(e){
            this.username = e.target.value
        }
    },
    computed:{
        sign(){
            return "hello robot"
        }
    }
})

app.mount("#app")