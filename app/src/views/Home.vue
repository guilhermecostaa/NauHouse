<template>
  <div class="home">
    <div id="homeImgFilter mb-5">
      <img src="@/assets/img/Home.png" class="img-fluid" alt="Home" />
      <div class="filterTop">
        <b-list-group horizontal="sm" class="listgroup">
          <b-list-group-item>Vender</b-list-group-item>
          <b-list-group-item>Arrendar</b-list-group-item>
          <b-list-group-item>Trespasse</b-list-group-item>
          <b-list-group-item>Outros</b-list-group-item>
        </b-list-group>
      </div>

      <div class="filterDown">
        <b-form inline>
          <b-form-select
            v-model="selected"
            :options="options"
            class="selectForm"
          >
            <template #first>
              <b-form-select-option class="selectForm" :value="null" disabled
                >------- Todos -------</b-form-select-option
              >
            </template>
          </b-form-select>

          <b-form-select
            v-model="selected"
            :options="options"
            class="selectForm"
          >
            <template v-slot:first>
              <b-form-select-option :value="null" disabled
                >------- Distrito -------</b-form-select-option
              >
            </template>
          </b-form-select>

          <b-form-select
            v-model="selected"
            :options="options"
            class="selectForm"
          >
            <template #first>
              <b-form-select-option :value="null" disabled
                >------- Concelho -------</b-form-select-option
              >
            </template>
          </b-form-select>

          <b-button class="btn btn-search"
            ><b-icon-search></b-icon-search
          ></b-button>
        </b-form>
      </div>
    </div>

    <div class="bottom">
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Footer,
  },
};
</script>

<style scoped>
.filterTop {
  position: absolute;
  top: 90%;
  left: 35%;
  margin: -25px 0 0 -25px;
  border-radius: 0px;
}

.filterDown {
  position: absolute;
  top: 96%;
  left: 35%;
  margin: -25px 0 0 -25px;
  border-radius: 0px;
}

#homeImgFilter .list-group-item {
  position: relative;
  background-color: #9e080b;
  opacity: 0.6;
  color: white !important;
  border-radius: 0px;
}

#homeImgFilter .list-group-item.active {
  background-color: #ff170f;
  color: white !important;
}

#homeImgFilter .selectForm {
  color: black !important;
  border-radius: 0px;
}

#homeImgFilter .btn-search {
  background-color: #9e080b;
  border-style: none;
  border-radius: 0px;
}

.bottom {
  bottom: 0%;
}
</style>
