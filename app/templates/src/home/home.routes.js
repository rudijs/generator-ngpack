export default ngModule => {
  if (ON_TEST) {
    require('./home.routes_spec').default(ngModule);
  }

  ngModule.config(($stateProvider, $urlRouterProvider) => {
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise('/');

    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        template: require('./home.html'),
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      });
  });
};
