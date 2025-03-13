const routes = [{
  path: '#home',
  label: 'Home',
  name: '/',
}, {
  path: '#localizacao',
  label: 'Localização',
  name: '/localizacao',
}, {
  path: '#horarios',
  label: 'Horários',
  name: '/horarios',
}, {
  path: null,
  label: 'Estilos',
  name: '/styles',
  sub: [{
    path: '#styles',
    label: 'Louva a Deus',
    name: '/mantis',
    parent: 'Estilos',
  },{
    path: '#styles',
    label: 'Macaco de Ferro',
    name: '/money',
    parent: 'Estilos',
  }]
}, {
  path: '#photos',
  label: 'Fotos',
  name: '/photos',
}, {
  path: '#contato',
  label: 'Contato',
  name: '/contato',
}];

export default routes;