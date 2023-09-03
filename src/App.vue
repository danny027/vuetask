<template>
  <!-- <button @click="counter.addMessage('user1' , 'this is a msg')">Add</button> -->
  <SideBarVue></SideBarVue>
</template>

<script>
import SideBarVue from "./views/SideBar.vue";
import { useCounterStore } from "./store/counter";
export default {
  name: "App",
  components: {
    SideBarVue,
  },
  setup() {
    const counter = useCounterStore();
    return { counter };
  },
  // methods: {
  //   handleCheck() {
  //     counter.addMessage("user1", "this is a msg");
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
