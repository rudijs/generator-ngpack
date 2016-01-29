export default ngModule => {
  if (ON_TEST) {
    require('./side_nav.directive_spec').default(ngModule);
  }

  ngModule.directive('appSideNav', (NavToggleSvc) => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./side_nav.html'),
      link: function (scope) {
          // scope.links = NavTopLinksSvc.urls;
          scope.toggleLeftMenu = NavToggleSvc.toggleLeftMenu;
        }
    };
  });
};
