<template>
<ul>
    <li v-for="contact in contacts" :key="contact.id">
        <slot :contact = "contact"/>
    </li>
</ul>
</template>
<script>
export default{
    data(){
        return{
            contacts:[
                {
                    id:1,
                    name:"Bob",
                    number:"123456",
                },
                {
                    id:2,
                    name:"Alice",
                    number:"123465",
                },
                {
                    id:3,
                    name:"Tom",
                    number:"123365",
                }
            ]
        }
    }
}
</script>