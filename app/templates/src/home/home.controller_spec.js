export default ngModule => {
  describe('home.controller', () => {
    beforeEach(window.module(ngModule.name));

    var $scope;

    beforeEach(() => {
      inject(($rootScope, $controller) => {
        $scope = $rootScope.$new();
        $controller('HomeCtrl as vm', {
          $scope: $scope
        });
      });
    });

    it('should provide scope feature title', () => {
      $scope.vm.version.should.equal('1.0.0');
    });
  });
};
