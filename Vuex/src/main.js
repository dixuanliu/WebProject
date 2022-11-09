import { createApp } from "vue";
import "../../style/main.scss";
import App from "./App.vue";
import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			user: {},
		};
	},
	mutations: {
		setData(state, payload) {
			state.user = payload;
		},
	},
	actions: {
		async fetchData() {
			try {
				const predata = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);
				const data = await predata.json();
				store.commit("setData", data);
			} catch (err) {
				console.log(err);
			}
		},
	},
});
const app = createApp(App);
app.use(store);
app.mount("#app");
