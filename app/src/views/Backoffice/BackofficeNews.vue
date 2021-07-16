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
        :items="getNews.map(news => {return{title: getTitle(news.title), description: getDescription(news.description)}})"
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
          console.log(this.news)
          return this.news;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    getDescription(description) {
      if (description.length < 60) {
        return description;
      } else {
        const spacePosition = description.indexOf(" ",60);
        return `${description.substr(0, spacePosition)}...`;
      }
    },
    getTitle(title) {
      if (title.length < 30) {
        return title;
      } else {
        const spacePosition = title.indexOf(" ", 30);
        return `${title.substr(0, spacePosition)}...`;
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