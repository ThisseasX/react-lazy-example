// Swap the below imports to see your bundle get filled with junk that you do not need
// Result: ipsum1, ipsum2, ipsum3, lorem1, lorem2, lorem3 are all included in the bundle
// import { ipsum1 } from './junk';
import ipsum1 from './junk/ipsum1';

const ComponentTwo = () => (
  <div>
    <h1>This is ComponentTwo</h1>
  </div>
);

export default ComponentTwo;
