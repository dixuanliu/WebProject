<template>
  <main>
    <div>
      <DeletePost v-for="post in posts" :key="post.id" v-bind="post" @deletePost="handleDeletePost" />
    </div>
    <Card>
      <template #title>
        <div>
          Card Name
        </div>
      </template>
      <template #content>
        <div>
          <p>this is content</p>
          <p>any HTML content</p>
          <a href="http://someurl.com">any type</a>
        </div>
      </template>

    </Card>
  </main>
</template>

<script>
import DeletePost from "./components/DeletePost.vue";
import Card from "./components/Card.vue";

export default {
  components: {
    DeletePost,
    Card
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Post 1", link: "https://some.url.com" },
        { id: 2, title: "Post 2", link: "https://some.url.com" },
        { id: 3, title: "Post 3", link: "https://some.url.com" },
      ],
    };
  },
  methods: {
    handleDeletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(#212943 0.6000000000000001px,
      #0f141c 0.6000000000000001px);
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

a {
  color: hsl(250deg, 100%, 90%);
  text-decoration: none;
}

button {
  border: none;
  background: linear-gradient(90deg,
      hsl(240deg, 50%, 50%),
      hsl(280deg, 50%, 50%));
  padding: 3px 4px;
  margin-left: 12px;
  border-radius: 4px;
  color: white;
}
</style>
