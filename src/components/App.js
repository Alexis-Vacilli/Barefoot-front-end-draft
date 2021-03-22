import {Provider} from 'react-redux';

import store from '../store';
import Register from './accounts/Register';
import Login from './accounts/Login';
import ResetPassword from './accounts/ResetPassword'
import Dashboard from './Dashboard';
import RolesAndPermissions from './rolesAndPermissions/rolesAndPermissions';
import ChangePassword from './accounts/ChangePassword';
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
          <Route exact path="/resetPassword" component={ResetPassword} />
          <Route exact path="/rolesAndPermissions" component={RolesAndPermissions} />
          <Route exact path="/changePassword" component={ChangePassword} />
        </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
