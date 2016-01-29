export default ngModule => {
  describe('side_nav_toggle.service', () => {
    beforeEach(window.module(ngModule.name));

    var NavToggleSvc;
    var spy = sinon.spy();

    beforeEach(window.module($provide => {
      $provide.value('$mdSidenav', () => {
        return {
          toggle: spy
        };
      });
    }));

    beforeEach(() => {
      inject(_NavToggleSvc_ => {
        NavToggleSvc = _NavToggleSvc_;
      });
    });

    it('should provide a list of fruit', () => {
      expect(NavToggleSvc).to.respondTo('toggleLeftMenu');

      NavToggleSvc.toggleLeftMenu();
      
      sinon.assert.calledOnce(spy);
    });
  });
};
