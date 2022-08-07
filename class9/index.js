import ComponentA from "./components/ComponentA.js";
import ComponentC from "./components/ComponentC.js";

const app = Vue.createApp({
    components:{
        ComponentA,
        ComponentC,
      }
});
// app.component("WordCount", {
//   template: `
//     <div>
//         <input v-model="content" />
//         <p>你输入了{{count}}个字符</p>        
//     </div>
//     `,
//   data() {
//     return {
//       content: "",
//     };
//   },
//   computed: {
//     count() {
//       return this.content.length;
//     },
//   },
// });
const vm = app.mount("#app");
