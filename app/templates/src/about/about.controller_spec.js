export default ngModule => {
  describe('about.controller', () => {
    beforeEach(window.module(ngModule.name));

    var $scope;

    beforeEach(() => {
      inject(($rootScope, $controller) => {
        $scope = $rootScope.$new();
        $controller('AboutCtrl as vm', {
          $scope: $scope
        });
      });
    });

    it('should provide scope feature title', () => {
      $scope.vm.title.should.equal('About');
    });
  });
};
