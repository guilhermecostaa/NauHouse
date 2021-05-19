<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-xs-6">
        <h3 class="subtitle mt-4">Propriedades</h3>
      </div>
      <div class="col-sm-6 col-xs-6 text-right">
        <b-button v-b-toggle.sidebar-1 class="mt-3" variant="danger"
          ><b-icon-filter-left
        /></b-button>
      </div>
    </div>

    <b-sidebar id="sidebar-1" title="Filtro" shadow>
      <div class="px-3 py-1">
        <b-form class="mt-1">
          <b-form-group
            id="input-group-location"
            label="Location:"
            label-for="input-location"
          >
            <b-form-input
              id="input-location"
              v-model="form.location"
              type="text"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-purpose"
            label="Finalidade:"
            label-for="input-purpose"
          >
            <b-form-select
              id="input-purpose"
              v-model="form.purpose"
              :options="
                purposes.map((purpose) => {
                  return { value: purpose.id_purpose, text: purpose.name };
                })
              "
            ></b-form-select>
          </b-form-group>

          <b-form-group
            id="input-category"
            label="Categoria:"
            label-for="input-category"
          >
            <b-form-select
              id="input-category"
              v-model="form.category"
              :options="
                categories.map((category) => {
                  return { value: category.id_category, text: category.name };
                })
              "
            ></b-form-select>
          </b-form-group>

          <b-form-group
            id="input-shape"
            label="Condição:"
            label-for="input-shape"
          >
            <b-form-select
              id="input-shape"
              v-model="form.shape"
              :options="
                shapes.map((shape) => {
                  return { value: shape.id_shape, text: shape.shape };
                })
              "
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-bedrooms"
            label="Quartos:"
            label-for="input-bedrooms"
          >
            <b-form-input
              id="input-bedrooms"
              v-model="form.bedrooms"
              type="number"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-min" label="Min:" label-for="input-min">
            <b-form-input
              id="input-min"
              v-model="form.min"
              type="number"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-max" label="Max:" label-for="input-max">
            <b-form-input
              id="input-max"
              v-model="form.max"
              type="number"
            ></b-form-input>
          </b-form-group>

          <toggle-button v-model="form.pool" color="#b01e0f" /> Piscina <br />
          <toggle-button v-model="form.elevator" color="#b01e0f" /> Elevador <br />
          <toggle-button v-model="form.garage" color="#b01e0f" /> Garagem <br />
          <toggle-button v-model="form.parking" color="#b01e0f" /> Estacionamento
        </b-form>
      </div>
    </b-sidebar>

    <div>
      <span v-if="this.properties.length === 0">SEM IMÓVEIS ADICIONADOS</span>
      <div v-else>
        <div class="cards">
          <b-row>
            <PropertyCard
              class="mt-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
              v-for="property in properties"
              :key="property.id_property"
              :property="property"
            ></PropertyCard>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PropertyCard from "@/components/PropertyCard.vue";
export default {
  name: "ListProperties",
  components: { PropertyCard },
  created() {
    this.loadProperties();
    this.loadCategories();
    this.loadPurposes();
    this.loadShapes();
  },
  data() {
    return {
      form: {
        location: "",
        category: "",
        purpose: "",
        shape: "",
        bedrooms: "",
        pool: false,
        elevator: false,
        garage: false,
        parking: false,
      },
      categories: [],
      purposes: [],
      shapes: [],
      properties: [],
    };
  },
  methods: {
    async loadCategories() {
      try {
        const response = await this.$http.get(`/category`);
        if (response.status === 200) {
          this.categories = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadPurposes() {
      try {
        const response = await this.$http.get(`/purpose`);
        if (response.status === 200) {
          this.purposes = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadShapes() {
      try {
        const response = await this.$http.get(`/shape`);
        if (response.status === 200) {
          this.shapes = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadProperties() {
      try {
        const response = await this.$http.get("/property");
        if (response.status === 200) {
          this.properties = response.data.content;
          return this.properties;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
    getProperties() {
      return this.properties;
    },
  },
};
</script>

<style>
</style>