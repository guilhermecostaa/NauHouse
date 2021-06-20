<template>
  <b-col >
    <div>
      <b-card :title="user.name" :img-src="dataUrl" class="mb-1 mt-2">
        <b-card-text>
          <div class="information">
            <p class="mt">Consultor Imobiliário</p>
            <p><b-icon-telephone-fill /> +351 252167609</p>
            <p><b-icon-phone-fill /> {{ user.number }}</p>
            <p><i class="fas fa-envelope"></i> {{ user.email }}</p>
          </div>
        </b-card-text>
        <template #footer>
          <div style="text-align: center">
            <b-icon-facebook class="mr-3" />
            <b-icon-instagram />
          </div>
        </template>
      </b-card>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    dataUrl(){
        return 'data:image/jpeg;base64,' + btoa(
            new Uint8Array(this.user.avatar)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
    }
  },
};
</script>

<style>
</style>