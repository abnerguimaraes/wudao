const routes = [{
  path: '/',
  label: 'Home',
  name: '/',
}, {
  path: '/localizacao',
  label: 'Localização',
  name: '/localizacao',
}, {
  path: '/horarios',
  label: 'Horários',
  name: '/horarios',
}, {
  path: null,
  label: 'Estilos',
  name: '/styles',
  sub: [{
    path: '/mantis',
    label: 'Louva a Deus',
    name: '/mantis',
  },{
    path: '/monkey',
    label: 'Macaco de Ferro',
    name: '/money',
  }]
}, {
  path: '/photos',
  label: 'Fotos',
  name: '/photos',
}, {
  path: '/contato',
  label: 'Contato',
  name: '/contato',
}];

export default routes;