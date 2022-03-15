import Vue from 'vue';
import Router from 'vue-router';

//componente
import PaginaHome from './views/PaginaHome.vue';
import PaginaColetores from './views/PaginaColetores.vue';
import PaginaLeitores from './views/PaginaLeitores.vue';
import PaginaImpressoras from './views/PaginaImpressoras.vue';

//paginas coletores
import AguardandoChegarColetores from './pages/pagesColetores/AguardandoChegar.vue';
import AguardandoVistoriaColetores from './pages/pagesColetores/AguardandoVistoria.vue';
import AguardandoAprovacaoColetores from './pages/pagesColetores/AguardandoAprovacao.vue';
import AprovadoColetores from './pages/pagesColetores/PageAprovado.vue';
import EmManutencaoColetores from './pages/pagesColetores/EmManutencao.vue';
import ManutencaoConcluidaColetores from './pages/pagesColetores/ManutencaoConcluida.vue';
import ReprovadoColetores from './pages/pagesColetores/PageReprovado.vue';
import FinalizadosColetores from './pages/pagesColetores/PageFinalizado.vue';

//paginas Impressoras
import AguardandoChegarImpressora from './pages/pagesImpressoras/AguardandoChegar.vue';
import AguardandoVistoriaImpressora from './pages/pagesImpressoras/AguardandoVistoria.vue';
import AguardandoAprovacaoImpressora from './pages/pagesImpressoras/AguardandoAprovacao.vue';
import AprovadoImpressora from './pages/pagesImpressoras/PageAprovado.vue';
import EmManutencaoImpressora from './pages/pagesImpressoras/EmManutencao.vue';
import ManutencaoConcluidaImpressora from './pages/pagesImpressoras/ManutencaoConcluida.vue';
import ReprovadoImpressora from './pages/pagesImpressoras/PageReprovado.vue';
import FinalizadosImpressora from './pages/pagesImpressoras/PageFinalizado.vue';

//paginas Leitores
import AguardandoChegarLeitores from './pages/pagesLeitores/AguardandoChegar.vue';
import AguardandoVistoriaLeitores from './pages/pagesLeitores/AguardandoVistoria.vue';
import AguardandoAprovacaoLeitores from './pages/pagesLeitores/AguardandoAprovacao.vue';
import AprovadoLeitores from './pages/pagesLeitores/PageAprovado.vue';
import EmManutencaoLeitores from './pages/pagesLeitores/EmManutencao.vue';
import ManutencaoConcluidaLeitores from './pages/pagesLeitores/ManutencaoConcluida.vue';
import ReprovadoLeitores from './pages/pagesLeitores/PageReprovado.vue';
import FinalizadosLeitores from './pages/pagesLeitores/PageFinalizado.vue';


Vue.use(Router);

const generateRoute = componentName => {
  return {
    path: `/${componentName.toLowerCase()}`,
    name: componentName.toLowerCase(),
    // webpackChunkName: "[request]" o [request] será substituido por ([componentName]-vue)
    // o arquivo final será ([componentName]-vue.[hash].js) ex: About-vue-91es1946.js
    component: () => import(/* webpackChunkName: "[request]" */ `./views/${componentName}.vue`)
  }
}
// const generateRoute2 = componentName2 => {
//     return {
//       path: `/coletores/${componentName2.toLowerCase()}`,
//       name: componentName2.toLowerCase(),

//       component: () => import (`./pages/pagesColetores/${componentName2}.vue`)
//     }
//   }

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

// function loadRoutes2 () {
//   const response = require('./pages/pagesColetores', true, /^((?!vue).)*$/, 'lazy')
//     return response.keys()
//       .map(item => item.replace('./', ''))
//       .filter(item => item !== 'Home')
//       .map(generateRoute2)
// }

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
          path:'/FinalizadosImpressoras',
          component: FinalizadosImpressora
        }
      ]
    },

    ...loadRoutes()
  ]
})