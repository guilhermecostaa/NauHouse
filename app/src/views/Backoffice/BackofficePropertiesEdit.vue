<template>
  <div>
    <div id="backofficeProperties" class="container-fluid">
      <h3 class="title mt-4 ml-3">Editar Imóvel NHPT-{{this.property[0].id_property}}</h3>
      <div class="mr-3">
        <FormProperty :edit="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import FormProperty from "@/components/FormProperty.vue";
export default {
  name: "BackofficeProperties",
  components: {
    FormProperty
  },
  created() {
    this.loadProperty();
    this.loadCharacteristicsProperty();
    this.$store.subscribe((mutation) => {
      switch (mutation.type) {
        case "ADD_PROPERTY":
          this.loadProperties();
          break;
        case "DELETE_PROPERTY":
          this.loadProperties();
          break;
        case "EDIT_PROPERTY":
          this.loadProperties();
          break;
      }
    });
  },
  mounted(){

  },
  data() {
    return {
      property: [],
      characteristicsProperty: []
    };
  },
  methods: {
    async loadProperty() {
      try {
        const response = await this.$http.get(`/property/${this.$route.params.id}`);
        if (response.status === 200) {
          this.property = response.data.content;
          console.log(this.property);
          return this.property;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadCharacteristicsProperty() {
      try {
        const response = await this.$http.get(
          `/characteristicsProperty/${this.$route.params.id}`
        );
        if (response.status === 200) {
          this.characteristicsProperty = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
  },
};
</script>

<style>
</style>