import widget from './widget';
import counter from './counter';

export default ngModule => {
  widget(ngModule);
  counter(ngModule);
};
