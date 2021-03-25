<template>
    <div>
    <div id="backofficeNews" class="container-fluid">
      <h1 class="title mt-4 ml-4">Adicionar Noticia</h1>
      <div class="mr-3">
        <FormNews />
      </div>
    </div>
  </div>
</template>

<script>
import FormNews from "@/components/FormNews.vue";
export default {
  name: "BackofficeNews",
  components: {
    FormNews,
  },
};
</script>

<style>

</style>