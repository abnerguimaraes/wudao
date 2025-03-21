const routes = [{
  path: '#inicio',
  label: 'Início',
  name: '/',
}, {
  path: '#localizacao',
  label: 'Localização',
  name: '/localizacao',
}, {
  path: '#contato',
  label: 'Horários',
  name: '/horarios',
}, {
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