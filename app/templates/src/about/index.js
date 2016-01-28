import './about.styl';
import aboutRoutes from './about.routes';
import aboutCtrl from './about.controller';

export default ngModule => {
  aboutRoutes(ngModule);
  aboutCtrl(ngModule);
};
