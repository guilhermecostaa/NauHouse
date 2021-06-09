<template>
  <div>
    <GmapMap :center="center" :zoom="17" :address="address">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "GoogleMaps",
  mounted(){
    this.addMarker()
  },
  data() {
    return {
      center: { lat: 41.35481, lng: -8.7434 },
      currentPlace: null,
      markers: [],
      places: []
    };
  },
  methods: {
    setPlace(address) {
      this.currentPlace = address;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
  },
};
</script>