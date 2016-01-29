export default ngModule => {
  if (ON_TEST) {
    require('./header_main.directive_spec').default(ngModule);
  }

  ngModule.directive('appHeaderMain', NavToggleSvc => {
    return {
      restrict: 'E',
      template: require('./header_main.html'),
      link: $scope => {
        $scope.toggleLeftMenu = () => {
          NavToggleSvc.toggleLeftMenu();
        };
      }
    };
  });
};
