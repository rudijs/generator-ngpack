import './home.styl';
import './home_landscape.styl';
import './home_animations.styl';
import homeRoutes from './home.routes';
import homeCtrl from './home.controller';

export default ngModule => {
  homeRoutes(ngModule);
  homeCtrl(ngModule);
};
