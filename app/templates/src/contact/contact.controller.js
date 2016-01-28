export default ngModule => {
  if (ON_TEST) {
    require('./contact.controller_spec').default(ngModule);
  }

  ngModule.controller('ContactCtrl', contactCtrl);

  /**
   * ContactCtrl
   */
  function contactCtrl() {
    var vm = this;
    vm.title = 'Contact';
  }
};
