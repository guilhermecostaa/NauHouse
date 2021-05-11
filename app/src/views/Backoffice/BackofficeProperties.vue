<template>
  <div>
    <div id="backofficeProperties" class="container-fluid">
      <h1 class="title mt-4 ml-4">Adicionar Imóvel</h1>
      <div class="mr-3">
        <FormProperty/>
      </div>
    </div>

    <div class="dataTable container-fluid mt-5">
      <DataTable
        name="propety"
        :items="getProperties"
        :fields="['id_property', 'habitation','county', 'price', 'id_status', 'actions']"
        type="property"
      ></DataTable>
    </div>
  </div>
</template>

<script>
import FormProperty from "@/components/FormProperty.vue";
import DataTable from "@/components/DataTable.vue";
export default {
  name: "BackofficeProperties",
  components: {
    FormProperty,
    DataTable
  },
  created(){
    this.loadProperties()
    this.$store.subscribe(mutation => {
			switch (mutation.type) {
				case "ADD_PROPERTY":
          this.loadProperties();
          break
        case "DELETE_PROPERTY":
          this.loadProperties();
          break
			}
		})
  },
  data() {
    return {
      properties: [],
    };
  },
  methods: {
    async loadProperties() {
      try {
        const response = await this.$http.get("/property")
				if (response.status === 200) {
          this.properties = response.data.content
          console.log(this.properties)
          return this.properties;
				}
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
    getProperties(){
      return this.properties
    },
    getRows(){
      return this.properties.length
    }
  }
};
</script>

<style>
</style>