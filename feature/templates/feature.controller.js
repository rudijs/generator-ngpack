export default ngModule => {
  ngModule.controller('<%= ngControllerName %>', <%= ngFunctionName %>);

  /**
   * <%= ngControllerName %>
   */
  function <%= ngFunctionName %>() {
    var vm = this;
    vm.title = '<%= featureTitle %>';
  }
};
