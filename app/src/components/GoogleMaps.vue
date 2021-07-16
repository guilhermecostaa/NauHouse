<template>
  <div class="mt-4">
    <gmap-map :zoom="17" :center="center" style="width: 100%; height: 300px">
      <gmap-marker
        :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>
 
<script>
export default {
  name: "AddGoogleMap",
  props: ["address"],
  mounted() {
    this.addLocationMarker();
  },
  data() {
    return {
      center: {
        lat: 41.3538,
        lng: -8.74287,
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: this.center,
    };
  },
  methods: {
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng(),
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
      }
    },
  },
};
</script>

<style scoped>

</style>