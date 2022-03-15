<template>
  <div class="master m-0">
    <div class="nave">
        <div class="div mb-5 mt-5">
          <router-link to="/home">Home</router-link>
        </div>
        <div class="div mb-5">
          <router-link to="/coletores">Coletores</router-link>
        </div>
        <div class="div mb-5">
          <router-link to="/leitores">Leitores</router-link>
        </div>
        <div class="div mb-5">
          <router-link to="/impressoras">Impressoras</router-link>
        </div>
    </div>
    <div class="conteudo">
      <router-view></router-view>
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
  justify-content: flex-start;

  height: 591px;
  width: 100%;
}

.nave {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin-left: 0px;
    margin-right: 15px;
    
  
    width: 155px;
    height: 100%;
    background-color: rgb(12,74,195);
   }

.div > a {
       text-decoration: none;
       color: white;
       border: 3px solid rgba(0,255,20,1);
       padding: 10px;
       border-radius: 15px; 
       margin-left: 5px;
       background-color: rgba(0,255,20,1);
       color: black;
       font-weight: bold;
}
.div > router-link {
       text-decoration: none;
       color: white;
       border: 3px solid rgba(0,255,20,1);
       padding: 10px;
       border-radius: 15px; 
       margin-left: 5px;
       background-color: rgba(0,255,20,1);
       color: black;
       font-weight: bold;
}

.conteudo {
  border: 5px solid;
  height: 560px;
  width: 100%;
  margin-top: 15px;
  margin-right: 15px;
}
</style>