const app = Vue.createApp({
    data() {
        return {
            blogPost:{
                title:"blog1",
                name:"bobby",
                time:"2022/2/2",
            },
            toDos:[
                {
                    id:2,
                    content:"待办2"
                },
                {
                    id:1,
                    content:"待办1"
                },
                
                {
                    id:3,
                    content:"待办3"
                }
            ]
        }
    },
})
app.mount("#app")