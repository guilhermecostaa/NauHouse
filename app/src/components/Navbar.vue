<template>
  <b-navbar toggleable="lg" type="light" variant="nauhouse4">
    <b-navbar-brand href="#">
      <img src="@/assets/img/Logo.png" alt="NAUHOUSE" height="50" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <!-- Right aligned nav items -->
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item class="item mr-3" href="#" @click="btnHomeClicked"
            >Inicio</b-nav-item
          >
          <b-nav-item class="item mr-3" href="#" @click="btnAboutClicked"
            >NauHouse</b-nav-item
          >
          <b-nav-item
            class="item mr-3"
            href="#"
            @click="btnListPropertiesClicked"
            >Imóveis</b-nav-item
          >
          <b-nav-item class="item mr-3" href="#" @click="btnConsultantsClicked"
            >Consultores</b-nav-item
          >
          <b-nav-item class="item mr-3" href="#" @click="btnNewsClicked"
            >Noticias</b-nav-item
          >
          <b-nav-item class="item mr-3" href="#" @click="btnContactClicked"
            >Contactos</b-nav-item
          >
        </b-navbar-nav>

        <b-nav-item-dropdown right v-show="getJwtToken === '' ? false : true">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Olá, {{ getLoggedUser.name }}</em>
          </template>
          <b-dropdown-item href="#" @click="btnPerfilClicked"
            >Perfil</b-dropdown-item
          >
          <b-dropdown-item href="#" @click="btnContactsClicked"
            >Contactos</b-dropdown-item
          >
          <b-dropdown-item href="#" @click="btnAgendaClicked"
            >Agenda</b-dropdown-item
          >
          <b-dropdown-item
            href="#"
            @click="btnAddUserClicked"
            v-show="getLoggedUser.userType == 'consultor' ? false : true"
            >Adicionar Utilizador</b-dropdown-item
          >
          <b-dropdown-item
            href="#"
            @click="btnAddPropertyClicked"
            v-show="getLoggedUser.userType == 'consultor' ? false : true"
            >Adicionar Imóvel</b-dropdown-item
          >
          <b-dropdown-item
            href="#"
            @click="btnAddNewsClicked"
            v-show="getLoggedUser.userType == 'consultor' ? false : true"
            >Adicionar Noticia</b-dropdown-item
          >
          <b-dropdown-item href="#" @click="btnLogoutClicked"
            >Sign Out</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  methods: {
    btnHomeClicked() {
      this.$router.push({ name: "Home" });
    },
    btnAboutClicked() {
      this.$router.push({ name: "About" });
    },
    btnListPropertiesClicked() {
      this.$router.push({ name: "ListProperties" });
    },
    btnConsultantsClicked() {
      this.$router.push({ name: "Consultants" });
    },
    btnNewsClicked() {
      this.$router.push({ name: "News" });
    },
    btnContactClicked() {
      this.$router.push({ name: "Contact" });
    },
    btnPerfilClicked() {
    this.$router.push({
      name: "Perfil",
      params: { id: this.getLoggedUser.id_user },
    });
    },
    btnContactsClicked() {
      this.$router.push({
        name: "Contacts",
        params: { id: this.getLoggedUser.id_user },
      });
    },
    btnAgendaClicked() {
      this.$router.push({
        name: "Agenda",
        params: { id: this.getLoggedUser.id_user },
      });
    },
    btnAddUserClicked() {
      this.$router.push({ name: "BackofficeUsers" });
    },
    btnAddPropertyClicked() {
      this.$router.push({ name: "BackofficeProperties" });
    },
    btnAddNewsClicked() {
      this.$router.push({ name: "BackofficeNews" });
    },
    btnLogoutClicked() {
      this.$store.commit("SIGN_OUT");
      this.$router.push({ name: "Consultants" });
    },
  },
  computed: {
    ...mapGetters(["getJwtToken", "getLoggedUser"]),
  },
};
</script>

<style>
nav {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
#nav-collapse a.nav-link {
  color: black !important;
}

#nav-collapse a.nav-link:hover {
  color: #9e080b !important;
}
</style>