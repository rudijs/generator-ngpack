import './<%= fileName %>.styl';
import routes from './routes';
import <%= ngFunctionName %> from './<%= fileName %>.controller';

export default ngModule => {
  routes(ngModule);
  <%= ngFunctionName %>(ngModule);
};
