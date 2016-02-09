export default ngModule => {
  if (ON_TEST) {
    require('./side_nav_toggle.service_spec').default(ngModule);
  }

  /**
   * Nav Toggle Service
   * @param {$mdSidenav} $mdSidenav dependency injection
   * @return {Object} NavToggleSvc
   */
  function navToggleSvc($mdSidenav) {
    /**
     * Toggle the left side menu
     */
    function toggleLeftMenu() {
      $mdSidenav('left').toggle();
    }

    return {
      toggleLeftMenu: toggleLeftMenu
    };
  }

  ngModule.factory('NavToggleSvc', navToggleSvc);
};
