import './<%= fileName %>.styl';
import <%= ngFunctionName %>Routes from './<%= fileName %>.routes';
import <%= ngFunctionName %>Ctrl from './<%= fileName %>.controller';

export default ngModule => {
  <%= ngFunctionName %>Routes(ngModule);
  <%= ngFunctionName %>Ctrl(ngModule);
};
