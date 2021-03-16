import {Provider} from 'react-redux';

import store from '../store';
import Register from './accounts/Register';
import Dashboard from './Dashboard';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
