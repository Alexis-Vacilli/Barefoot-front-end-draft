import {Provider} from 'react-redux';

import store from '../store';
import Register from './accounts/Register';
import Login from './accounts/Login';
import ResetPassword from './accounts/ResetPassword'
import Dashboard from './Dashboard';
import RolesAndPermissions from './rolesAndPermissions/RolesAndPermissions';
import ChangePassword from './accounts/ChangePassword';
import Home from '../components/Home';
import Accommodation from '../components/accommodations/Accommodation'
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
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login" component={ResetPassword} />
          <Route exact path="/resetPassword" component={ResetPassword} />
          <Route exact path="/rolesAndPermissions" component={RolesAndPermissions} />
          <Route exact path="/changePassword" component={ChangePassword} />
          <Route exact path="/BookAccomodation" component={Accommodation} />
        </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
