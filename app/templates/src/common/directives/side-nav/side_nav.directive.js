export default ngModule => {
  if (ON_TEST) {
    require('./side_nav.directive_spec').default(ngModule);
  }

  ngModule.directive('appSideNav', NavToggleSvc => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./side_nav.html'),
      link: link
    };
    /**
     * Directive link functions
     * @param {scope} scope DI Angular scope
     */
    function link(scope) {
      // scope.links = NavTopLinksSvc.urls;
      scope.toggleLeftMenu = NavToggleSvc.toggleLeftMenu;
    }
  });
};
