<template>
  <div>
    <div id="backofficeNews" class="container-fluid">
      <h3 class="title mt-4 ml-4">Adicionar Noticia</h3>
      <div class="mr-4">
        <FormNews />
      </div>
    </div>

    <div class="dataTable container-fluid mt-5">
      <DataTable
        name="news"
        :items="getNews"
        :fields="['title', 'description', 'actions']"
        type="news"
      ></DataTable>
    </div>
  </div>
</template>

<script>
import FormNews from "@/components/FormNews.vue";
import DataTable from "@/components/DataTable.vue";
export default {
  name: "BackofficeNews",
  components: {
    FormNews,
    DataTable,
  },
  created() {
    this.loadNews();
    this.$store.subscribe((mutation) => {
      switch (mutation.type) {
        case "ADD_NEW":
          this.loadNews();
          break;
        case "EDIT_NEW":
          this.loadNews();
          break;
        case "DELETE_NEW":
          this.loadNews();
          break;
      }
    });
  },
  data() {
    return {
      news: [],
    };
  },
  methods: {
    async loadNews() {
      try {
        const response = await this.$http.get("/news");
        if (response.status === 200) {
          this.news = response.data.content;
          return this.news;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
    getNews() {
      return this.news;
    },
    getRows() {
      return this.news.length;
    },
  },
};
</script>

<style>
</style>