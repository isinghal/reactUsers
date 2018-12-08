import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import './App.css';
import { connect } from 'react-redux';
import LoginComponent from './pages/login';
import users from './pages/users';
import { setUser } from './redux/actions/loginActions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  componentDidMount() {
    this.props.setUser();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/"    
                render={props =>
                this.props.token 
                ? 
                (
                  <Redirect
                    to={{
                      pathname: "/users",
                      state: { from: props.location }
                    }}
                />
                ) 
                : 
                (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
              )
            }/>
            <Route path="/login" component={LoginComponent} />
            <Route path="/users" component={users} />
          </div>
        </Router>
        <ToastContainer />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  token: state.users.token
});

export default connect(mapStateToProps, { setUser })(App);
