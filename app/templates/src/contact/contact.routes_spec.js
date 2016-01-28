export default ngModule => {
  describe('contact.routes', () => {
    beforeEach(window.module(ngModule.name));

    let $state;

    beforeEach(inject(_$state_ => {
      $state = _$state_;
    }));

    it('should have a contact route', () => {
      let list = $state.get().map(item => {
        return item.name;
      });

      /* eslint-disable no-unused-expressions */
      list.includes('contact').should.be.true;
    });
  });
};
