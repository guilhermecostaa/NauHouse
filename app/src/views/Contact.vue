<template>
  <div id="contact">
    <div class="container-fluid">
      <div class="row align-items-center d-flex justify-content-center">
        <h3 class="subtitle mt-5">NauHouse</h3>
      </div>
      <div class="row align-items-center d-flex justify-content-center mt-3">
        <p class="mr-2 ml-2">
          <b-icon-house-door-fill /> NauHouse - Vila do Conde | Avenida Dr. João
          Canavarro, 201 | 4480-668 Vila do Conde
        </p>
      </div>
      <div class="row align-baseline d-flex justify-content-center">
        <p class="mr-2 ml-2"><b-icon-telephone-fill /> +351 252 167 609</p>
      </div>
      <div class="row align-items-center d-flex justify-content-center">
        <p class="mr-2 ml-2"><i class="fas fa-envelope"></i> geral@nauhouse.pt</p>
      </div>
      <div class="row align-items-center d-flex justify-content-center">
        <h3 class="subtitle mt-5">Contacto Direto</h3>
      </div>

      <div class="mb-5">
        <b-form @submit.prevent="sendEmail">
          <!-- Nome Telemovel-->
          <div class="row mt-3">
            <div class="col-md-6 col-sm-12">
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
            <div class="col-md-6 col-sm-12">
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
            class="row align-items-center d-flex justify-content-center mt-5 mb-5"
          >
            <b-button class="btn-add mt-5 mb-5" squared type="submit" variant="danger"
              >Contactar</b-button
            >
          </div>
        </b-form>
      </div>
    </div>
    <div id="footer" class="mt-5" style="width: 100%">
        <Footer />
      </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import emailjs from "emailjs-com";
export default {
  name: "Contact",
  components: {
    Footer,
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        desc: "",
      },
    };
  },
  methods: {
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_7r1oyel",
          "template_kwejni9",
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
  },
};
</script>

<style>
#contact p {
  text-align: left;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>