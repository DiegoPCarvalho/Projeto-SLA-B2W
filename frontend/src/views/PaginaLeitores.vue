<template>
  <div class="master">
      <div class="lks3">
        <h3>Leitores:</h3>
        <div class="rotas">
          <div class="bt1">
            <router-link to="/AguardandoChegarLeitores" class="caminho1">Aguardando Chegar na Zhaz</router-link> 
          </div>
          <div class="bt2">
            <router-link to="/AguardandoVistoriaLeitores" class="caminho2">Aguardando Vistoria</router-link>
          </div>
          <div class="bt1">
           <router-link to="/AguardandoAprovacaoLeitores" class="caminho1">Aguardando Aprovação</router-link>
          </div>
          <div class="bt2">
            <router-link to="/AprovadoLeitores" class="caminho2">Aprovado</router-link>
          </div>
          <div class="bt1">
            <router-link to="/EmManutencaoLeitores" class="caminho1">Em Manutenção</router-link>
          </div>
          <div class="bt2">
            <router-link to="/ManutencaoConcluidaLeitores" class="caminho2">Manutenção Conlcuida</router-link>
          </div>
          <div class="bt1">
            <router-link to="/ReprovadoLeitores" class="caminho1">Reprovado</router-link>
          </div>
          <div class="bt2">
            <router-link to="/FinalizadosLeitores" class="caminho2">Finalizada</router-link>
          </div>
        </div>
      </div>
      <div class="tb">
        <h1> Tabels </h1>
        <router-view></router-view>
      </div>     
  </div>
</template>

<script>

</script>


<style>
.master {
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.lks3 {
  height: 540px;
  width: 20%;
}
.lks3 > h3{
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 50px;
  font-weight: bold;
}
.tb {
  border: 5px solid;
  height: 540px;
  width: 79%;
  margin-left: 5px;
}
.rotas {
  display: flex;
  flex-direction: column;
}

.rotas .bt1 {
  margin-top: 10px;
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

.rotas .bt2 {
  margin-top: 10px;
  text-decoration: none;
  color: white;
  border: 3px solid rgb(9, 66, 223);
  padding: 10px;
  border-radius: 15px; 
  margin-left: 5px;
  background-color: rgb(9, 66, 223);
  color: black;
  font-weight: bold;
}

.bt1 .caminho1 {
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.bt2 .caminho2 {
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
}
</style>