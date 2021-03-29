<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

#nav {
  padding: 30px;
}

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

.title {
  color: #b01e0f;
}

.subtitle {
  color: #b01e0f;
}

.btn.btn-add.btn-danger {
  color: #fff;
  background-color: #b01e0f;
  border-color: #b01e0f;
  position: absolute;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
