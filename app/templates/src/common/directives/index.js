import headerMain from './header-main';
import sideNav from './side-nav';

export default ngModule => {
  headerMain(ngModule);
  sideNav(ngModule);
};
