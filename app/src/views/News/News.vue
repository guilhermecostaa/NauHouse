<template>
  <div class="container-fluid">
    <h3 class="subtitle mt-4">Noticias</h3>
    <div>
      <span v-if="this.news.length === 0">SEM NOTICIAS ADICIONADOS</span>
      <div v-else>
        <div class="cards">
          <b-row>
            <NewsCard
              class="mt-3 col-lg-4 col-md-6 col-xs-12"
              v-for="news in news"
              :key="news.id_news"
              :news="news"
            ></NewsCard>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard.vue";
export default {
  name: "News",
  components: { NewsCard },
  data() {
    return {
      news: [],
    };
  },
  created() {
    this.loadNews();
  },
  methods: {
    async loadNews() {
      try {
        const response = await this.$http.get(`/news`);
        if (response.status === 200) {
          this.news = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {},
};
</script>


<style>
</style>