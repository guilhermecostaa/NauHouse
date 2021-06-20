<template>
  <div>
    <div id="backofficeUsersEdit" class="container-fluid">
      <h3 class="title mt-4 ml-3">Editar {{ this.user[0].name }}</h3>
      <div class="mr-3">
        <FormUsers :edit="true" />
      </div>
    </div>
  </div>
</template>

<script>
import FormUsers from "@/components/FormUsers";
export default {
  name: "BackofficeUsersEdit",
  components: {
    FormUsers
  },
  created() {
    this.loadUser();
    console.log(this.user)
    this.$store.subscribe((mutation) => {
      switch (mutation.type) {
        case "ADD_USER":
          this.loadUsers();
          break;
        case "DELETE_USER":
          this.loadUsers();
          break;
      }
    });
  },
  data() {
    return {
      user: [],
    };
  },
  methods: {
    async loadUser() {
      try {
        const response = await this.$http.get(`/users/${this.$route.params.id}`);
        if (response.status === 200) {
          this.user = response.data.content;
          console.log(this.user);
          return this.user;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {},
};
</script>

<style>
#backofficeUsers .container-fluid {
  margin-left: 10px;
}
</style>