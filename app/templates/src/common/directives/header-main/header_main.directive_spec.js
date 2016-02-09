export default ngModule => {
  describe('app-header-main.directive', () => {
    beforeEach(window.module(ngModule.name));

    var scope;
    var elm;
    var spy = sinon.spy();

    beforeEach(window.module($provide => {
      $provide.value('NavToggleSvc', {
        toggleLeftMenu: spy
      });
    }));

    beforeEach(() => {
      inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        elm = angular.element('<app-header-main/>');
        $compile(elm)(scope);
      });
    });

    it('should provide a header', () => {
      elm.find('md-toolbar').length.should.equal(1);
      elm.text().should.match(/Juggernaut Site/);

      scope.toggleLeftMenu();
      sinon.assert.calledOnce(spy);
    });
  });
};
