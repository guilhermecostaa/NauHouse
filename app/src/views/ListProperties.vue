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

    <b-sidebar id="sidebar-1" title="Filtro" right shadow>
      <div class="px-3 py-1">
        <b-form class="mt-1">
          <b-form-group
            id="input-group-location"
            label="Localização:"
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
          <toggle-button v-model="form.elevator" color="#b01e0f" /> Elevador
          <br />
          <toggle-button v-model="form.garage" color="#b01e0f" /> Garagem <br />
          <toggle-button v-model="form.parking" color="#b01e0f" />
          Estacionamento
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
              v-for="property in filteredProperties"
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
import { mapGetters } from "vuex";
export default {
  name: "ListProperties",
  components: { PropertyCard },
  created() {
    this.loadProperties();
    this.loadCategories();
    this.loadPurposes();
    this.loadShapes();
    this.loadCharacteristics();
    this.loadCharacteristicsProperty();
    this.loadHomeFilter();
  },
  data() {
    return {
      form: {
        location: "",
        category: "",
        purpose: "",
        shape: "",
        bedrooms: "",
        min: "",
        max: "",
        pool: false,
        elevator: false,
        garage: false,
        parking: false,
      },
      categories: [],
      purposes: [],
      shapes: [],
      properties: [],
      characteristics: [],
      characteristicsProperty: [],
      items: [],
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
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadCharacteristics() {
      try {
        const response = await this.$http.get(`/characteristics`);
        if (response.status === 200) {
          this.characteristics = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadCharacteristicsProperty() {
      try {
        const response = await this.$http.get(`/characteristicsProperty/`);
        if (response.status === 200) {
          this.characteristicsProperty = response.data.content;
          console.log(this.characteristicsProperty);
        }
        for (let i = 0; i < this.characteristicsProperty.length; i++) {
          for (let j = 0; j < this.characteristics.length; j++) {
            if (
              this.characteristics[j].id_characteristics ==
              this.characteristicsProperty[i].id_characteristics
            ) {
              this.items.push(this.characteristics[j]);
            }
          }
        }
        this.getCharacteristicsProperty();
      } catch (err) {
        console.log(err.response);
      }
    },
    getCharacteristicsProperty() {
      for (let i = 0; i < this.properties.length; i++) {
        for (let j = 0; j < this.characteristicsProperty.length; j++) {
          if (
            this.characteristicsProperty[j].id_property ==
            this.properties[i].id_property
          ) {
            if (this.properties[i].characteristics === undefined) {
              this.properties[i].characteristics = [];
            }
            this.properties[i].characteristics.push(
              this.characteristicsProperty[j].id_characteristics
            );
          }
        }
      }
      console.log(this.properties);
    },
    loadHomeFilter() {
      this.form.purpose = this.getPurpose;
      this.form.category = this.getCategory;
      this.form.location = this.getDistrict;
      this.form.bedrooms = this.getBedrooms;
      this.$store.commit("ADD_CATEGORY", "");
      this.$store.commit("ADD_PURPOSE", "");
      this.$store.commit("ADD_DISTRICT", "");
      this.$store.commit("ADD_BEDROOMS", "");
    },
  },
  computed: {
    filteredProperties() {
      return this.properties.filter((property) => {
        let filterLocationResult = true;
        let filterCategoryResult = true;
        let filterPurposeResult = true;
        let filterShapeResult = true;
        let filterBedroomsResult = true;
        let filterPoolResult = true;
        let filterMinResult = true;
        let filterMaxResult = true;
        let filterElevatorResult = true;
        let filterGarageResult = true;
        let filterParkingResult = true;
        // Filter location
        if (this.form.location !== "") {
          filterLocationResult =
            property.county
              .toLowerCase()
              .includes(this.form.location.toLowerCase()) ||
            property.district
              .toLowerCase()
              .includes(this.form.location.toLowerCase());
        }
        // Filter category
        if (this.form.category !== "") {
          filterCategoryResult = property.id_category === this.form.category;
        }
        // Filter purpose
        if (this.form.purpose !== "") {
          filterPurposeResult = property.id_purpose === this.form.purpose;
        }
        // Filter shape
        if (this.form.shape !== "") {
          filterShapeResult = property.id_shape === this.form.shape;
        }
        // Filter bedrooms
        if (this.form.bedrooms !== "") {
          filterBedroomsResult =
            property.bedroom === parseInt(this.form.bedrooms);
        }
        //Filter price
        if (this.form.min !== "") {
          filterMinResult = property.price >= parseInt(this.form.min);
        }
        //Filter price
        if (this.form.max !== "") {
          filterMaxResult = property.price <= parseInt(this.form.max);
        }
        // Filter pool
        if (this.form.pool) {
          if (property.characteristics) {
            filterPoolResult = property.characteristics.some(
              (characteristic) => characteristic === 147
            );
          } else{
            filterPoolResult = false
          }
        }
        // Filter pool
        if (this.form.elevator) {
          if (property.characteristics) {
            filterElevatorResult = property.characteristics.some(
              (characteristic) => characteristic === 129
            );
            console.log(filterElevatorResult)
          } else{
            filterPoolResult = false
          }
        }
        // Filter pool
        if (this.form.garage) {
          filterGarageResult = property.closed_garage !== 0;
        }
        // Filter pool
        if (this.form.parking) {
          filterParkingResult = property.parking !== 0;
        }
        // return the conjunction of the two filters
        return (
          filterLocationResult &&
          filterCategoryResult &&
          filterPurposeResult &&
          filterShapeResult &&
          filterBedroomsResult &&
          filterMinResult &&
          filterMaxResult &&
          filterPoolResult &&
          filterElevatorResult &&
          filterGarageResult &&
          filterParkingResult
        );
      });
    },
    ...mapGetters(["getCategory", "getPurpose", "getDistrict", "getBedrooms"]),
  },
};
</script>

<style>
</style>