export default ngModule => {
  if (ON_TEST) {
    require('./<%= fileName %>.routes_spec').default(ngModule);
  }

  ngModule.config($stateProvider => {
    $stateProvider
      .state('<%= ngRouteName %>', {
        url: '/<%= ngRouteName %>',
        template: require('./<%= fileName %>.html'),
        controller: '<%= ngControllerName %>',
        controllerAs: 'vm'
      });
  });
};
