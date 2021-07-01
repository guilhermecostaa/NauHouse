<template>
  <b-col >
    <div>
      <b-card class="mb-1 mt-2">
        <b-img src="https://nauhouse.pt/wp-content/uploads/2014/05/Carlos-Concei%C3%A7%C3%A3o-525x328.png" fluid alt="Responsive image"></b-img>
        <b-card-text>
          <div class="mt-3">
            <h5> {{user.name}} </h5>
          </div>
          <div class="information">
            <p class="mt-0">Consultor Imobiliário</p>
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
  },
};
</script>

<style>
</style>