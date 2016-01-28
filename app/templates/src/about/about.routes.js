export default ngModule => {
  if (ON_TEST) {
    require('./about.routes_spec').default(ngModule);
  }

  ngModule.config($stateProvider => {
    $stateProvider
      .state('about', {
        url: '/about',
        template: require('./about.html'),
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      });
  });
};
