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
              v-model="form.desc"
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
              :options="
                categories.map((category) => {
                  return { value: category.id_category, text: category.name };
                })
              "
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
              :options="
                purposes.map((purpose) => {
                  return { value: purpose.id_purpose, text: purpose.name };
                })
              "
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
              :options="
                shapes.map((shape) => {
                  return { value: shape.id_shape, text: shape.shape };
                })
              "
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
              :options="
                energeticEfficiency.map((energeticEfficiency) => {
                  return {
                    value: energeticEfficiency.id_energetic_efficiency,
                    text: energeticEfficiency.value,
                  };
                })
              "
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
            <b-form-file id="file-video" v-model="form.video"></b-form-file>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group label="Foto">
            <b-form-file id="file-photo" v-model="form.photo"></b-form-file>
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
              :options="
                status.map((status) => {
                  return { value: status.id_status, text: status.status };
                })
              "
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
          <p class="bold mt-3 mb-1">{{ groups[0].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-sunExposure"
            v-model="sunExposure"
            :options="
              getCharacteristicsByGroupId(groups[0].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[1].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-view"
            v-model="view"
            :options="
              getCharacteristicsByGroupId(groups[1].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Piso e Revestimento-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[2].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-level"
            v-model="level"
            :options="
              getCharacteristicsByGroupId(groups[2].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[12].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-externalCoating"
            v-model="externalCoating"
            :options="
              getCharacteristicsByGroupId(groups[12].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Caixilharia e Persianas-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[3].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-frames"
            v-model="frames"
            :options="
              getCharacteristicsByGroupId(groups[3].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[4].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-blinds"
            v-model="blinds"
            :options="
              getCharacteristicsByGroupId(groups[4].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Pavimento e Segurança-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[5].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-floor"
            v-model="floor"
            :options="
              getCharacteristicsByGroupId(groups[5].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[6].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-security"
            v-model="security"
            :options="
              getCharacteristicsByGroupId(groups[6].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Alarme e Infraestruturas-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[7].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-alarm"
            v-model="alarm"
            :options="
              getCharacteristicsByGroupId(groups[7].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[8].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-infraestructure"
            v-model="infraestructure"
            :options="
              getCharacteristicsByGroupId(groups[8].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Cozinha e Equipamento-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[9].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-kitchen"
            v-model="kitchen"
            :options="
              getCharacteristicsByGroupId(groups[9].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[10].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-equipment"
            v-model="equipment"
            :options="
              getCharacteristicsByGroupId(groups[10].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
          >
          </b-form-checkbox-group>
        </div>
      </div>

      <!-- Anotações-->
      <div class="row">
        <div class="col-sm-12">
          <p class="bold mt-3 mb-1">{{ groups[11].name }}</p>
          <b-form-checkbox-group
            id="checkbox-group-notes"
            v-model="notes"
            :options="
              getCharacteristicsByGroupId(groups[11].id_group).map(
                (characteristic) => {
                  return {
                    value: characteristic.id_characteristic,
                    text: characteristic.characteristic,
                  };
                }
              )
            "
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
  created() {
    this.loadCategories();
    this.loadPurposes();
    this.loadShapes();
    this.loadEnergeticEfficiency();
    this.loadStatus();
    this.loadGroups();
    this.loadCharacteristics();
  },
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
      },
      categories: [],
      purposes: [],
      shapes: [],
      energeticEfficiency: [],
      consultants: [
        { text: "Select One", value: null },
        { text: "Carla Lopes", value: "1" },
        { text: "Carlos Conceição", value: "2" },
        { text: "Tânia Igreja", value: "3" },
      ],
      groups: [],
      characteristics: [],
      status: [],
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
    };
  },
  methods: {
    getCharacteristicsByGroupId(id) {
      return this.characteristics.filter(
        (characteristic) => characteristic.id_group === id
      );
    },
    async loadCharacteristics() {
      try {
        const response = await this.$http.get(`/characteristics`);
        if (response.status === 200) {
          this.characteristics = response.data.content;
          console.log(this.characteristics);
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadGroups() {
      try {
        const response = await this.$http.get(`/group`);
        if (response.status === 200) {
          this.groups = response.data.content;
          console.log(this.groups);
        }
      } catch (err) {
        console.log(err.response);
      }
    },
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
    async loadEnergeticEfficiency() {
      try {
        const response = await this.$http.get(`/energeticEfficiency`);
        if (response.status === 200) {
          this.energeticEfficiency = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadStatus() {
      try {
        const response = await this.$http.get(`/status`);
        if (response.status === 200) {
          this.status = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
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
          idStatus: this.form.status,
        });
        console.log(response);
        this.$swal({
          text: `Noticia Adicionada!`,
          icon: "success",
          button: false,
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
            button: false,
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