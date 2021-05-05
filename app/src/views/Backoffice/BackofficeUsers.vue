<template>
  <div>
    <div id="backofficeUsers" class="container-fluid">
      <h1 class="title mt-4 ml-4">Adicionar Utilizador</h1>
      <div class="mr-3">
        <FormUsers />
      </div>
    </div>

     <div class="dataTable container-fluid mt-5">
      <DataTable
        name="users"
        :items="getUsers"
        :fields="['name', 'number', 'email', 'actions']"
        type="users"
      ></DataTable>
    </div>
  </div>
</template>

<script>
import FormUsers from "@/components/FormUsers";
import DataTable from "@/components/DataTable.vue";
export default {
  name: "BackofficeUsers",
  components: {
    FormUsers,
    DataTable
  },
  created(){
    this.loadUsers()
    /*this.$store.subscribe(mutation => {
			switch (mutation.type) {
				case "ADD_NEW":
          this.loadNews();
          break
        case "DELETE_NEW":
          this.loadNews();
          break
			}
		})*/
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async loadUsers() {
      try {
        const response = await this.$http.get("/users")
				if (response.status === 200) {
          this.users = response.data.content
          console.log(this.users)
          return this.users;
				}
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
    getUsers(){
      return this.users
    },
    getRows(){
      return this.users.length
    }
  }
};
</script>

<style>
#backofficeUsers .container-fluid {
  margin-left: 10px;
}
</style>