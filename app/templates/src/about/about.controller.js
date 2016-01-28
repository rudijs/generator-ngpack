export default ngModule => {
  if (ON_TEST) {
    require('./about.controller_spec').default(ngModule);
  }

  ngModule.controller('AboutCtrl', aboutCtrl);

  /**
   * AboutCtrl
   */
  function aboutCtrl() {
    var vm = this;
    vm.title = 'About';
  }
};
