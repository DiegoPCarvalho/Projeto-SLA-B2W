import Vue from 'vue';
import Router from 'vue-router';

//componente
import PaginaHome from './views/PaginaHome.vue';
import PaginaColetores from './views/PaginaColetores.vue';
import PaginaLeitores from './views/PaginaLeitores.vue';
import PaginaImpressoras from './views/PaginaImpressoras.vue';

//paginas coletores
import AguardandoChegar from './pages/pagesColetores/AguardandoChegar.vue';
import AguardandoVistoria from './pages/pagesColetores/AguardandoVistoria.vue';

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
          path: '/AguardandoChegar',
          component: AguardandoChegar
        },
        {
          path:'/AguardandoVistoria',
          component: AguardandoVistoria
        }
      ]
    },
    {
      path: '/leitores',
      name: 'Leitores',
      component: PaginaLeitores
    },
    {
      path: '/impressoras',
      name: 'Impressoras',
      component: PaginaImpressoras
    },

    ...loadRoutes()
  ]
})