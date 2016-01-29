export default ngModule => {
  if (ON_TEST) {
    require('./side_nav_toggle.service_spec').default(ngModule);
  }

  function navToggleSvc($mdSidenav) {

    function toggleLeftMenu() {
        $mdSidenav('left').toggle();
    }

    return {
      toggleLeftMenu: toggleLeftMenu
    };
  }

  ngModule.factory('NavToggleSvc', navToggleSvc);
};
