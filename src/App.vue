<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MessageList from "./components/MessageList.vue"

export default {
  name: "App",
  data: () => ({ messages: ['Hey John', 'Howdy Paco']}),
  components: {
    HelloWorld,
    MessageList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
