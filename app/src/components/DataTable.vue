<template>
  <div>
    <b-row>
      <b-col>
        <b-form-input
          v-model="filter"
          type="search"
          placeholder="Procurar"
        ></b-form-input>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col>
        <b-table
          :bordered="bordered"
          :hover="hover"
          :items="items"
          :fields="fields"
          :filter="filter"
          :perPage="perPage"
          :currentPage="currentPage"
          @row-selected="$emit('clicked-student', 1)"
        >
          <template v-slot:cell(actions)="data">
            <b-button
              class="mr-2"
              variant="primary"
              @click="sellHouse(data.item)"
              v-if="type == 'property'"
              >Vender</b-button
            >
            <b-button
              class="mr-2"
              variant="primary"
              @click="editItem(data.item)"
              >Editar</b-button
            >
            <b-button variant="danger" @click="deleteItem(data.item)"
              >Apagar</b-button
            >
          </template>
        </b-table>
        <b-pagination
          align="center"
          v-model="currentPage"
          :per-page="perPage"
          :total-rows="totalRows"
        ></b-pagination>
      </b-col>
    </b-row>

    <b-modal ref="mdlupdateNew" v-model="modal" hide-footer>
      <div class="d-block text-left">
        <!-- Form de News-->
        <b-form @submit.prevent="updateNews()" v-if="type == 'news'">
          <!-- Nome -->
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-title"
                label="Título"
                label-for="input-title"
              >
                <b-form-input
                  id="input-title"
                  v-model="form.edit.news.title"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <!-- Foto -->
          <div class="row">
            <div class="col-sm-12">
              <b-form-group label="Foto">
                <b-form-file
                  id="file-default"
                  v-model="form.edit.news.photo"
                ></b-form-file>
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
                  label="Descrição"
                  id="textarea"
                  v-model="form.edit.news.desc"
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
              >Editar</b-button
            >
          </div>
        </b-form>

        <!-- Form de Contacts-->
        <b-form @submit.prevent="updateContact()" v-if="type == 'contacts'">
          <!-- Nome-->
          <div class="row mt-3">
            <div class="col-sm-12">
              <b-form-group id="input-name" label="Nome" label-for="input-name">
                <b-form-input
                  id="input-name"
                  v-model="form.edit.contact.name"
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
                  v-model="form.edit.contact.email"
                  type="email"
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
                  v-model="form.edit.contact.number"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-status"
                label="Estado"
                label-for="input-status"
              >
                <b-form-input
                  name="status"
                  id="input-status"
                  v-model="form.edit.contact.status"
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
                  v-model="form.edit.contact.description"
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
              >Editar</b-button
            >
          </div>
        </b-form>
      </div>
    </b-modal>

    <!--Modal Vendas-->
    <b-modal ref="mdlupdateNew" v-model="modalSell" hide-footer>
      <div class="d-block text-left">
        <!-- Form de Vender-->
        <b-form @submit.prevent="sell()">
          <!-- Consultor -->
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-consultantId"
                label="Consultor"
                label-for="input-consultantId"
              >
                <b-form-select
                  id="input-consultantId"
                  v-model="form.sell.consultantId"
                  :options="consultants"
                  required
                ></b-form-select>
              </b-form-group>
            </div>
          </div>
          <!-- Preço -->
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-price"
                label="Preço"
                label-for="input-price"
              >
                <b-form-input
                  id="input-price"
                  v-model="form.sell.price"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <!-- Ganho Empresa -->
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-companyGains"
                label="Ganhos Empresa"
                label-for="input-companyGains"
              >
                <b-form-input
                  id="input-companyGains"
                  v-model="form.sell.companyGains"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <!-- Ganho Consultor -->
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-consultantGains"
                label="Ganhos Consultor:"
                label-for="input-consultantGains"
              >
                <b-form-input
                  id="input-consultantGains"
                  v-model="form.sell.consultantGains"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div
            class="row align-items-center d-flex justify-content-center mt-5 mb-5"
          >
            <b-button class="btn-add mt-5 mb-5" type="submit" variant="danger"
              >Vender</b-button
            >
          </div>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["items", "fields", "type"],
  created() {
    this.loadContacts();
  },
  data() {
    return {
      bordered: true,
      hover: true,
      perPage: 5,
      currentPage: 1,
      filter: "",
      verifyNumber: false,
      verifyEmail: false,
      contacts: [],
      form: {
        sell: {
          consultantId: "",
          price: "",
          companyGains: "",
          consultantGains: "",
        },
        edit: {
          contact: {
            id: "",
            name: "",
            email: "",
            number: "",
            status: "",
            description: "",
          },
          news: {
            id: "",
            title: "",
            photo: null,
            desc: "",
          },
        },
      },
      consultants: [
        { text: "Select One", value: null },
        { text: "Carla Lopes", value: "1" },
        { text: "Carlos Conceição", value: "2" },
        { text: "Tânia Igreja", value: "3" },
      ],
      modal: false,
      modalSell: false,
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
    sellHouse(obj) {
      this.modalSell = true;
      console.log(obj);
    },
    sell() {
      try {
        const response = this.$http.post(`/sales`, {
          idProperty: this.form.sell.consultantId,
          propertyValue: this.form.sell.price,
          consultantGains: this.form.sell.consultantGains,
          companyGains: this.form.sell.companyGains,
        });
        console.log(response);
        this.$swal({
          text: `Venda Adicionada!`,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        if (error) {
          this.$swal({
            text: `Ups occoreu um erro!`,
            icon: "error",
            timer: 2000,
            showConfirmButton: false,
          });
          console.log(error);
        }
      }
    },
    deleteItem(obj) {
      console.log(obj);
      this.$swal({
        title: "Tem a certeza?",
        text: "Não vai conseguir reverter!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then((result) => {
        if (result) {
          if (this.type == "news") {
            console.log("entrei");
            const response = this.$http.delete(`/news/${obj.id_news}`);
            this.$store.commit("DELETE_NEW", "New Apagada");
            console.log(response);
            this.$swal({
              title: "Apagada!",
              text: "A noticia foi apagada",
              icon: "success",
              buttons: false,
              timer: 2000,
            });
          }
          if (this.type == "users") {
            const response = this.$http.delete(`/users/${obj.id_user}`);
            this.$store.commit("DELETE_USER", "User Apagado");
            console.log(response);
            this.$swal({
              title: "Apagado!",
              text: "O utilizador foi apagado",
              icon: "success",
              buttons: false,
              timer: 2000,
            });
          }
          if (this.type == "property") {
            const response = this.$http.delete(`/property/${obj.id_property}`);
            console.log(response);
            this.$swal({
              title: "Apagado!",
              text: "O imóvel foi apagado",
              icon: "success",
              buttons: false,
              timer: 2000,
            });
          }
          if (this.type == "contacts") {
            console.log(obj);
            const response = this.$http.delete(`/contacts/${obj.id_contacts}`);
            this.$store.commit("DELETE_CONTACT", "Contacto Apagado");
            console.log(response);
            this.$swal({
              title: "Apagado!",
              text: "O contacto foi apagado",
              icon: "success",
              buttons: false,
              timer: 2000,
            });
          }
        }
      });
    },
    editItem(obj) {
      this.modal = true;
      // Exibir a janela
      if (this.type == "news") {
        (this.form.edit.news.id = obj.id_news),
          (this.form.edit.news.title = obj.title),
          (this.form.edit.news.photo = obj.image),
          (this.form.edit.news.desc = obj.description);
      }
      if (this.type == "contacts") {
        (this.form.edit.contact.id = obj.id_contacts),
          (this.form.edit.contact.name = obj.name),
          (this.form.edit.contact.email = obj.email),
          (this.form.edit.contact.number = obj.number);
        (this.form.edit.contact.status = obj.status),
          (this.form.edit.contact.description = obj.description);
      }
    },
    updateNews() {
      try {
        const response = this.$http.put(`/news/${this.form.edit.news.id}`, {
          title: this.form.edit.news.title,
          image: this.form.edit.news.photo,
          desc: this.form.edit.news.desc,
        });
        console.log(response);
        this.$store.commit("EDIT_NEW", "Noticia Editada");
        this.$swal({
          text: `Noticia Editada!`,
          icon: "success",
          button: false,
          timer: 2000,
        });
      } catch (err) {
        console.log(err.response);
      }
      this.modal = false;
    },
    updateContact() {
      try {
        this.verifyEmail = false;
        this.verifyNumber = false;
        for (let i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i].number == this.form.edit.contact.number) {
            this.verifyNumber = true;
          }
          if (this.contacts[i].email == this.form.edit.contact.email) {
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
          const response = this.$http.put(
            `/contacts/${this.form.edit.contact.id}`,
            {
              name: this.form.edit.contact.name,
              number: this.form.edit.contact.number,
              email: this.form.edit.contact.email,
              desc: this.form.edit.contact.description,
              status: this.form.edit.contact.status,
            }
          );
          this.$store.commit("EDIT_CONTACT", "Contacto Editado");
          console.log(response);
          this.$swal({
            text: `Contacto Editado!`,
            icon: "success",
            button: false,
            timer: 2000,
          });
          this.modal = false;
        }
      } catch (err) {
        console.log(err.response);
        this.$swal({
          text: `Ups! Ocorreu um erro!`,
          icon: "error",
          timer: 2000,
          button: false,
        });
      }
    },
  },
  computed: {
    totalRows() {
      return this.items.length;
    },
    ...mapGetters(["getLoggedUser"]),
  },
};
</script>