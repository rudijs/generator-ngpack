export default ngModule => {
  ngModule.controller('HomeCtrl', homeCtrl);

  /**
   * Home Controller
   * @param {DataSvc} DataSvc Data Service.
   */
  function homeCtrl(DataSvc) {
    this.version = '1.0.0';
    this.items = DataSvc.items;
  }
};
