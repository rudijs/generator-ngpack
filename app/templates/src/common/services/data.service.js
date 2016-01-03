export default ngModule => {

  if (ON_TEST) {
    require('./data.service.spec').default(ngModule);
  }

  class DataSvc {
    constructor() {
      this.items = [
        'Apples',
        'Oranges',
        'Bananas'
      ];
    }
  };

  ngModule.service('DataSvc', DataSvc);

};
