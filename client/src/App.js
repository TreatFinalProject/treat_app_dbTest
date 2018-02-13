import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Party from "./pages/Party/Party";
import Profile from "./pages/Profile/Profile";
import Todo from "./pages/Party/Todo";
import GuestList from "./pages/Party/GuestList";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Navigation from './components/Navigation';
import * as routes from './constants/routes';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import AccountPage from './components/Account';
import withAuthentication from './components/Session/withAuthentication';
 

const App = () =>
  <Router>
    <div>
      {/* <Navbar /> */}
      <Navigation />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/party/:id" component={Party} />
        {/* <Route exact path="/party/:id/todo" component={Todo} /> */}
        {/* <Route exact path="/party/:id/guestlist" component={GuestList} /> */}
        {/* <Route path="/party" component={Party} /> */}
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />

      </Wrapper>
      <Footer />
    </div>
  </Router>;

// export default App;
export default withAuthentication(App);

