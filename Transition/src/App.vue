<template>
  <main>
    <div class="container">
      <Transition
        name="fade"
        mode="out-in"
      >
        <div
          class="box"
          :class="box"
          :key="box"
        ></div>
      </Transition>
    </div>
  </main>
</template>

<script setup>
import { computed, ref, Transition, reactive } from 'vue';

const boxes = ["box1", "box2", "box3"];
const current = ref(0);
const box = computed(() => boxes[current.value]);

setInterval(() => {
  current.value = (current.value + 1) % boxes.length
}, 1500)

</script>

<style scoped lang="scss">
.container {
  display: grid;
  height: 300px;
}

.box {
  width: 100px;
  height: 100px;
  padding: 0.5em 1.4em;
  border-radius: 4px;
  color: white;
  /* 方法二 */
  // grid-area: 1 / 1 / 2 / 2;
}

.box1 {
  background: linear-gradient(45deg,
      hsl(240deg, 60%, 50%),
      hsl(300deg, 90%, 50%));
}

.box2 {
  background: linear-gradient(45deg,
      hsl(140deg, 60%, 50%),
      hsl(200deg, 90%, 50%));
}

.box3 {
  background: linear-gradient(45deg,
      hsl(0deg, 60%, 50%),
      hsl(50deg, 90%, 50%));
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.7s ease-in-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}
</style>
