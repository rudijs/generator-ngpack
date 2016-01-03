export default ngModule => {
  if (ON_TEST) {
    require('./data.service.spec').default(ngModule);
  }

  /**
   * Class representing a Data Service
   */
  class DataSvc {

    /**
     * Create a Data Service
     */
    constructor() {
      this.items = [
        'Apples',
        'Oranges',
        'Bananas'
      ];
    }
  }

  ngModule.service('DataSvc', DataSvc);
};
