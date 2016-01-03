export default ngModule => {

  describe('data.service', () => {

    beforeEach(window.module(ngModule.name));

    var DataSvc;

    beforeEach(() => {
      inject(_DataSvc_ => {
        DataSvc = _DataSvc_;
      });
    });

    it('should provide a list of fruit', () => {
      DataSvc.items.should.eql(['Apples', 'Oranges', 'Bananas']);
    });

  });

}