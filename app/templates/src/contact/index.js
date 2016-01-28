import './contact.styl';
import contactRoutes from './contact.routes';
import contactCtrl from './contact.controller';

export default ngModule => {
  contactRoutes(ngModule);
  contactCtrl(ngModule);
};
