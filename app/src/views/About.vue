<template>
  <div id="about" class="mt-4">
    <div class="container-fluid">
      <h3 class="title">Sobre Nós</h3>
      <div class="row">
        <div class="col-lg-6 col-md-12 video">
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
        <div class="col-lg-6 col-md-12">
          <p class="mt-5 mr-5 mb-3 ml-5">
            NAU House é um projeto novo, mas com anos de maturidade: tem um
            equipa dinâmica e de espírito jovem mas a seriedade, experiência e
            conhecimento do mercado reúnem décadas na área imobiliária. Somos um
            grupo de comerciais habituados aos melhores resultados, alicerçados
            em formação de excelência, respeitando os mais elevados padrões de
            ética, discrição, integridade e profissionalismo, com prioridade
            para a satisfação do cliente tendo como missão o princípio “Win Win”
            porque só ganhamos se o Cliente ganhar também.
          </p>
        </div>
      </div>
    </div>
    <div id="footer" class="mt-5" style="bottom: 0">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  components: {
    Footer,
  },
};
</script>

<style>
#about .container-fluid {
  margin-left: 10px;
}

.video {
  margin-top: 0px;
  align-items: center;
  width: 100%;
  height: 480px;
}
</style>
