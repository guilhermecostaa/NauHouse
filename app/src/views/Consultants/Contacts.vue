<template>
  <div class="container-fluid">
    <h3 class="title mt-4 ml-3">Adicionar Contacto</h3>
    <div class="mb-5 ml-3">
      <b-form @submit.prevent="addContact">
        <!-- Nome-->
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
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <b-form-group
              id="input-phone"
              label="Telemóvel"
              label-for="input-phone"
            >
              <b-form-input
                name="phone"
                id="input-phone"
                v-model="form.number"
                type="number"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-sm-12">
            <b-form-group
              id="input-status"
              label="Estado"
              label-for="input-status"
            >
              <b-form-input
                name="status"
                id="input-status"
                v-model="form.status"
                type="text"
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
                v-model="form.description"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </div>
        </div>

        <div
          class="row align-items-center d-flex justify-content-center mt-5 mb-5"
        >
          <b-button class="btn-add mt-5 mb-5" type="submit" variant="danger"
            >Adicionar</b-button
          >
        </div>
      </b-form>
    </div>

    <div class="dataTable container-fluid mt-5">
      <DataTable
        name="contacts"
        :items="getContacts"
        :fields="['name', 'number', 'description', 'status', 'actions']"
        type="contacts"
      ></DataTable>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DataTable from "@/components/DataTable.vue";
export default {
  name: "Contacts",
  components: {
    DataTable,
  },
  created() {
    this.loadContacts();
    this.$store.subscribe((mutation) => {
      switch (mutation.type) {
        case "ADD_CONTACT":
          this.loadContacts();
          break;
        case "EDIT_CONTACT":
          this.loadContacts();
          break;
        case "DELETE_CONTACT":
          this.loadContacts();
          break;
      }
    });
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        number: "",
        status: "",
        description: "",
      },
      contacts: [],
      verifyEmail: false,
      verifyNumber: false,
    };
  },
  methods: {
    async loadContacts() {
      try {
        const response = await this.$http.get(
          `/contacts/${this.getLoggedUser.id_user}`
        );
        if (response.status === 200) {
          this.contacts = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async addContact() {
      try {
        this.verifyEmail = false;
        this.verifyNumber = false;
        for (let i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i].number == this.form.number) {
            this.verifyNumber = true;
          }
          if (this.contacts[i].email === this.form.email) {
            this.verifyEmail = true;
          }
        }
        if (this.verifyNumber) {
          this.$swal({
            text: `Já tem um contacto com esse número!`,
            icon: "error",
            timer: 2000,
            button: false,
          });
        } else if (this.verifyEmail) {
          this.$swal({
            text: `Já tem um contacto com esse email!`,
            icon: "error",
            timer: 2000,
            button: false,
          });
        } else {
          const response = await this.$http.post(`/contacts`, {
            name: this.form.name,
            number: this.form.number,
            desc: this.form.description,
            status: this.form.status,
            email: this.form.email,
            id: this.getLoggedUser.id_user,
          });
          console.log(response);
          this.$swal({
            text: `Contacto Adicionada!`,
            icon: "success",
            button: false,
            timer: 2000,
          });
          this.$store.commit("ADD_CONTACT", "Contacto Adicionado");
          this.form.name = "";
          this.form.number = "";
          this.form.description = "";
          this.form.status = "";
          this.form.email = "";
        }
      } catch (err) {
        if (err) {
          this.$swal({
            text: `Ups occoreu um erro!`,
            icon: "error",
            timer: 2000,
            button: false,
          });
          console.log(err);
        }
      }
    },
  },
  computed: {
    getContacts() {
      return this.contacts;
    },
    ...mapGetters(["getLoggedUser"]),
  },
};
</script>

<style>
</style>