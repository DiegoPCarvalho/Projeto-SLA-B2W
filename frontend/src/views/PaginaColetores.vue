<template>
  <div class="master">
      <div class="lks1">
        <h3>Coletores:</h3>
        <div class="rotas">
          <div class="bt1">
            <router-link  to="/AguardandoChegarColetores" class="caminho1">Aguardando Chegar na Zhaz</router-link> 
          </div>
          <div class="bt2">
            <router-link to="/AguardandoVistoriaColetores" class="caminho2">Aguardando Vistoria</router-link>
          </div>
          <div class="bt1">
           <router-link to="/AguardandoAprovacaoColetores" class="caminho1">Aguardando Aprovação</router-link>
          </div>
          <div class="bt2">
            <router-link to="/AprovadoColetores" class="caminho2">Aprovado</router-link>
          </div>
          <div class="bt1">
            <router-link to="/EmManutencaoColetores" class="caminho1">Em Manutenção</router-link>
          </div>
          <div class="bt2">
            <router-link to="/ManutencaoConcluidaColetores" class="caminho2">Manutenção Conlcuida</router-link>
          </div>
          <div class="bt1">
            <router-link to="/ReprovadoColetores" class="caminho1">Reprovado</router-link>
          </div>
          <div class="bt2">
            <router-link to="/FinalizadosColetores" class="caminho2">Finalizada</router-link>
          </div>
        </div>
      </div>
      <div class ="quadro" >
        <h1 class="texto"><i> Bem vindo a Consulta dos Coletores</i></h1>
        <router-view></router-view>
      </div>     
  </div>
</template>

<script>
  export default {
   
  }
</script>


<style>
.master {
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.lks1 {
  height: 540px;
  width: 20%;
}
.lks1 > h3{
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 50px;
  font-weight: bold;
}
.quadro {
  height: 540px;
  width: 79%;
  margin-left: 20px;
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

.texto > i {
  display: flex;
  justify-content: center;

  font-family: 'Times New Roman';
  font-weight: bold;
}
</style>