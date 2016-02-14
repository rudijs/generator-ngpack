export default ngModule => {
  if (ON_TEST) {
    require('./widget.component_spec').default(ngModule);
  }

  /**
   * Widget Controller
   */
  class WidgetCtrl {
    /**
     * WidgetCtrl constructor
     * @param {object} $log DI $log service
     */
    constructor($log) {
      this.logger = $log;
    }

    /**
     * Example controller method
     * Usage: $ctrl.log();
     */
    log() {
      this.logger.info('Widget!: ' + new Date());
    }
  }

  ngModule.component('appWidget', {
    // bindings: {
    //   items: '='
    // },
    template: require('./widget.html'),
    controller: WidgetCtrl
  });
};
