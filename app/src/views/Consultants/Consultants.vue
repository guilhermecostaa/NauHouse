<template>
  <div id="consultores" class="container-fluid">
    <div class="row">
      <h1 class="title mt-4 ml-4">Consultores</h1>
      <b-button
        squared
        class="btn-area mt-5 mr-3 right"
        type="submit"
        variant="danger"
        @click="btnReserveAreaClicked"
        >Área Reservada</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btnReserveAreaClicked() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
button.btn.btn-area.right {
  color: #fff;
  background-color: #b01e0f;
  border-color: #b01e0f;
  position: absolute;
  left: 85%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>