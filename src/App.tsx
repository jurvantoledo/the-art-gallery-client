import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import './App.css';
import { selectAppLoading } from './store/appState/selectors';
import { getUserWithStoredToken } from './store/user/actions';
import Navigation from "./components/Navigation";
import MessageBox from './components/MessageBox';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';
import GalleryInfo from './pages/GalleryInfo';
import Order from './pages/Order';
import AddGallery from './pages/AddGallery';


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      <div className="App-Content">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/gallery-info/:id">
            <GalleryInfo />
          </Route>

          <Route exact path="/order/:id">
            <Order />
          </Route>
          
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/add-gallery/:id">
            <AddGallery />
          </Route>
          
        </Switch>
      </div>
    </div>
  );
}

export default App;
