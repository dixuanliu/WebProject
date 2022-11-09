const app = Vue.createApp({
    data() {
        return {
            todos:[
                {
                    id:"1",
                    content:"todo-one"
                },
                {
                    id:"2",
                    content:"todo-two"
                },
                {
                    id:"3",
                    content:"todo-three"
                }
            ]
        }
    },
    methods: {
        handleClick(id,e){
            alert(id+","+e.clientX+","+e.clientY);
        },
        showContent(content){
            alert(content)
        },
        handleLiClick(){
            alert("1")
        },
        handleUlClick(){
            alert('0')
        }

    },
})
app.mount("#app")