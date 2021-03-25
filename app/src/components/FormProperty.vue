<template>
  <div class="container-fluid">
    <b-form @submit.prevent="">
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

      <b-button class="btn-add mt-5 mb-5" type="submit" variant="danger"
        >Adicionar</b-button
      >
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
      },
    };
  },
};
</script>

<style>
</style>