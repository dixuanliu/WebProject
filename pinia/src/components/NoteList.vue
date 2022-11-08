<template>
	<div style="border-bottom: 1px solid grey">
		<div v-for="note in noteStore.searchNotes" :key="note.id">
			<h2>{{ note.title }}</h2>
			<article>
				<p>{{ note.content }}</p>
			</article>
		</div>
	</div>
</template>
<script setup>
import { useNoteStore } from "../stores/note";
const noteStore = useNoteStore();
</script>
