<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./../public/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div id="my-div">THIS IS MY DIV</div>
  <div id="another-div">THIS IS MY ANOTHER DIV</div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped lang="stylus">
@import "./assets/global.styl";

#my-div {
  padding: 1rem;
  color: $c-text;
  background-color: $c-bg;
}
#another-div {
  padding: 1rem;
  color: $c-yellow;
  background-color: $c-blue;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
