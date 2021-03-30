import {Provider} from 'react-redux';

import store from '../store';
import Register from './accounts/Register';
import Login from './accounts/Login';
import ResetPassword from './accounts/ResetPassword'
import Dashboard from './Dashboard';
import RolesAndPermissions from './rolesAndPermissions/RolesAndPermissions';
import ChangePassword from './accounts/ChangePassword';
import Home from '../components/Home';
import BookAccommodation from './accommodation/bookAccommodation'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import { useState, useEffect } from 'react';
import { token } from '../actions/auth';
import axios from 'axios';

function App() {
  const [bookedAccommodations, setBookedAccommodations] = useState(["la folie"]);
  const [bkdAcc, setBkdAcc] = useState(["la folie"]);
  const [active, setActive] = useState(true);
  const [focusAccommodation, setFocusAccommodation] = useState({
    image: 'https://res.cloudinary.com/bn47/image/upload/v1609963683/sample.jpg'
  });


  useEffect(() => {
    const getBookedAccommodations = async () => {
      const tasksFromServer = await BookedAccommodations();
      const bk = await BKDAccomnodat();
      setBkdAcc(bk);
      setBookedAccommodations(tasksFromServer)
    }

    getBookedAccommodations();
  }, []);

  const BookedAccommodations = async() => {
    const res = await axios.get('https://elite-staging.herokuapp.com/api/v1/booking/availableAccomodations', {
      headers: { 'Authorization': `Bearer ${token}` }

    })  
   return res.data.data;
  }
  const BKDAccomnodat = async() => {
    const res = await axios.get('https://elite-staging.herokuapp.com/api/v1/booking/bookedAccomodations', 
    {
      headers: { 'Authorization': `Bearer ${token}` }

    })  
   return res.data.data;
  }

  const changeTabState = () =>{
    setActive(!active);
  }
  const openAccommodationBook = (accommodation) => {
    console.log('OPENACCBOOK')
    console.log(accommodation);
    setFocusAccommodation(accommodation)
  }

  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bkdacc"   render={()=> <BookAccommodation bookedAccommodations={bookedAccommodations} bkdAcc={bkdAcc} active={active} changeTab={changeTabState} focusAccommodation={openAccommodationBook} openAccomodation={focusAccommodation} />} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login" component={ResetPassword} />
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
