<template>
  <div class="home">
    <div id="homeImgFilter">
      <img src="@/assets/img/Home.png" class="img-fluid" alt="Home" />
      <div>
        <b-nav tabs align="center">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Link with a long name </b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
      <div class="row">
        <div class=".col-md-6 .offset-md-3">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                class="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
                >Home</a
              >
              <a
                class="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                >Profile</a
              >
              <a
                class="nav-item nav-link"
                id="nav-contact-tab"
                data-toggle="tab"
                href="#nav-contact"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
                >Contact</a
              >
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <b-form inline>
                <b-form-select
                  v-model="selected"
                  :options="options"
                  class="selectForm"
                >
                  <template #first>
                    <b-form-select-option
                      class="selectForm"
                      :value="null"
                      disabled
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
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <b-form inline>
                <b-form-select
                  v-model="selected"
                  :options="options"
                  class="selectForm"
                >
                  <template #first>
                    <b-form-select-option
                      class="selectForm"
                      :value="null"
                      disabled
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
            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <b-form inline>
                <b-form-select
                  v-model="selected"
                  :options="options"
                  class="selectForm"
                >
                  <template #first>
                    <b-form-select-option
                      class="selectForm"
                      :value="null"
                      disabled
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
        </div>
      </div>
    </div>
    <div id="information" class="container mt-5">
      <div class="row mt-5">
        <div class="col-lg-4 info_container">
          <div class="image">
            <img src="@/assets/img/vender-e-arrendar.png" alt="" />
          </div>
          <div class="text">
            <h5>Quer arrendar ou vender o seu imóvel?</h5>
            <p>
              Quer se trate de uma casa, um apartamento, uma loja bem
              localizada, um armazém ou até um espaço comercial. Estaremos à sua
              disposição. CONTACTE-NOS
            </p>
          </div>
        </div>
        <div class="col-lg-4 info_container">
          <div class="image">
            <img src="@/assets/img/pesquisar.png" alt="" />
          </div>
          <div class="text">
            <h5>Pesquisa do Imóvel</h5>
            <p>
              Estamos aqui para ajudá-lo a encontrar sua casa de sonho, a loja
              ou armazém para o seu negócio. Seguindo os seus requisitos,
              orçamento e localização, podemos ajudá-lo a encontrar o ideal.
              FALE CONNOSCO
            </p>
          </div>
        </div>
        <div class="col-lg-4 info_container">
          <div class="image">
            <img src="@/assets/img/comprar.png" alt="" />
          </div>
          <div class="text">
            <h5>Comprar um Imóvel</h5>
            <p>
              Antes de comprar um imóvel, permita que o ajudemos na tomada de
              decisão. A nossa experiência vai dar-lhe com certeza uma visão
              mais detalhada e acertada. AGENDE
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="footer" class="mt-5">
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
  background-color: #b01e0f;
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
  background-color: #b01e0f;
  border-radius: 0px;
  border-color: rgb(195, 205, 210);
}

#information .info_container .image {
  display: inline-block;
  vertical-align: top;
  width: 30%;
}

#information .info_container .text {
  display: inline-block;
  width: 70%;
  @media (max-width: 620px) {
    width: 100%;
  }
}
</style>
