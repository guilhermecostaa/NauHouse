<template>
  <b-col>
    <div>
      <b-card :title="getTitle(property.title)" @click="propertyPage" class="mb-1 mt-2">
        <b-card-text>
          <div class="information">
            <p class="mt-2">{{ getDescription(property.description) }}</p>
            <div class="row">
              <div class="col-lg-4">
                <p>
                  <b-icon-telephone-fill class="mr-2" /> {{ property.room }}
                </p>
              </div>
              <div class="col-lg-4">
                <p>
                  <b-icon-telephone-fill class="mr-2" />
                  {{ property.bathrooms }}
                </p>
              </div>
              <div class="col-lg-4">
                <p>
                  <b-icon-telephone-fill class="mr-2" /> {{ property.area }}
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
    return {};
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
  },
  computed: {
    
  },
};
</script>

<style>
</style>