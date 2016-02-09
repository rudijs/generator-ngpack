export default ngModule => {
  describe('about.routes', () => {
    beforeEach(window.module(ngModule.name));

    let $state;

    beforeEach(inject(_$state_ => {
      $state = _$state_;
    }));

    it('should have a about route', () => {
      let list = $state.get().map(item => {
        return item.name;
      });

      /* eslint-disable no-unused-expressions */
      list.indexOf('about').should.not.equal(-1);
    });
  });
};
