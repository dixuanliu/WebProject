const app = Vue.createApp({
    data(){
        return{
            text:'<p>this is a <span style = "color:red;">test</span> text<p>',
            list:[1,2,3],
            attr:"placeholder",
            value:"请在此输入",
            event:"change",
        }
    },
    methods: {
        handleChange(){
            console.log("changed")
        }
    },
})

app.mount("#app")