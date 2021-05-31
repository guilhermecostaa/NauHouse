<template>
  <div>
    <div id="backofficeProperties" class="container-fluid">
      <h3 class="title mt-4 ml-4">Adicionar Imóvel</h3>
      <div class="mr-3">
        <FormProperty />
      </div>
    </div>

    <div class="dataTable container-fluid mt-5">
      <DataTable
        name="propety"
        :items="
          getProperties.map((property) => {
            return {
              id_property: property.id_property,
              habitation: property.habitation,
              county: property.county,
              price: property.price,
              id_status: getStatusById(property.id_status).status,
            };
          })
        "
        :fields="[
          'id_property',
          'habitation',
          'county',
          'price',
          'id_status',
          'actions',
        ]"
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
    DataTable,
  },
  created() {
    this.loadStatus();
    this.loadProperties();
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
  data() {
    return {
      properties: [],
      status: [],
    };
  },
  methods: {
    async loadProperties() {
      try {
        const response = await this.$http.get("/property");
        if (response.status === 200) {
          this.properties = response.data.content;
          console.log(this.properties);
          return this.properties;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadStatus() {
      try {
        const response = await this.$http.get("/status");
        if (response.status === 200) {
          this.status = response.data.content;
          console.log(this.status);
          return this.status;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    getStatusById(id) {
      return this.status.find((status) => status.id_status === id);
    },
  },
  computed: {
    getProperties() {
      return this.properties;
    },
    getRows() {
      return this.properties.length;
    },
  },
};
</script>

<style>
</style>