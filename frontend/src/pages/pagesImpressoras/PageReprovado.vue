<template>
  <div>
    <h1 class="titulo d-flex justify-content-center">
      <i
        class="d-flex justify-content-center"
        style="background-color: rgb(12, 74, 195)"
      >
        Reprovado
      </i>
    </h1>
<div class="paginacaoProcura">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <b-form-input
      v-model="filter"
      type="search"
      placeholder="Procure por OS"
      style="margin-left: 550px; margin-right: 15px; width: 300px;"
    ></b-form-input>
</div>
    <b-table
      id="my-table"
      :filter="filter"
      :items="coletores"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      perPage: 6,
      currentPage: 1,
      filter: null,
      coletores: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5000/impressoras/17").then((res) => {
      this.coletores = res.data;
    });
  },
  computed: {
    rows() {
      return this.coletores.length;
    },
  },
};
</script>

<style>
.titulo > i {
  color: white;
  font-family: "Times New Roman";
  border-radius: 5px;
  font-weight: bold;
  width: 500px;
}

.paginacaoProcura {
  display: flex;
  flex-direction: row;
}

.paginacaoProcura > b-form-input {
 display: flex;
 justify-content: flex-end;
  
}
</style>