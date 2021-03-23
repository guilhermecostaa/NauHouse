<template>
  <b-navbar toggleable="lg" type="light" variant="nauhouse4">
    <b-navbar-brand href="#">
      <img src="@/assets/img/Logo.png" alt="NAUHOUSE" height="50"/>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <!-- Right aligned nav items -->
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item class="item mr-3" href="#">Inicio</b-nav-item>
          <b-nav-item class="item mr-3" href="#">NauHouse</b-nav-item>
          <b-nav-item class="item mr-3" href="#">Imóveis</b-nav-item>
          <b-nav-item class="item mr-3" href="#">Consultores</b-nav-item>
          <b-nav-item class="item mr-3" href="#">Noticias</b-nav-item>
          <b-nav-item class="item mr-3" href="#">Contactos</b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Contactos</b-dropdown-item>
          <b-dropdown-item href="#">Agenda</b-dropdown-item>
          <b-dropdown-item href="#">Adicionar Utilizador</b-dropdown-item>
          <b-dropdown-item href="#">Adicionar Imóvel</b-dropdown-item>
          <b-dropdown-item href="#">Adicionar Noticia</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>

#nav-collapse a.nav-link{
    color: black !important;
}

#nav-collapse a.nav-link:hover{
    color: #9e080b !important;
}
</style>