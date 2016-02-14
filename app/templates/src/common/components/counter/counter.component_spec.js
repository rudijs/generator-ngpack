export default ngModule => {
  describe('app-counter.component', () => {
    beforeEach(window.module(ngModule.name));

    var scope;
    var elm;

    beforeEach(() => {
      inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        elm = angular.element('<app-counter/>');
        $compile(elm)(scope);
      });
    });

    it('should increment and decrement a counter', () => {
      var isolateScope = elm.isolateScope().$ctrl;

      isolateScope.value.should.equal(0);

      isolateScope.increment();
      isolateScope.value.should.equal(1);

      isolateScope.decrement();
      isolateScope.value.should.equal(0);

      isolateScope.increment();
      isolateScope.value.should.equal(1);

      isolateScope.incrementIfOdd();
      isolateScope.value.should.equal(2);

      isolateScope.incrementIfOdd();
      isolateScope.value.should.equal(2);
    });

    it('should increment async', done => {
      var isolateScope = elm.isolateScope().$ctrl;

      isolateScope.value.should.equal(0);

      isolateScope.incrementAsync(20);

      setTimeout(() => {
        isolateScope.value.should.equal(1);
        done();
      }, 30);
    });
  });
};
