<template>
  <div class="container-fluid">
    <h3 class="subtitle mt-4">Perfil de {{ getLoggedUser.name }}</h3>
    <div class="row mt-3">
      <div class="col-lg-3 col-md-4 col-6">
        <img
          src="@/assets/img/CarlosConceição.png"
          class="img-fluid img-thumbnail rounded-circle"
        />
      </div>
      <div class="col-lg-9 col-md-8 col-12">
        <h5 class="topic pl-3 pt-2 pb-2">Informações Pessoais</h5>
        <div class="information mt-2 ml-3">
          <p class="name">{{ getLoggedUser.name }}</p>
          <p class="mt">Consultor Imobiliário</p>
          <p><b-icon-telephone-fill /> +351 252 167 609</p>
          <p><b-icon-phone-fill /> {{ getLoggedUser.number }}</p>
          <p><b-icon-envelope /> {{ getLoggedUser.email }}</p>
        </div>
        <div class="conta mr-5">
          <p class="name">Conta Corrente</p>
          <div class="information mt-3">
            <p>Saldo: {{ getLoggedUser.active + getLoggedUser.passive }}</p>
            <p>Ativo:{{ getLoggedUser.active }}</p>
            <p>Passivo: {{ getLoggedUser.passive }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="subtitle mt-4">Propriedades</h3>
      <span v-if="this.properties.length === 0">SEM PROPRIEDADES</span>
      <div v-else>
        <div class="cards">
          <b-row>
            <PropertyCard
              class="mt-3 col-lg-4 col-md-4 col-sm-6 col-xs-12"
              v-for="property in properties"
              :key="property.id_property"
              :property="property"
            ></PropertyCard>
          </b-row>
        </div>
      </div>
    </div>

    <div class="dataTable mt-5">
      <h3 class="subtitle mt-4">Vendas</h3>
      <span v-if="this.sales.length === 0">SEM VENDAS</span>
      <div v-else>
        <div class="container-fluid">
          <DataTable
            name="sales"
            :items="sales"
            :fields="[
              'id_property',
              'property_value',
              'company_gains',
              'consultant_gains',
            ]"
            type="sales"
          ></DataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DataTable from "@/components/DataTable.vue";
import PropertyCard from "@/components/PropertyCard.vue";
export default {
  name: "Perfil",
  components: { PropertyCard, DataTable },
  data() {
    return {
      properties: [],
      sales: [],
    };
  },
  created() {
    this.loadProperties();
    this.loadSales();
  },
  methods: {
    async loadProperties() {
      try {
        const response = await this.$http.get(
          `/property/user/${this.getLoggedUser.id_user}`
        );
        if (response.status === 200) {
          console.log(this.properties);
          this.properties = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadSales() {
      try {
        const response = await this.$http.get(
          `/sales/${this.getLoggedUser.id_user}`
        );
        if (response.status === 200) {
          console.log(this.properties);
          this.sales = response.data.content;
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
    getSales() {
      return this.sales;
    },
    ...mapGetters(["getLoggedUser"]),
  },
};
</script>

<style>
.topic {
  background-color: #e2e2e2;
  color: black;
}
.name {
  font-size: 20px;
  color: black;
  margin-bottom: 2px;
}

.conta {
  text-align: right;
}
</style>