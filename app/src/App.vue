<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
   created() {
    window.addEventListener("beforeunload", () => {
      this.$destroy();
    });
    if (localStorage.jwt) {
      this.SET_JWT_TOKEN(JSON.parse(localStorage.jwt));
    }
  },
  destroyed() {
    localStorage.jwt = JSON.stringify(this.getJwtToken);
  },
  methods: {
    ...mapMutations([
      "SET_JWT_TOKEN",
    ])
  },
  computed: {
    ...mapGetters([
      "getJwtToken",
    ])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  src: local("Avenir"),
  url(./fonts/avenir_ff/AvenirLTStd-Book.otf) format("OpenType");
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
  font-family: "Georgia";
}

.subtitle {
  color: #b01e0f;
  font-family: "Georgia";
}

.btn.btn-add.btn-danger {
  color: #fff;
  background-color: #b01e0f;
  border-color: #b01e0f;
  position: absolute;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.h3{
  font-family: "Georgia";
}
</style>
