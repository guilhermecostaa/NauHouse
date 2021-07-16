<template>
  <b-col>
    <div>
      <b-card @click="propertyPage">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://nauhouse.pt/wp-content/uploads/2021/06/IMG_8265-C%C3%B3pia.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://nauhouse.pt/wp-content/uploads/2021/06/IMG_8269.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://nauhouse.pt/wp-content/uploads/2021/06/IMG_8270-Cópia-1024x623.jpg"
          ></b-carousel-slide>
        </b-carousel>
        <b-card-text>
          <div class="mt-2">
            <h5>{{ getTitle(property.title) }}</h5>
          </div>
          <div class="information">
            <p class="mt-2">{{ getDescription(property.description) }}</p>
            <div class="row">
              <div class="col-lg-4">
                <p><i class="fas fa-bed mr-1"></i> {{ property.bedroom }}</p>
              </div>
              <div class="col-lg-4">
                <p>
                  <i class="fas fa-toilet mr-1"></i>
                  {{ property.bathrooms }}
                </p>
              </div>
              <div class="col-lg-4">
                <p>
                  <i class="fas fa-chart-area mr-1"></i>
                  {{ property.usable_area }}
                </p>
              </div>
            </div>
          </div>
        </b-card-text>
      </b-card>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ["property"],
  data() {
    return {
      sliding: null,
    };
  },
  methods: {
    propertyPage() {
      this.$router.push({
        name: "Property",
        params: { id: this.property.id_property },
      });
    },
    getDescription(description) {
      if (description.length < 120) {
        return description;
      } else {
        const spacePosition = description.indexOf(" ", 120);
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
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  computed: {},
};
</script>

<style>
</style>