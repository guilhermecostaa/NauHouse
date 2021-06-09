<template>
  <div>
    <div id="backofficeUsersEdit" class="container-fluid">
      <h3 class="title mt-4 ml-4">Editar {{ user.name }}</h3>
      <div class="mr-3">
        <FormUsers />
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
        const response = await this.$http.get(`/user/${this.$route.params.id}`);
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