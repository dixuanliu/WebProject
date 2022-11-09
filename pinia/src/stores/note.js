import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useNoteStore = defineStore("notes", () => {
	const notes = ref([
		{
			id: 1,
			title: "Vue学习记录",
			content:
				"这是Vue学习记录这是Vue学习记录这是Vue学习记录这是Vue学习记录这是Vue学习记录",
		},
		{
			id: 2,
			title: "React学习记录",
			content:
				"这是React学习记录这是React学习记录这是React学习记录这是React学习记录这是React学习记录",
		},
		{
			id: 3,
			title: "JavaScript学习记录",
			content:
				"这是JavaScript学习记录这是JavaScript学习记录这是JavaScript学习记录这是JavaScript学习记录这是JavaScript学习记录",
		},
	]);

	const searchTerm = ref("");
	const searchNotes = computed(() => {
		if (searchTerm.value === "") {
			return notes.value;
		} else {
			return notes.value.filter((note) => {
				return note.title.includes(searchTerm.value);
			});
		}
	});

	return {
		notes,
		searchTerm,
		searchNotes,
	};
});
