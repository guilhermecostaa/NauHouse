<template>
  <div>
    <div id="backofficeUsers" class="container-fluid">
      <h1 class="title mt-4 ml-4">Adicionar Utilizador</h1>
      <div class="mr-3">
        <FormUsers />
      </div>
    </div>
  </div>
</template>

<script>
import FormUsers from "@/components/FormUsers";
export default {
  name: "BackofficeUsers",
  components: {
    FormUsers,
  },
};
</script>

<style>
#backofficeUsers .container-fluid {
  margin-left: 10px;
}
</style>