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
              v-show="data.item.id_status != 'Vendido'"
              v-if="type == 'property'"
              >Vender</b-button
            >
            <b-button
              class="mr-2"
              variant="primary"
              @click="tranfer(data.item)"
              v-show="data.item.id_status == 'Vendido'"
              v-if="type == 'property'"
              >Tranferência</b-button
            >
            <b-button
              class="mr-2"
              variant="primary"
              @click="statusModal(data.item)"
              v-if="type == 'property'"
              >Alterar Estado</b-button
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

    <b-modal ref="mdlupdateNew" v-model="modal" title="Editar" hide-footer>
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
    <b-modal ref="mdlsellHouse" v-model="modalSell" hide-footer>
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
                  :options="
                    consultants.map((consultant) => {
                      return {
                        value: consultant.id_user,
                        text: consultant.name,
                      };
                    })
                  "
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
          <!-- Ganho Angariador -->
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-fundraiser"
                label="Ganhos Angariador"
                label-for="input-fundraiser"
              >
                <b-form-input
                  id="input-fundraiser"
                  v-model="form.sell.fundraiserGains"
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
                label="Ganhos Consultor"
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

    <!--Modal Estado-->
    <b-modal ref="mdlalterStatus" v-model="modalStatus" hide-footer>
      <div class="d-block text-left">
        <!-- Form de Estado-->
        <b-form @submit.prevent="alterStatus()">
          <!-- Estado -->
          <div class="row">
            <div class="col-sm-12">
              <b-form-group
                id="input-status"
                label="Estado"
                label-for="input-status"
              >
                <b-form-select
                  id="input-status"
                  v-model="form.edit.property.status"
                  :options="
                    status.map((status) => {
                      return { value: status.id_status, text: status.status };
                    })
                  "
                  required
                ></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div
            class="row align-items-center d-flex justify-content-center mt-5 mb-5"
          >
            <b-button class="btn-add mt-5 mb-5" type="submit" variant="danger"
              >Alterar</b-button
            >
          </div>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["items", "fields", "type"],
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
          idProperty: "",
          consultantId: "",
          price: "",
          companyGains: "",
          fundraiserGains: "",
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
          property: {
            status: "",
          },
        },
      },
      consultants: [],
      status: [],
      statusObj: [],
      modal: false,
      modalSell: false,
      modalStatus: false,
    };
  },
  created() {
    this.loadUsers();
    this.loadStatus();
  },
  methods: {
    tranfer(obj) {
      console.log(obj);
      this.$swal({
        title: "Pretende realizar a transferência?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((result) => {
        if (result) {
          try {
            const response = this.$http.post(
              `/sales/transfer/${obj.id_property}`,
              {
                consultantGains: obj.consultantGains,
                fundraiserGains: obj.fundraiserGains,
              }
            );
            console.log(response);
            this.$swal({
              text: "Tranferência concluida!",
              icon: "success",
              buttons: false,
              timer: 2000,
            });
            this.$store.commit("EDIT_PROPERTY", "Venda concluida");
          } catch (error) {
            if (error) {
              this.$swal({
                text: `Ups occoreu um erro!`,
                icon: "error",
                timer: 2000,
                buttons: false,
              });
              console.log(error);
            }
          }
        }
      });
    },
    statusModal(obj) {
      this.modalStatus = true;
      this.statusObj = obj;
    },
    alterStatus() {
      try {
        const response = this.$http.put(
          `/property/${this.statusObj.id_property}/status`,
          {
            idStatus: this.form.edit.property.status,
          }
        );
        this.$swal({
          text: `Estado Alterado!`,
          icon: "success",
          button: false,
          timer: 2000,
        });
        console.log("entreiiiiii");
        console.log(response);
        this.$store.commit("EDIT_PROPERTY", "Imóvel Editado");
        this.modalStatus = false;
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
          idProperty: this.form.sell.idProperty,
          propertyValue: this.form.sell.price,
          consultantGains: this.form.sell.consultantGains,
          companyGains: this.form.sell.companyGains,
          fundraiserGains: this.form.sell.fundraiserGains,
          idUser: this.form.sell.consultantId,
        });
        console.log(response);
        this.$swal({
          text: `Venda Adicionada!`,
          icon: "success",
          buttons: false,
          timer: 2000,
        });
        this.$store.commit("EDIT_PROPERTY", "Imóvel Alterado");
        this.modalSell = false;
      } catch (error) {
        if (error) {
          this.$swal({
            text: `Ups occoreu um erro!`,
            icon: "error",
            timer: 2000,
            buttons: false,
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
        dangerMode: true,
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
            this.$store.commit("DELETE_PROPERTY", "Imóvel Apagado");
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
      // Exibir a janela
      if (this.type == "news") {
        this.modal = true;
        (this.form.edit.news.id = obj.id_news),
        (this.form.edit.news.title = obj.title),
        (this.form.edit.news.photo = obj.image),
        (this.form.edit.news.desc = obj.description);
      }
      if (this.type == "contacts") {
        this.modal = true;
        (this.form.edit.contact.id = obj.id_contacts),
        (this.form.edit.contact.name = obj.name),
        (this.form.edit.contact.email = obj.email),
        (this.form.edit.contact.number = obj.number);
        (this.form.edit.contact.status = obj.status),
        (this.form.edit.contact.description = obj.description);
      }
      if (this.type == "users") {
        this.$swal({
          title: "Tem a certeza que pretende editar?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((result) => {
          if (result) {
            this.$router.push({
              name: "BackofficeUsersEdit",
              params: { id: obj.id_user },
            });
          }
        });
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
    async loadUsers() {
      try {
        const response = await this.$http.get(`/users`);
        if (response.status === 200) {
          this.consultants = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadStatus() {
      try {
        const response = await this.$http.get(`/status`);
        if (response.status === 200) {
          this.status = response.data.content;
          for (let i = 0; i < this.status.length; i++) {
            if (this.status[i].status == "Vendido") {
              console.log("entrei");
              const index = this.status.indexOf(this.status[i]);
              if (index > -1) {
                this.status.splice(index, 1);
              }
            }
          }
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
    totalRows() {
      return this.items.length;
    },
  },
};
</script>