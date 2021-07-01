<template>
  <div class="container-fluid">
    <b-form
      @submit.prevent="addNew"
      enctype="multipart/form-data"
      method="post"
      action="/news"
    >
      <!-- Nome -->
      <div class="row">
        <div class="col-sm-12">
          <b-form-group id="input-title" label="Título" label-for="input-title">
            <b-form-input
              id="input-title"
              v-model="form.title"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- Foto -->
      <div class="row">
        <div class="col-sm-12">
          <b-form-group label="Foto">
            <b-form-file
              id="file-default"
              v-model="form.photo"
              ref="file"
              name="file"
              type="file"
              @change="selectFile"
            ></b-form-file>
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

      <div
        class="row align-items-center d-flex justify-content-center mt-5 mb-5"
      >
        <b-button class="btn-add mt-5 mb-5" type="submit" variant="danger"
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
        photo: null,
        desc: "",
      },
    };
  },
  methods: {
    selectFile() {
      this.form.photo = this.$refs.file.files[0];
      console.log(this.$refs.file.files[0]);
    },
    async addNew() {
      try {
        let formData = new FormData();
        formData.append("file", this.form.photo);
        console.log(formData);
        const response = await this.$http.post("/news", {
          Title: this.form.title,
          Image: this.formData,
          Desc: this.form.desc,
        });
        console.log(response);
        this.$swal({
          text: `Noticia Adicionada!`,
          icon: "success",
          button: false,
          timer: 2000,
        });
        this.form.title = "";
        this.form.photo = "";
        this.form.desc = "";
        this.$store.commit("ADD_NEW", "New Adicionada");
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
</style>