export default ngModule => {
  if (ON_TEST) {
    require('./<%= fileName %>.controller_spec').default(ngModule);
  }

  ngModule.controller('<%= ngControllerName %>', <%= ngFunctionName %>);

  /**
   * <%= ngControllerName %>
   */
  function <%= ngFunctionName %>() {
    var vm = this;
    vm.title = '<%= featureTitle %>';
  }
};
