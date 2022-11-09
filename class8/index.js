const app = Vue.createApp({
  data() {
    return {
      datas: [],
    };
  },
  methods: {
    async fetchPost() {
      const res = await fetch("./data.json");
      const postData = await res.json();
      this.datas = postData;
    },
  },
  created() {
    this.fetchPost();
  },
});
app.mount("#app");
