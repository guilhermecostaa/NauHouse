<template>
  <div class="container-fluid">
    <b-form @submit.prevent="addProperty">
      <h4 class="subtitle mt-4">Descrição do Imóvel</h4>
      <!-- Titulo Subtitle-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group id="input-title" label="Título" label-for="input-title">
            <b-form-input
              id="input-title"
              v-model="form.title"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-subtitle"
            label="Subtítulo"
            label-for="input-subtitle"
          >
            <b-form-input
              id="input-subtitle"
              v-model="form.subtitle"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- Descrição -->
      <div class="row">
        <div class="col-sm-12">
          <b-form-group
            id="input-desc"
            label="Descrição"
            label-for="input-desc"
          >
            <b-form-textarea
              label="Descrição"
              id="textarea"
              v-model="desc"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </div>
      </div>

      <!-- Distrito Concelho-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-district"
            label="Distrito"
            label-for="input-district"
          >
            <b-form-input
              id="input-district"
              v-model="form.district"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-county"
            label="Concelho"
            label-for="input-county"
          >
            <b-form-input
              id="input-county"
              v-model="form.county"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- Morada CodPostal-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-address"
            label="Morada"
            label-for="input-address"
          >
            <b-form-input
              id="input-address"
              v-model="form.address"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-postalCode"
            label="Cód. Postal"
            label-for="input-postalCode"
          >
            <b-form-input
              id="input-postalCode"
              v-model="form.postalCode"
              type="text"
              pattern="[0-9]{4}-[0-9]{3}"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- Categoria Finalidade-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-category"
            label="Categoria:"
            label-for="input-category"
          >
            <b-form-select
              id="input-category"
              v-model="form.category"
              :options="categories"
              required
            ></b-form-select>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-purpose"
            label="Finalidade:"
            label-for="input-purpose"
          >
            <b-form-select
              id="input-purpose"
              v-model="form.purpose"
              :options="purposes"
              required
            ></b-form-select>
          </b-form-group>
        </div>
      </div>

      <!-- Preço Condição -->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group id="input-price" label="Preço" label-for="input-price">
            <b-form-input
              id="input-price"
              v-model="form.price"
              type="number"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-shape"
            label="Condição:"
            label-for="input-shape"
          >
            <b-form-select
              id="input-shape"
              v-model="form.shape"
              :options="shape"
              required
            ></b-form-select>
          </b-form-group>
        </div>
      </div>

      <!-- IdImóvel EficienciaEnergética -->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group id="input-id" label="Id do Imóvel" label-for="input-id">
            <b-form-input
              id="input-id"
              v-model="form.id"
              type="number"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-energeticEfficiency"
            label="Eficiência Energética:"
            label-for="input-energeticEfficiency"
          >
            <b-form-select
              id="input-energeticEfficiency"
              v-model="form.energeticEfficiency"
              :options="energeticEfficiency"
              required
            ></b-form-select>
          </b-form-group>
        </div>
      </div>

      <!-- Habitação AnodeConstrução-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-habitation"
            label="Habitação"
            label-for="input-habitation"
          >
            <b-form-input
              id="input-habitation"
              v-model="form.habitation"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-constructionYear"
            label="Ano de Construção"
            label-for="input-constructionYear"
          >
            <b-form-input
              id="input-constructionYear"
              v-model="form.constructionYear"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- AreaUtil AreaTerreno-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-usableArea"
            label="Área Útil"
            label-for="input-usableArea"
          >
            <b-form-input
              id="input-usableArea"
              v-model="form.usableArea"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-landArea"
            label="Área do Terreno"
            label-for="input-landArea"
          >
            <b-form-input
              id="input-landArea"
              v-model="form.landArea"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- AreaBrutadeConstrução AreaImplementação-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-constructionGrossArea"
            label="Área bruta de Construção"
            label-for="input-constructionGrossArea"
          >
            <b-form-input
              id="input-constructionGrossArea"
              v-model="form.constructionGrossArea"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-implementationArea"
            label="Área de Implementação"
            label-for="input-implementationArea"
          >
            <b-form-input
              id="input-implementationArea"
              v-model="form.implementationArea"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- Assoalhadas CasasdeBanho-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-rooms"
            label="Assoalhadas"
            label-for="input-rooms"
          >
            <b-form-input
              id="input-rooms"
              v-model="form.rooms"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-bathrooms"
            label="Casas de Banho"
            label-for="input-bathrooms"
          >
            <b-form-input
              id="input-bathroom"
              v-model="form.bathroom"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- Suites Quartos-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-suites"
            label="Suites"
            label-for="input-suites"
          >
            <b-form-input
              id="input-suites"
              v-model="form.suites"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-bedrooms"
            label="Quartos"
            label-for="input-bedrooms"
          >
            <b-form-input
              id="input-bedrooms"
              v-model="form.bedrooms"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- Garegem Parqueamento-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-garage"
            label="Garagem Fechada"
            label-for="input-garage"
          >
            <b-form-input
              id="input-garage"
              v-model="form.garage"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-parking"
            label="Parqueamento"
            label-for="input-parking"
          >
            <b-form-input
              id="input-parking"
              v-model="form.parking"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- Video Foto-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group label="Video">
            <b-form-file id="file-default" v-model="video"></b-form-file>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group label="Foto">
            <b-form-file id="file-default" v-model="photo"></b-form-file>
          </b-form-group>
        </div>
      </div>

      <!-- Estado Consultor-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-status"
            label="Estado:"
            label-for="input-status"
          >
            <b-form-select
              id="input-status"
              v-model="form.status"
              :options="status"
              required
            ></b-form-select>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-consultantId"
            label="Consultor:"
            label-for="input-consultantId"
          >
            <b-form-select
              id="input-consultantId"
              v-model="form.consultantId"
              :options="consultants"
              required
            ></b-form-select>
          </b-form-group>
        </div>
      </div>

      <h4 class="subtitle mt-4">Caracteristica do Imóvel</h4>
      <!-- Exposição e Vista-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Exposição Solar</p>
          <b-form-checkbox-group
            id="checkbox-group-sunExposure"
            v-model="sunExposure"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Vista</p>
          <b-form-checkbox-group
            id="checkbox-group-view"
            v-model="view"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Piso e Revestimento-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Piso</p>
          <b-form-checkbox-group
            id="checkbox-group-level"
            v-model="level"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Vista</p>
          <b-form-checkbox-group
            id="checkbox-group-view"
            v-model="externalCoating"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Caixilharia e Persianas-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Caixilharia</p>
          <b-form-checkbox-group
            id="checkbox-group-floor"
            v-model="frames"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Persianas</p>
          <b-form-checkbox-group
            id="checkbox-group-view"
            v-model="blinds"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Pavimento e Segurança-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Pavimento</p>
          <b-form-checkbox-group
            id="checkbox-group-floor"
            v-model="floor"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Seguranças</p>
          <b-form-checkbox-group
            id="checkbox-group-security"
            v-model="security"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Alarme e Infraestruturas-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Alarme</p>
          <b-form-checkbox-group
            id="checkbox-group-alarm"
            v-model="alarm"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Infraestruturas</p>
          <b-form-checkbox-group
            id="checkbox-group-infraestructure"
            v-model="infraestructure"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Cozinha e Equipamento-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Cozinha</p>
          <b-form-checkbox-group
            id="checkbox-group-kitchen"
            v-model="kitchen"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">Equipamento de Cozinha</p>
          <b-form-checkbox-group
            id="checkbox-group-equipment"
            v-model="equipment"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Anotações-->
      <div class="row">
        <div class="col-sm-12">
          <p class="bold mt-3 mb-1">Anotações Gerais</p>
          <b-form-checkbox-group
            id="checkbox-group-notes"
            v-model="notes"
            :options="sunExposure"
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <div
        class="row align-items-center d-flex justify-content-center mt-5 mb-5"
      >
        <b-button class="btn-add" type="submit" variant="danger"
          >Adicionar</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        subtitle: "",
        desc: "",
        district: "",
        county: "",
        address: "",
        postalCode: "",
        price: "",
        category: null,
        purpose: null,
        shape: null,
        id: "",
        energeticEfficiency: null,
        habitation: "",
        constructionYear: "",
        usableArea: "",
        landArea: "",
        constructionGrossArea: "",
        implementationArea: "",
        rooms: "",
        bathroom: "",
        suites: "",
        bedrooms: "",
        garage: "",
        parking: "",
        video: null,
        photos: [null],
        status: "",
        consultantId: "",
        sunExposure: [],
        view: [],
        level: [],
        externalCoating: [],
        frames: [],
        blinds: [],
        floor: [],
        security: [],
        alarm: [],
        infraestructure: [],
        kitchen: [],
        equipment: [],
        notes: [],
      },
      categories: [
        { text: "Select One", value: null },
        { text: "Apartamento", value: "1" },
        { text: "Moradia", value: "2" },
      ],
      purposes: [
        { text: "Select One", value: null },
        { text: "Venda", value: "1" },
        { text: "Arrendamento", value: "2" },
      ],
      shape: [
        { text: "Select One", value: null },
        { text: "Novo", value: "1" },
        { text: "Semi-Novo", value: "2" },
        { text: "Ruinas", value: "3" },
      ],
      energeticEfficiency: [
        { text: "Select One", value: null },
        { text: "A", value: "1" },
        { text: "B", value: "2" },
        { text: "C", value: "3" },
      ],
      consultants: [
        { text: "Select One", value: null },
        { text: "Carla Lopes", value: "1" },
        { text: "Carlos Conceição", value: "2" },
        { text: "Tânia Igreja", value: "3" },
      ],
      status: [
        { text: "Select One", value: null },
        { text: "Livre", value: "1" },
        { text: "Reservado", value: "2" },
        { text: "Cancelado", value: "3" },
      ],
      sunExposure: [
        { text: "Norte", value: "Norte" },
        { text: "Sul", value: "Sul" },
        { text: "Oesta(poente)", value: "Oeste" },
        { text: "Este(Nascente", value: "Este" },
        { text: "Sudoeste", value: "Sudoeste" },
        { text: "Sudeste", value: "Sudeste" },
      ],
    };
  },
  methods: {
    async addProperty() {
      try {
        const response = await this.$http.post("/news", {
          title: this.form.title,
          subtitle: this.form.subtitle,
          desc: this.form.desc,
          district: this.form.district,
          county: this.form.county,
          address: this.form.address,
          postalCode: this.form.postalCode,
          price: this.form.price,
          idCategory: this.form.category,
          idPurpose: this.form.purpose,
          idShape: this.form.shape,
          idProperty: this.form.id,
          idEnergeticEfficiency: this.form.energeticEfficiency,
          habitation: this.form.habitation,
          constructionYear: this.form.constructionYear,
          usableArea: this.form.usableArea,
          landArea: this.form.landArea,
          constructionGrossArea: this.form.constructionGrossArea,
          implementationArea: this.implementationArea,
          room: this.form.rooms,
          bathrooms: this.form.bathroom,
          suites: this.form.suites,
          bedroom: this.form.bedrooms,
          closedGarage: this.form.garage,
          parking: this.form.parking,
          photos: this.form.photos,
          video: this.form.video,   
          consultantId: this.form.consultantId,
          idStatus: this.form.status      
        });
        console.log(response);
        this.$swal({
          text: `Noticia Adicionada!`,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        this.$store.commit("ADD_PROPERTY", "Imóvel Adicionada");
      } catch (err) {
        console.log(err);
        if (err) {
          this.$swal({
            text: `Ups occoreu um erro!`,
            icon: "error",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      }
    },
  },
};
</script>

<style>
p.bold {
  font-weight: bold;
}
</style>