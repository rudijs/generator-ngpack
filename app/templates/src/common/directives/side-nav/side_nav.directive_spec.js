export default ngModule => {
  describe('app-side-nav.directive', () => {
    beforeEach(window.module(ngModule.name));

    var scope;
    var elm;

    beforeEach(() => {
      inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        elm = angular.element('<app-side-nav/>');
        $compile(elm)(scope);
      });
    });

    it('should provide an md-toolbar header', () => {
      elm.find('md-toolbar').length.should.equal(1);
    });
  });
};
