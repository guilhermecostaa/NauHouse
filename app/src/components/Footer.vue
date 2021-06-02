<template>
  <footer id="footer" class="bg-dark pt-3">
    <div class="container text-center text-md-left">
      <div class="row text-left text-md-left">
        <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold">Contacts</h5>
          <p><b-icon-telephone-fill /> +351 252 167 609</p>
          <p><b-icon-envelope /> geral@nauhouse.pt</p>
          <p><b-icon-app /> www.nauhouse.pt</p>
        </div>

        <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold">
            Livro de Reclamações
          </h5>
          <img class="img-fluid resize" src="@/assets/img/livroReclamacoes.png" alt="">
        </div>

        <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold">Redes Sociais</h5>
          <b-icon-facebook class="mr-2"></b-icon-facebook>
          <b-icon-instagram class="mr-2"></b-icon-instagram>
        </div>
      </div>
    </div>
    <div class="text-left text-md-left">
      <div class="row bg-lighter mt-2 mx-auto">
        <div class="copyrights col-md-4 col-lg-6 mt-4">
          <p>Copyright © 2018 NauHOUSE – by VIRAL | Consulting</p>
        </div>
        <div class="politica col-md-4 col-lg-3 mt-4">
          <p>POLITICA DE PRIVACIDADE</p>
        </div>
        <div class="informacao col-md-4 col-lg-3 mt-4">
          <p>INFORMAÇÃO AO CONSUMIDOR</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style>
#footer {
  width: 100%;
  background-color: #717171;
  color: white !important;
  position: relative;
  left: 0;
  bottom: 0;
}

img.resize {
  max-width:80%;
  max-height:30%;
}

#footer .bg-lighter {
  width: 100%;
  height: 100%;
  background-color: #e2e2e2;
  text-align: center;
  color: black !important;
}

#footer .copyrights {
    font-size: 14px;
}
#footer .informacao {
    font-size: 14px;
}
#footer .politica {
    font-size: 14px;
}
</style>