<template>
	<input type="text" placeholder="搜索笔记" v-model="noteStore.searchTerm">
</template>
<script setup>
import { useNoteStore } from '../stores/note';

const noteStore = useNoteStore()

</script>