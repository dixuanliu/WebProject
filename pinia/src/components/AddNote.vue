<template>
	<h2>添加新笔记</h2>
	<form @submit.prevent="addNote">
		<input
			v-model="note.title"
			class="title"
			type="text"
			placeholder="输入标题" />
		<textarea
			v-model="note.content"
			rows="6"
			class="content"
			placeholder="输入内容"></textarea>
		<button type="submit">提交</button>
	</form>
</template>
<script setup>
import { reactive } from "vue";
import { useNoteStore } from "../stores/note";

const note = reactive({
	title: "",
	content: "",
});
const noteStore = useNoteStore();
function addNote() {
	noteStore.$patch({
		notes: [
			...noteStore.notes,
			{
				id: noteStore.notes.length + 1,
				title: note.title,
				content: note.content,
			},
		],
		searchTerm: "",
	});

	note.content = "";
	note.title = "";
}
</script>
<style scoped>
.title {
	width: 40vw;
}

.content {
	width: 40vw;
}

button {
	width: 40vw;
}
</style>
