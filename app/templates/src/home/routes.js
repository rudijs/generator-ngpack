export default ngModule => {
  ngModule.config(($stateProvider, $urlRouterProvider) => {
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise('/home');

    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/home',
        template: require('./home.html')
        // controller: 'SampleCtrl'
      });
  });
};
