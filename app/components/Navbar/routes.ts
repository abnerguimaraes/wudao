const routes = [{
  path: '#inicio',
  label: 'Início',
  name: '/',
},{
  path: null,
  label: 'Estilos',
  name: '/styles',
  sub: [{
    path: '#mantis',
    label: 'Louva a Deus',
    name: '/mantis',
    parent: 'Estilos',
  },{
    path: '#monkey',
    label: 'Macaco de Ferro',
    name: '/monkey',
    parent: 'Estilos',
  },{
    path: '#north',
    label: 'Shaolin do Norte',
    name: '/north',
    parent: 'Estilos',
  }]
}, {
  path: '#photos',
  label: 'Fotos',
  name: '/photos',
},{
  path: null,
  label: 'Mestres',
  name: '/mestres',
  sub: [{
    path: '#fernando',
    label: 'Shifu Fernando',
    name: '/fernando',
    parent: 'Mestres',
  }, {
    path: '#melo',
    label: 'Luis Mello',
    name: '/melo',
    parent: 'Mestres',
  }, {
    path: '#cefas',
    label: 'Roberto Cefas',
    name: '/cefas',
    parent: 'Mestres',
  }],
}, {
  path: '#contato',
  label: 'Horários',
  name: '/horarios',
}, {
  path: '#localizacao',
  label: 'Localização',
  name: '/localizacao',
}];

export default routes;