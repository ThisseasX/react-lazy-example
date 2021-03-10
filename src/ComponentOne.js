// Swap the below imports to see your bundle get filled with junk that you do not need
// Result: ipsum1, ipsum2, ipsum3, lorem1, lorem2, lorem3 are all included in the bundle
// import { lorem1 } from './junk';
import lorem1 from './junk/lorem1';

const ComponentOne = () => (
  <div>
    <h1>This is ComponentOne</h1>
  </div>
);

export default ComponentOne;
