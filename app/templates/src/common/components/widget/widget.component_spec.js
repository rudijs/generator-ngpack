export default ngModule => {
  describe('app-widget.component', () => {
    beforeEach(window.module(ngModule.name));

    var scope;
    var elm;
    var spy = sinon.spy();

    beforeEach(window.module($provide => {
      $provide.value('$log', {
        info: spy
      });
    }));

    beforeEach(() => {
      inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        elm = angular.element('<app-widget/>');
        $compile(elm)(scope);
      });
    });

    it('should provide a button to click', () => {
      elm.find('button').length.should.equal(1);
    });

    it('should log() info()', () => {
      var isolateScope = elm.isolateScope().$ctrl;
      isolateScope.log();
      sinon.assert.calledOnce(spy);
    });
  });
};
