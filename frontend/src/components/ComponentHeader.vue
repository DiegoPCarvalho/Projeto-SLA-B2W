<template>
 <div class="master bag-cor m-0" style="height: 100px;">
   <div class="logo">
     <router-link to="/home">
       <img src="../assets/img/logo1.png" class="zhaz">
     </router-link>
   </div>
   <div class="titulo">
     <h1 class="h1">Painel de Acompanhamento do Sla B2W</h1>
   </div>
 </div>
</template>

<script>
const response = require.context('../views', true, /^((?!vue).)*$/, 'lazy')
export default {
  methods: {
    getViews () {
      return response.keys()
        .map(item => item.replace('./', ''))
        .filter(item => item !== 'Home')
    }
  }
}
</script>

<style>

  .master {
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
   
  }
  .logo {
    display: flex;
    margin-right: 200px;
   
  }
  .titulo {
    display: flex;
  }

  .zhaz {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .bag-cor {
    background: rgb(12,74,195);
    background: linear-gradient(90deg, rgba(12,74,195,1) 31%, rgba(0,255,20,1) 70%);
    height: 70px;
    
  }
  .h1{
    display: flex;
    flex-direction: row;
    color: white;
    margin: 0;
    font-weight: bolder;
    font-family: 'Times New Roman', Times, serif;
    align-items: center;
  } 
  
</style>