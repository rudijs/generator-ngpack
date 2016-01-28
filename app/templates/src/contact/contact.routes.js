export default ngModule => {
  if (ON_TEST) {
    require('./contact.routes_spec').default(ngModule);
  }

  ngModule.config($stateProvider => {
    $stateProvider
      .state('contact', {
        url: '/contact',
        template: require('./contact.html'),
        controller: 'ContactCtrl',
        controllerAs: 'vm'
      });
  });
};
