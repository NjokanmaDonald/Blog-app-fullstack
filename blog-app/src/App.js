import React, { useContext } from "react"
import './App.css';
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context); 
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/write">
            {user ? <Write/> : <Register/>}
          </Route>

          <Route path="/settings">
            {user ? <Settings/> : <Register/>}
          </Route>

          <Route path="/post/:postId">
            <Single />
          </Route>

          <Route path="/login">
            {user ? <Home/> : <Login />}
          </Route>

          <Route path="/register">
            {user ? <Home/> : <Register />}
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
