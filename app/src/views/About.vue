<template>
  <div id="about" class="mt-4">
    <div class="container-fluid">
      <h1 class="title">Sobre Nós</h1>
      <p class="mt-3 mr-3">
        NAU House é um projeto novo, mas com anos de maturidade: tem um equipa
        dinâmica e de espírito jovem mas a seriedade, experiência e conhecimento
        do mercado reúnem décadas na área imobiliária. Somos um grupo de
        comerciais habituados aos melhores resultados, alicerçados em formação
        de excelência, respeitando os mais elevados padrões de ética, discrição,
        integridade e profissionalismo, com prioridade para a satisfação do
        cliente tendo como missão o princípio “Win Win” porque só ganhamos se o
        Cliente ganhar também. Os nossos agentes trabalham com cada Cliente
        individualmente, dedicando o tempo necessário para entender o seu estilo
        de vida, necessidades e desejos, realizando uma pesquisa rápida e
        certeira do imóvel que procura. Dotados de um conjunto de recursos
        tecnológicos que nos permitem uma grande agilidade na pesquisa e
        adequação do perfil do imóvel às solicitações do Cliente, vamos
        acompanhá-lo em visitas marcadas sem surpresas, mantê-lo sempre
        informado sobre as novas casas no mercado e fornecer-lhe informações
        sobre imóveis equiparados. Utilizamos diversos sistemas de marketing
        para maximizar a exposição do seu imóvel, aplicamos os sistemas e as
        ferramentas necessárias para agilizar a compra ou venda da sua casa,
        temos capacidade negocial conhecendo margens de negociação de forma a
        assegurar que o seu imóvel é colocado no mercado ao seu valor
        garantindo-lhe a simplificação do processo desde o anúncio até à venda.
        Estamos sediados em Vila do Conde, uma localização de excelência para
        comercializar imóveis em todo o Norte de Portugal – o nosso foco. Mas os
        nossos negócios não ficam por aqui: a nossa sólida carteira de
        investidores internacionais permite-nos projetar os imóveis no panorama
        mundial expondo-os a mais oportunidades de venda porque “ 500 anos
        depois continuamos a encontrar o que os outros, apesar de acreditarem ou
        saberem que existe, não conseguiram ir além da procura”
      </p>
    </div>
    <div class="footer mt-5">
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
