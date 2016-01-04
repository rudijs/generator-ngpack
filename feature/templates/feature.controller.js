export default ngModule => {
  if (ON_TEST) {
    require('./<%= fileName %>.controller_spec').default(ngModule);
  }

  ngModule.controller('<%= ngControllerName %>', <%= ngControllerFunction %>);

  /**
   * <%= ngControllerName %>
   */
  function <%= ngControllerFunction %>() {
    var vm = this;
    vm.title = '<%= featureTitle %>';
  }
};
