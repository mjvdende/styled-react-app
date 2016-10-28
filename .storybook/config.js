import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

function loadStories() {
  // require all **/*.story.js files
  const testsContext = require.context('../src', true, /\.story\.jsx?$/);
  testsContext.keys().forEach(testsContext);
}

configure(loadStories, module);
