export default ngModule => {
  if (ON_TEST) {
    require('./header_main.directive_spec').default(ngModule);
  }

  ngModule.directive('appHeaderMain', () => {
    return {
      template: require('./header_main.html')
    };
  });
};
