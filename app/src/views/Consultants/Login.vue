<template>
  <div id="login" class="container-fluid mb-5">
    <div class="row align-items-center d-flex justify-content-center">
      <div class="col-xs-12 col-sm-6 shadow px-5 py-4 square">
        <h4 class="subtitle mt-5">LOGIN</h4>
        <b-form @submit.prevent="login" class="mt-3">
          <b-form-group
            id="input-group-email"
            label="Email:"
            label-for="input-email"
          >
            <b-form-input
              id="input-email"
              v-model="form.email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-password"
            label="Password:"
            label-for="input-password"
          >
            <b-form-input
              id="input-password"
              v-model="form.password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
          <div class="d-flex justify-content-center mt-5 mb-3">
            <b-button class="btn-add mt-5 mb-5" type="submit" variant="danger"
              >LOGIN</b-button
            >
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      if (!this.form.email || !this.form.password) {
        this.$swal("Preencha todos os campos", "", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        try {
          const response = await this.$http.post("/auth/sign-in", {
            email: this.form.email,
            password: this.form.password,
          });
          this.$store.commit("SET_JWT_TOKEN", response.data.content.jwt);
          this.$store.commit("SIGN_IN", response.data.content.user);
          this.$http.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${this.getJwtToken}`;
          this.$swal({
            text: `Bem-vindo ${response.data.content.user.name}!`,
            icon: 'success',
            button: false,
            timer: 2000,
          });
          console.log(this.getLoggedUser);
          this.$router.push({
            name: "Perfil",
            params: { id: response.data.content.user.id_user },
          });
        } catch (err) {
          if (err.response.data.message === "User not Found") {
            this.$swal({
              text: `Utilizador não encontrado!`,
              icon: "error",
              timer: 2000,
              button: false,
            });
          }
          if (err.response.data.message === "invalidPassword") {
            this.$swal({
              text: `Palavra passe incorreta!`,
              icon: "error",
              timer: 2000,
              button: false,
            });
          }
        }
      }
    },
  },
  computed: {
    ...mapGetters(["getLoggedUser", "getJwtToken"]),
  },
};
</script>

<style>
#login {
  margin-top: 120px;
}
.btn.btn-login.btn-danger {
  color: #fff;
  background-color: #b01e0f;
  border-color: #b01e0f;
  position: absolute;
  left: 42%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.square {
  position: relative;
  width: 50%;
  height: 50%;
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 20%;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>