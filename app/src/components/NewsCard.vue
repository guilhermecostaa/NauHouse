<template>
  <b-col>
    <div>
      <b-card
        :title="getTitle(news.title)"
        img-src="https://nauhouse.pt/wp-content/uploads/2021/05/mary-blackwey-1vdtcskv6hu-unsplash.jpg"
        class="mb-1 mt-2"
        @click="newsPage(news.id_news)"
      >
        <b-card-text>
          <div class="information">
            <p class="mt">{{ getDescription(news.description) }}</p>
          </div>
        </b-card-text>
      </b-card>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ["news"],
  data() {
    return {};
  },
  methods: {
    newsPage() {
      this.$router.push({
        name: "New",
        params: { id: this.news.id_news },
      });
    },
    getDescription(description) {
      if (description.length < 120) {
        return description;
      } else {
        const spacePosition = description.indexOf(" ",120);
        return `${description.substr(0, spacePosition)}...`;
      }
    },
    getTitle(title) {
      if (title.length < 50) {
        return title;
      } else {
        const spacePosition = title.indexOf(" ", 60);
        return `${title.substr(0, spacePosition)}...`;
      }
    },
  },
  computed: {
  },
};
</script>

<style>
</style>