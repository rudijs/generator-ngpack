import './home.styl';
import routes from './routes';
import HomeCtrl from './home.controller';

export default ngModule => {
  routes(ngModule);
  HomeCtrl(ngModule);
};
