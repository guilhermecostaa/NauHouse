<template>
  <div class="container-fluid">
    <div class="mt-3" style="background-color: #fafafa">
      <div class="row ml-3 mt-3">
        <div class="col-md-4 col-sm-12">
          <h4 class="mt-5">{{ this.property[0].title }}</h4>
          <h5 class="mt-5 mb-0">{{ this.property[0].subtitle }}</h5>
          <p>NHPT-{{ this.$route.params.id }}</p>

          <p class="mt-3 mb-0">
            Área Bruta: {{ this.property[0].construction_gross_area }} m²
          </p>
          <p class="MT-1">Área: {{ this.property[0].usable_area }} m²</p>

          <p class="mt-3 mb-5">Valor: {{ this.property[0].price }}€</p>
          <!--<b-button
            @click="openVideo"
            class="btn-danger mt-3 mb-5 mr-3"
            squared
            variant="danger"
            ><b-icon-camera-video-fill /> Video</b-button
          >-->
          <b-button
            @click="openImages"
            class="btn-danger mt-3 mb-5"
            squared
            variant="danger"
            ><b-icon-images /> Imagens</b-button
          >
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <img
            src="@/assets/img/Home.png"
            class="img-fluid mt-3 mr-5 mx-auto d-block"
            @click="openImages"
          />
          <img
            src="@/assets/img/Home.png"
            class="img-fluid mt-3 mr-5 mx-auto d-block"
            @click="openImages"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <img
            src="@/assets/img/Home.png"
            class="img-fluid mt-3 mr-5"
            alt="Responsive image"
            @click="openImages"
          />
          <img
            src="@/assets/img/Home.png"
            class="img-fluid mt-3 mb-3 mr-5"
            alt="Responsive image"
            @click="openImages"
          />
        </div>
      </div>
    </div>

    <div class="row ml-3 mt-3">
      <div class="col-md-8 col-sm-12">
        <h4 class="mt-3 mb-3">Caracteristicas</h4>
        <div class="row mt-2">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <p>
              <i class="fas fa-bed mr-1"></i>
              {{ this.property[0].bedroom }} quartos
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <p>
              <i class="fas fa-bed mr-1"></i>
              {{ this.property[0].suites }} suítes
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <p>
              <i class="fas fa-toilet mr-1"></i>
              {{ this.property[0].bathrooms }} WC's
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <p>
              <i class="fas fa-car mr-1"></i>
              {{ this.property[0].closed_garage }} Garagens
            </p>
          </div>
        </div>
        <div class="column_wrapper mt-3">
          <ul id="example-1">
            <li v-for="item in items" :key="item.id_characteristic">
              <p class="mt-1">
                <b-icon icon="check" class="red" /> {{ item.characteristic }}
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
            <p><i class="fas fa-envelope"></i> {{ this.user[0].email }}</p>

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
          <GoogleMaps :center="this.property[0].address"></GoogleMaps>
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
          <div class="row mt-3" v-show="false">
            <div class="col-sm-12">
              <b-form-group id="input-id" label="Id" label-for="input-id">
                <b-form-input
                  id="input-id"
                  v-model="form.id"
                  type="number"
                  name="id"
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

    <b-modal ref="mdlContact" v-model="modalImages" hide-footer>
      <div class="d-block text-left">
        <!--<ImagesCarousel :slides="slides"></ImagesCarousel>-->
         <b-carousel
          id="carousel-2"
          v-model="slide"
          controls
          indicators
          background="#ababab"
          img-width= "1080"
          img-height= "960"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://nauhouse.pt/wp-content/uploads/2021/06/IMG_8269.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://nauhouse.pt/wp-content/uploads/2021/06/IMG_8269.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://nauhouse.pt/wp-content/uploads/2021/06/IMG_8270-Cópia-1024x623.jpg"
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </b-modal>

    <b-modal ref="mdlVideo" v-model="modalVideo">
      <!--Modal: Name-->
      <div
        class="modal fade"
        id="modal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <!--Content-->
          <div class="modal-content">
            <!--Body-->
            <div class="modal-body mb-0 p-0">
              <div
                class="embed-responsive embed-responsive-16by9 z-depth-1-half"
              >
                <video
                  type="video"
                  aspect="16by9"
                  poster="@/assets/img/Logo.png"
                  controls
                  class="video"
                >
                  <source
                    src="@/assets/video/video.mp4"
                    type="video/mp4"
                    size="1080"
                  />
                </video>
              </div>
            </div>
          </div>
          <!--/.Content-->
        </div>
      </div>
      <!--Modal: Name-->
    </b-modal>
  </div>
</template>


<script defer async src="https://maps.googleapis.com/maps/api/js?key="></script>
<script>
import GoogleMaps from "@/components/GoogleMaps.vue";
import { gmapApi } from "vue2-google-maps";
import { ImagesCarousel } from "@/components/ImagesCarousel";
import emailjs from "emailjs-com";
export default {
  name: "Property",
  components: {
    ImagesCarousel,
    GoogleMaps,
  },
  created() {
    this.loadProperty();
    this.loadCharacteristics();
    
    //this.initMap();
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        desc: "",
        id: `${this.$route.params.id}`,
      },
      images: [
        { src: "@/assets/img/Foto-1.png" },
        { src: "@/assets/img/Foto-2.png" },
        { src: "@/assets/img/Foto-3.png" },
      ],
      property: [],
      user: [],
      modalContact: false,
      modalVideo: false,
      modalImages: false,
      items: [],
      characteristics: [],
      characteristicsProperty: [],
      map: null,
      mapCenter: { lat: 0, lng: 0 },
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
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
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadCharacteristics() {
      try {
        const response = await this.$http.get(`/characteristics`);
        if (response.status === 200) {
          this.characteristics = response.data.content;
        }
        this.loadCharacteristicsProperty();
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadCharacteristicsProperty() {
      try {
        const response = await this.$http.get(
          `/characteristicsProperty/${this.$route.params.id}`
        );
        if (response.status === 200) {
          this.characteristicsProperty = response.data.content;
        }
        for (let i = 0; i < this.characteristicsProperty.length; i++) {
          for (let j = 0; j < this.characteristics.length; j++) {
            if (
              this.characteristics[j].id_characteristics ==
              this.characteristicsProperty[i].id_characteristics
            ) {
              this.items.push(this.characteristics[j]);
            }
          }
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_7r1oyel",
          "template_tvazc95",
          e.target,
          "user_ERkgj4TuWJz3216R2nMuM"
        )
        .then(
          (result) => {
            this.$swal({
              text: `Email enviado!`,
              icon: "success",
              timer: 2000,
              button: false,
            });
            this.modalContact = false;
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            this.$swal({
              text: "Ups! Ocorreu um erro! Tente de novo",
              icon: "error",
              timer: 2000,
              button: false,
            });
            console.log("FAILED...", error);
          }
        );
      // Reset form field

      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.desc = "";
    },
    openVideo() {
      this.modalVideo = true;
    },
    openImages() {
      this.modalImages = true;
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