const app = Vue.createApp({
    data() {
        return {
            comments:["好","非常好","赞"],
            comment:"",
            userName:"",
            year : 2000
        }
    },
    methods: {
        addComment(){
            this.comments.push(this.comment);
            this.comment = "";
        }
    },
})
app.mount("#app")