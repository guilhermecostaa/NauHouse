<template>
  <div class="home">
    <div id="homeImgFilter">
      <img src="@/assets/img/Home.png" class="img-fluid" alt="Home" />
      <div class="row justify-content-center mr-3 ml-3">
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
                >Vender</a
              >
              <a
                class="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                >Arrendar</a
              >
              <a
                class="nav-item nav-link"
                id="nav-contact-tab"
                data-toggle="tab"
                href="#nav-contact"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
                >Trespasse</a
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
                  v-model="category"
                  :options="
                    categories.map((category) => {
                      return {
                        text: category.name,
                        value: category.id_category,
                      };
                    })
                  "
                  class="selectForm"
                >
                  <template #first>
                    <b-form-select-option class="selectForm" value="" disabled
                      >------- Categoria -------</b-form-select-option
                    >
                  </template>
                </b-form-select>

                <b-form-select
                  v-model="district"
                  :options="
                    districts.map((district) => {
                      return {
                        text: district,
                        value: district,
                      };
                    })
                  "
                  class="selectForm"
                >
                  <template v-slot:first>
                    <b-form-select-option value="" disabled
                      >------- Distrito -------</b-form-select-option
                    >
                  </template>
                </b-form-select>

                <b-form-input
                  id="input-bedrooms"
                  v-model="bedrooms"
                  placeholder="------- Quartos -------"
                  type="number"
                ></b-form-input>

                <b-button class="btn btn-search" @click="searchSellProperty()"
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
                  v-model="category"
                  :options="
                    categories.map((category) => {
                      return {
                        text: category.name,
                        value: category.id_category,
                      };
                    })
                  "
                  class="selectForm"
                >
                  <template #first>
                    <b-form-select-option class="selectForm" value="" disabled
                      >------- Categoria -------</b-form-select-option
                    >
                  </template>
                </b-form-select>

                <b-form-select
                  v-model="district"
                  :options="
                    districts.map((district) => {
                      return {
                        text: district,
                      };
                    })
                  "
                >
                  <template v-slot:first>
                    <b-form-select-option value="" disabled
                      >------- Distrito -------</b-form-select-option
                    >
                  </template>
                </b-form-select>

                <b-form-input
                  id="input-bedrooms"
                  v-model="bedrooms"
                  placeholder="------- Quartos -------"
                  type="number"
                ></b-form-input>

                <b-button class="btn btn-search" @click="searchRentProperty()"
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
                  placeholder="Categoria"
                  v-model="category"
                  :options="
                    categories.map((category) => {
                      return {
                        text: category.name,
                        value: category.id_category,
                      };
                    })
                  "
                  class="selectForm"
                >
                  <template #first>
                    <b-form-select-option class="selectForm" value="" disabled
                      >------- Categoria -------</b-form-select-option
                    >
                  </template>
                </b-form-select>

                <b-form-select
                  v-model="district"
                  :options="
                    districts.map((district) => {
                      return {
                        text: district,
                        value: district,
                      };
                    })
                  "
                >
                  <template v-slot:first>
                    <b-form-select-option value="" disabled
                      >------- Distrito -------</b-form-select-option
                    >
                  </template>
                </b-form-select>

                <b-form-input
                  id="input-bedrooms"
                  v-model="bedrooms"
                  placeholder="------- Quartos -------"
                  type="number"
                ></b-form-input>

                <b-button class="btn btn-search" @click="searchOtherProperty()"
                  ><b-icon-search></b-icon-search
                ></b-button>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 container">
      <h3 class="subtitle mt-4">Destaques</h3>
      <span v-if="this.spotlight.length === 0">SEM IMÓVEIS DESTACADOS</span>
      <div v-else>
        <div class="cards">
          <b-row>
            <PropertyCard
              class="mt-3 col-md-4 col-sm-6 col-xs-12"
              v-for="property in spotlight"
              :key="property.id_property"
              :property="property"
            ></PropertyCard>
          </b-row>
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
import PropertyCard from "@/components/PropertyCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Footer,
    PropertyCard,
  },
  data() {
    return {
      properties: [],
      spotlight: [],
      districts: [],
      district: "",
      categories: [],
      category: "",
      counties: [],
      bedrooms: "",
    };
  },
  created() {
    this.loadProperties();
    this.loadCategories();
    console.log(this.properties);
    console.log(this.districts)
  },
  methods: {
    async loadProperties() {
      try {
        const response = await this.$http.get(`/property`);
        if (response.status === 200) {
          this.properties = response.data.content;
          this.getSpotlightProperties();
          this.loadDistricts();
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    getSpotlightProperties() {
      let highlight = this.properties.filter(
        (property) => property.id_status === 11
      );
      if (highlight.length > 6) {
        for (let i = 0; i < 6; i++) {
          console.log("entrei");
          const random = Math.floor(Math.random() * highlight.length);
          this.spotlight.push(highlight[random]);
        }
      } else {
        this.spotlight = highlight;
      }
    },
    async loadCategories() {
      try {
        const response = await this.$http.get(`/category`);
        if (response.status === 200) {
          this.categories = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    loadDistricts() {
      console.log(this.districts);
      for (let i = 0; i < this.properties.length; i++) {
        this.districts.push(this.properties[i].district);
      }
      this.districts.sort();
      for (let i = 0; i < this.districts.length; i++) {
        if (this.districts[i] == this.districts[i - 1]) {
          this.districts.splice(i, 1);
        }
      }
    },
    searchSellProperty() {
      this.$router.push({ name: "ListProperties" });
      this.$store.commit("ADD_CATEGORY", this.category);
      this.$store.commit("ADD_PURPOSE", 9);
      this.$store.commit("ADD_DISTRICT", this.district);
      this.$store.commit("ADD_BEDROOMS", this.bedrooms);
    },
    searchRentProperty() {
      this.$router.push({ name: "ListProperties" });
      this.$store.commit("ADD_CATEGORY", this.category);
      this.$store.commit("ADD_PURPOSE", 8);
      this.$store.commit("ADD_DISTRICT", this.district);
      this.$store.commit("ADD_BEDROOMS", this.bedrooms);
    },
    searchOtherProperty() {
      this.$router.push({ name: "ListProperties" });
      this.$store.commit("ADD_CATEGORY", this.category);
      this.$store.commit("ADD_PURPOSE", 10);
      this.$store.commit("ADD_DISTRICT", this.district);
      this.$store.commit("ADD_BEDROOMS", this.bedrooms);
    },
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

#homeImgFilter .nav-item {
  position: relative;
  background-color: #b01e0f;
  color: white !important;
  border-radius: 0px;
}

#homeImgFilter .nav-item.active {
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
