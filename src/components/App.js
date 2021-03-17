import {Provider} from 'react-redux';

import store from '../store';
import Register from './accounts/Register';
import Login from './accounts/Login';
import ResetPassword from './accounts/ResetPassword'
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login" component={ResetPassword} />
        </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
