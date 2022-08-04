const app = Vue.createApp({
    data(){
        return{
            text:'<p>this is a <span style = "color:red;">test</span> text<p>',
            list:[1,2,3]
        }
    }
})

app.mount("#app")