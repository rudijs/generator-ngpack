import './home.styl';
import routes from './routes';
import homeCtrl from './home.controller';

export default ngModule => {
  routes(ngModule);
  homeCtrl(ngModule);
};
