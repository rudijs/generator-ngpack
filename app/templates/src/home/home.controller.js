export default ngModule => {

  ngModule.controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(DataSvc) {
    this.version = '1.0.0';
    this.items = DataSvc.items;
  };

};
