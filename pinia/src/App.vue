<script setup></script>

<template>
	<main>
			<SearchNote></SearchNote>
			<NoteList></NoteList>
			<AddNote></AddNote>
	</main>
</template>

<style>
*{
  box-sizing: border-box;
  margin: 10px 0;
}
body {
  display: grid;
  place-items: center;
}

main{
  display:flex ;
  flex-direction: column;
}
</style>
