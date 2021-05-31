<template>
  <div id="consultores" class="container-fluid">
    <div class="row">
      <div class="col-md-10">
        <h3 class="title mt-4">Consultores</h3>
      </div>

      <div class="col-md-2 col-xs-12">
        <b-button
          squared
          class="btn-area mt-5 mr-3 right"
          type="submit"
          variant="danger"
          @click="btnReserveAreaClicked"
          >Área Reservada</b-button
        >
      </div>
    </div>

    <div>
      <span v-if="this.users.length === 0">SEM CONSULTORES ADICIONADOS</span>
      <div v-else>
        <div class="cards">
          <b-row>
            <ConsultantCard
              class="mt-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
              v-for="user in users"
              :key="user.id_user"
              :user="user"
            ></ConsultantCard>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConsultantCard from "@/components/ConsultantCard.vue";
export default {
  name: "Consultants",
  components: { ConsultantCard },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.loadUsers();
  },
  methods: {
    btnReserveAreaClicked() {
      this.$router.push({ name: "Login" });
    },
    async loadUsers() {
      try {
        const response = await this.$http.get(`/users`);
        if (response.status === 200) {
          this.users = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
    /*getConsultants(){
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].user_type_id !== 7) {
          this.consultants.push(this.users[i])
        } 
      }
      return this.consultants
    }*/
  },
};
</script>

<style>
button.btn.btn-area.right {
  color: #fff;
  background-color: #b01e0f;
  border-color: #b01e0f;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>