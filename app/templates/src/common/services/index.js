import dataSvc from './data.service';
import navToggleSvc from './side_nav_toggle.service';

export default ngModule => {
  dataSvc(ngModule);
  navToggleSvc(ngModule);
};
