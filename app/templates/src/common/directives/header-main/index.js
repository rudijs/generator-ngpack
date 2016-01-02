export default ngModule => {
  ngModule.directive('ssHeaderMain', () => {
    return {
      template: require('./header_main.html')
    };
  });
};
