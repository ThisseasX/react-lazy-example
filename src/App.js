import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const ComponentOne = lazy(() => import('./ComponentOne'));
const ComponentTwo = lazy(() => import('./ComponentTwo'));

function App() {
  return (
    <Suspense fallback={<h1>Lazy Loading...</h1>}>
      <Router>
        <Switch>
          <Route path={'/one'}>
            <ComponentOne />
          </Route>

          <Route path={'/two'}>
            <ComponentTwo />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
