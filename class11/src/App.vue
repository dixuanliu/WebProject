<template>
  <div>
    <DulVmodel v-model:searchTerm="searchTerm" v-model:category="category" />
  </div>
  <!--   <div class="container">
    <PaginationComponent :totalPage="totalPage" :DefaultCurrentPage="currentPage"></PaginationComponent>
    <button @click="totalPage += 1">增加页数</button>
  </div>
  <div>
    <ButtonWithProps :onclick="handleClick" />
    <ButtonWithEmit @customClick="handleClick"></ButtonWithEmit>
  </div>
  <div>
    <MovieCard />
  </div>
  <div>
    <ContactList>
      <template v-slot:default="props">
        <template v-slot="props"></template>//省略default
        <template v-slot="contact"></template> //直接使用解构语法
        <p>{{ props.contact.name }}</p>
        <p>{{ props.contact.number }}</p>
      </template>
    </ContactList>
  </div>
  <ParagraphComponent></ParagraphComponent>
  <div>
    <StyleChange></StyleChange>
  </div> -->
  <!-- <div>
    <VmodelImport v-model="search" />
    <p style="margin-top:20px ; margin-left: 73px;">{{ search }}</p>
  </div> -->

</template>

<script>
import DulVmodel from './components/DulVmodel.vue';
// import VmodelImport from "./components/VmodelImport.vue";
// import StyleChange from './components/StyleChange.vue'
// import PaginationComponent from './components/PaginationComponent.vue';
// import ButtonWithProps from './components/ButtonWithProps.vue';
// import ButtonWithEmit from './components/ButtonWithEmit.vue';
// import MovieCard from './components/movie/MovieCard.vue';
// import ContactList from './components/ContactList.vue';
// import ParagraphComponent from './components/styleChange/ParagraphComponent.vue';



export default {
  components: {
    DulVmodel
  },
  data() {
    return {
      totalPage: 6,
      currentPage: 4,
      search: "",
      searchTerm: "",
      category: "default"
    }
  },
  methods: {
    handleClick(value) {
      alert(value);
    }
  }
}
</script>

<style>
.container {
  width: 60vw;
}
</style>
