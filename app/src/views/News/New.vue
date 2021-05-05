<template>
  <div class="container-fluid">
    <h3 class="subtitle mt-4">{{ this.news[0].title }}</h3>
    <img src="" alt="" class="image-fluid" />
    <p>{{ this.news[0].description }}</p>
  </div>
</template>

<script>
export default {
  name: "New",
  data() {
    return {
      news: [],
    };
  },
  created() {
    this.loadNew();
  },
  methods: {
    async loadNew() {
      try {
        const response = await this.$http.get(`/news/${this.$route.params.id}`);
        if (response.status === 200) {
          this.news = response.data.content;
          console.log(this.news)
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