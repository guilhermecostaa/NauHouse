<template>
  <div>
    <div id="backofficeProperties" class="container-fluid">
      <h1 class="title mt-4 ml-4">Adicionar Imóvel</h1>
      <div class="mr-3">
        <FormProperty/>
      </div>
    </div>
  </div>
</template>

<script>
import FormProperty from "@/components/FormProperty.vue";
export default {
  name: "BackofficeProperties",
  components: {
    FormProperty,
  },
};
</script>

<style>
</style>