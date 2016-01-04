export default ngModule => {
  describe('<%= fileName %>.controller', () => {
    beforeEach(window.module(ngModule.name));

    var $scope;

    beforeEach(() => {
      inject(($rootScope, $controller) => {
        $scope = $rootScope.$new();
        $controller('<%= ngControllerName %> as vm', {
          $scope: $scope
        });
      });
    });

    it('should provide scope feature title', () => {
      $scope.vm.title.should.equal('<%= featureTitle %>');
    });
  });
};
