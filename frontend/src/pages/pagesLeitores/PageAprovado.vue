<template>
  <div>
    <h1 class="titulo d-flex justify-content-center">
      <i class="d-flex justify-content-center"> 
        Aprovado 
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
  mounted () {
    axios.get("http://localhost:5000/leitores/8").then((res) => {
      this.coletores = res.data;
    });
  },
  computed: {
    rows() {
      return this.coletores.length
    }
  }
  
};
</script>

<style>
  .titulo > i {
    color: white;
    font-family: 'Times New Roman';
    border-radius: 5px;
    background-color: rgba(0,255,20,1);
    font-weight: bold;
    width: 500px;
  }
</style>