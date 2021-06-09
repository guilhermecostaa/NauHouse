<template>
  <div class="container-fluid">
    <div class="mt-3" style="background-color: #fafafa">
      <div class="row ml-3 mt-3">
        <div class="col-md-4 col-sm-12">
          <h4 class="mt-5">{{ this.property[0].title }}</h4>
          <h5 class="mt-5 mb-0">{{ this.property[0].subtitle }}</h5>
          <p>NHPT-{{ this.$route.params.id }}</p>

          <p class="mt-3 mb-0">Área Bruta:</p>
          <p class="MT-1">Área:</p>

          <p class="mt-3 mb-5">Valor: {{ this.property[0].price }}€</p>
          <b-button class="btn-danger mt-3 mb-5 mr-3" squared variant="danger"
            ><b-icon-camera-video-fill /> Video</b-button
          >
          <b-button class="btn-danger mt-3 mb-5" squared variant="danger"
            ><b-icon-images /> Imagens</b-button
          >
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <img
            src="@/assets/img/Home.png"
            class="img-fluid mt-3 mr-5 mx-auto d-block"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <img
            src="@/assets/img/Home.png"
            class="img-fluid mt-3 mr-5"
            alt="Responsive image"
          />
          <img
            src="@/assets/img/Home.png"
            class="img-fluid mt-3 mb-3 mr-5"
            alt="Responsive image"
          />
        </div>
      </div>
    </div>

    <div class="row ml-3 mt-3">
      <div class="col-md-8 col-sm-12">
        <h4 class="mt-3 mb-3">Caracteristicas</h4>
        <div>
          <p>
            <b-icon-telephone-fill class="mr-2" />
            {{ this.property[0].bedroom }}
          </p>
          <p>
            <b-icon-telephone-fill class="mr-2" /> {{ this.property[0].suites }}
          </p>
          <p>
            <b-icon-telephone-fill class="mr-2" />
            {{ this.property[0].bathrooms }}
          </p>
          <p>
            <b-icon-telephone-fill class="mr-2" />
            {{ this.property[0].closed_garage }}
          </p>
        </div>
        <div class="column_wrapper">
          <ul id="example-1">
            <li v-for="item in items" :key="item.message">
              <p class="mt-1">
                <b-icon icon="check" class="red" /> {{ item.message }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="card mt-3" style="width: 18rem; float: right">
          <img class="card-img-top" src="@/assets/img/CarlosConceição.png" />
          <div class="card-body">
            <h5 class="card-title mb-0">{{ this.user[0].name }}</h5>

            <p class="mt-0 text">Consultor Imobiliário</p>
            <p><b-icon-telephone-fill /> +351 252167609</p>
            <p><b-icon-phone-fill /> {{ this.user[0].number }}</p>
            <p><b-icon-envelope /> {{ this.user[0].email }}</p>

            <div style="text-align: center">
              <b-button
                class="btn-danger mt-3 mb-2"
                squared
                variant="danger"
                @click="openModel()"
                >Contactar</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row ml-3 mt-3">
      <div class="col-md-6 col-sm-12">
        <h4 class="mt-3">Descrição</h4>
        <h5 class="mt-3 mb-2">{{ this.property[0].subtitle }}</h5>
        <p>{{ this.property[0].description }}</p>
      </div>
      <div class="col-md-6 col-sm-12">
        <h4 class="mt-3">Mapa</h4>
        <div id="myMap">
          <GoogleMaps :address="this.property.address"></GoogleMaps>
        </div>
      </div>
    </div>

    <b-modal ref="mdlContact" v-model="modalContact" hide-footer>
      <div class="d-block text-left">
        <!-- Form de Vender-->
        <b-form @submit.prevent="sendEmail">
          <!-- Nome Telemovel-->
          <div class="row mt-3">
            <div class="col-sm-12">
              <b-form-group id="input-name" label="Nome" label-for="input-name">
                <b-form-input
                  id="input-name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-phone"
                label="Telemóvel"
                label-for="input-phone"
              >
                <b-form-input
                  name="phone"
                  id="input-phone"
                  v-model="form.phone"
                  type="tel"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <!-- Email-->
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-email"
                label="Email"
                label-for="input-email"
              >
                <b-form-input
                  name="email"
                  id="input-email"
                  v-model="form.email"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <!-- Descrição -->
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-desc"
                label="Descrição"
                label-for="input-desc"
              >
                <b-form-textarea
                  name="desc"
                  label="Descrição"
                  id="textarea"
                  v-model="form.desc"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </div>
          </div>

          <div
            class="
              row
              align-items-center
              d-flex
              justify-content-center
              mt-5
              mb-5
            "
          >
            <b-button
              class="btn-add mt-5 mb-5"
              squared
              type="submit"
              variant="danger"
              >Contactar</b-button
            >
          </div>
        </b-form>
      </div>
    </b-modal>

    <ImagesCarousel> </ImagesCarousel>
  </div>
</template>


<script defer async src="https://maps.googleapis.com/maps/api/js?key="></script>
<script>
import GoogleMaps from '@/components/GoogleMaps.vue'
import { gmapApi } from "vue2-google-maps";
import { ImagesCarousel } from "@/components/ImagesCarousel";
export default {
  name: "Property",
  components: {
    ImagesCarousel,
    GoogleMaps
  },
  created() {
    this.loadProperty();
    this.initMap();
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        desc: "",
      },
      property: [],
      user: [],
      modalContact: false,
      items: [
        { message: "Foo" },
        { message: "Bar" },
        { message: "Foo" },
        { message: "Bar" },
        { message: "Foo" },
        { message: "Bar" },
        { message: "Foo" },
        { message: "Bar" },
        { message: "Foo" },
        { message: "Bar" },
        { message: "Foo" },
        { message: "Bar" },
        { message: "Foo" },
        { message: "Bar" },
        { message: "Foo" },
        { message: "Bar" },
      ],
      map: null,
      mapCenter: { lat: 0, lng: 0 },
    };
  },
  methods: {
    openModel() {
      this.modalContact = true;
    },
    async loadProperty() {
      try {
        const response = await this.$http.get(
          `/property/${this.$route.params.id}`
        );
        if (response.status === 200) {
          this.property = response.data.content;
        }
        console.log(this.property);
      } catch (err) {
        console.log(err.response);
      }
      this.loadUser();
    },
    async loadUser() {
      try {
        const response = await this.$http.get(
          `/users/${this.property[0].consultant_id}`
        );
        if (response.status === 200) {
          this.user = response.data.content;
        }
        console.log(this.user);
      } catch (err) {
        console.log(err.response);
      }
    },
    /*initMap() {
      let map = new google.maps.Map(document.querySelector("#myMap"), {
        center: { lat: 41.148481, lng: -8.606893 },
        zoom: 15,
      });
      let geocoder = new google.maps.Geocoder();
      /*----------------------------------------------
      //posicao inicial
      geocoder.geocode(
        { address: this.property.address },
        (results2, status) => {
          if (status == "OK") {
            map.setCenter(results2[0].geometry.location);
          } else {
            alert("Geocode was not sucessfull" + status);
          }
        }
      );
    },*/
  },
  computed: {
    google: gmapApi,
  },
};
</script>



<style>
.btn.btn-danger {
  color: #fff;
  background-color: #b01e0f;
  border-color: #b01e0f;
}

ul {
  list-style: none;
  padding: 0px 0px;
}

ul li::before {
  content: "";
}

.column_wrapper {
  column-count: 4;
}

.red {
  color: #b01e0f;
  border-color: #b01e0f;
  size: 10px;
}
</style>