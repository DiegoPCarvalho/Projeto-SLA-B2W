//#region  Configuração
import Vue from 'vue';
import Router from 'vue-router';
//#endregion

//#region Componentes
//componente
import PaginaHome from './views/PaginaHome.vue';
import PaginaColetores from './views/PaginaColetores.vue';
import PaginaLeitores from './views/PaginaLeitores.vue';
import PaginaImpressoras from './views/PaginaImpressoras.vue';

//#region Componentes Coletores Estagio
//paginas coletores
import AguardandoChegarColetores from './pages/pagesColetores/AguardandoChegar.vue';
import AguardandoVistoriaColetores from './pages/pagesColetores/AguardandoVistoria.vue';
import AguardandoAprovacaoColetores from './pages/pagesColetores/AguardandoAprovacao.vue';
import AprovadoColetores from './pages/pagesColetores/PageAprovado.vue';
import EmManutencaoColetores from './pages/pagesColetores/EmManutencao.vue';
import ManutencaoConcluidaColetores from './pages/pagesColetores/ManutencaoConcluida.vue';
import ReprovadoColetores from './pages/pagesColetores/PageReprovado.vue';
import ExpedicaoFaturaColetores from './pages/pagesColetores/ExpedicaoFatura.vue';
import FinalizadosColetores from './pages/pagesColetores/PageFinalizado.vue';
//#endregion

//#region Componentes Impressoras Estagio
//paginas Impressoras
import AguardandoChegarImpressora from './pages/pagesImpressoras/AguardandoChegar.vue';
import AguardandoVistoriaImpressora from './pages/pagesImpressoras/AguardandoVistoria.vue';
import AguardandoAprovacaoImpressora from './pages/pagesImpressoras/AguardandoAprovacao.vue';
import AprovadoImpressora from './pages/pagesImpressoras/PageAprovado.vue';
import EmManutencaoImpressora from './pages/pagesImpressoras/EmManutencao.vue';
import ManutencaoConcluidaImpressora from './pages/pagesImpressoras/ManutencaoConcluida.vue';
import ReprovadoImpressora from './pages/pagesImpressoras/PageReprovado.vue';
import ExpedicaoFaturaImpressora from './pages/pagesImpressoras/ExpedicaoFatura.vue'
import FinalizadosImpressora from './pages/pagesImpressoras/PageFinalizado.vue';
//#endregion

//#region Componentes Leitores Estagio
//paginas Leitores
import AguardandoChegarLeitores from './pages/pagesLeitores/AguardandoChegar.vue';
import AguardandoVistoriaLeitores from './pages/pagesLeitores/AguardandoVistoria.vue';
import AguardandoAprovacaoLeitores from './pages/pagesLeitores/AguardandoAprovacao.vue';
import AprovadoLeitores from './pages/pagesLeitores/PageAprovado.vue';
import EmManutencaoLeitores from './pages/pagesLeitores/EmManutencao.vue';
import ManutencaoConcluidaLeitores from './pages/pagesLeitores/ManutencaoConcluida.vue';
import ReprovadoLeitores from './pages/pagesLeitores/PageReprovado.vue';
import ExpedicaoFaturaLeitores from './pages/pagesLeitores/ExpedicaoFatura.vue';
import FinalizadosLeitores from './pages/pagesLeitores/PageFinalizado.vue';
//#endregion

//#endregion

//#region  Usando o Router
Vue.use(Router);
//#endregion

//#region Gerando Rotas
const generateRoute = componentName => {
  return {
    path: `/${componentName.toLowerCase()}`,
    name: componentName.toLowerCase(),
    // webpackChunkName: "[request]" o [request] será substituido por ([componentName]-vue)
    // o arquivo final será ([componentName]-vue.[hash].js) ex: About-vue-91es1946.js
    component: () => import(/* webpackChunkName: "[request]" */ `./views/${componentName}.vue`)
  }
}
//#endregion

//#region Lendo as Rotas
function loadRoutes() {
  // queremos apenas o nome do component e o keys() irá retorna tanto ./About quanto ./About.vue
  // então colocamos um regex informado que não queremos os arquivos que contém vue no nome
  // e no último paramêtro colocamos um lazy para informa que vai ser feito o carregamento por demanda
  const response = require.context('./views', true, /^((?!vue).)*$/, 'lazy')
  return response.keys()
    .map(item => item.replace('./', '')) // removendo o './'  dos nomes
    .filter(item => item !== 'Home') // removendo o Home da lista, pois ela será a rota principal
    .map(generateRoute) // gerando um array de Route
}
//#endregion

//#region Rotas do Sistema
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: PaginaHome
    },
    {
      path: '/coletores',
      name: 'Coletores',
      component: PaginaColetores,
      children: [
        {
          path: '/AguardandoChegarColetores',
          component: AguardandoChegarColetores
        },
        {
          path:'/AguardandoVistoriaColetores',
          component: AguardandoVistoriaColetores
        },
        {
          path:'/AguardandoAprovacaoColetores',
          component: AguardandoAprovacaoColetores
        },
        {
          path:'/AprovadoColetores',
          component: AprovadoColetores
        },
        {
          path:'/EmManutencaoColetores',
          component: EmManutencaoColetores
        },
        {
          path:'/ManutencaoConcluidaColetores',
          component: ManutencaoConcluidaColetores
        },
        {
          path:'/ReprovadoColetores',
          component: ReprovadoColetores
        },
        {
          path:'/ExpedicaoFaturamentoColetores',
          component: ExpedicaoFaturaColetores
        },
        {
          path:'/FinalizadosColetores',
          component: FinalizadosColetores
        }
      ]
    },
    {
      path: '/leitores',
      name: 'Leitores',
      component: PaginaLeitores,
      children: [
        {
          path: '/AguardandoChegarLeitores',
          component: AguardandoChegarLeitores
        },
        {
          path:'/AguardandoVistoriaLeitores',
          component: AguardandoVistoriaLeitores
        },
        {
          path:'/AguardandoAprovacaoLeitores',
          component: AguardandoAprovacaoLeitores
        },
        {
          path:'/AprovadoLeitores',
          component: AprovadoLeitores
        },
        {
          path:'/EmManutencaoLeitores',
          component: EmManutencaoLeitores
        },
        {
          path:'/ManutencaoConcluidaLeitores',
          component: ManutencaoConcluidaLeitores
        },
        {
          path:'/ReprovadoLeitores',
          component: ReprovadoLeitores
        },
        {
          path:'/ExpedicaoFaturamentoLeitores',
          component: ExpedicaoFaturaLeitores
        },
        {
          path:'/FinalizadosLeitores',
          component: FinalizadosLeitores
        }
      ]
    },
    {
      path: '/impressoras',
      name: 'Impressoras',
      component: PaginaImpressoras,
      children: [
        {
          path: '/AguardandoChegarImpressoras',
          component: AguardandoChegarImpressora
        },
        {
          path:'/AguardandoVistoriaImpressoras',
          component: AguardandoVistoriaImpressora
        },
        {
          path:'/AguardandoAprovacaoImpressoras',
          component: AguardandoAprovacaoImpressora
        },
        {
          path:'/AprovadoImpressoras',
          component: AprovadoImpressora
        },
        {
          path:'/EmManutencaoImpressoras',
          component: EmManutencaoImpressora
        },
        {
          path:'/ManutencaoConcluidaImpressoras',
          component: ManutencaoConcluidaImpressora
        },
        {
          path:'/ReprovadoImpressoras',
          component: ReprovadoImpressora
        },
        {
          path:'/ExpedicaoFaturamentoImpressoras',
          component: ExpedicaoFaturaImpressora
        },
        {
          path:'/FinalizadosImpressoras',
          component: FinalizadosImpressora
        }
      ]
    },

    ...loadRoutes()
  ]
})
//#endregion