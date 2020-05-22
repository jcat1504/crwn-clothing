import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null; 

  componentDidMount() {
    const {setCurrentUser} = this.props;
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       //we make sure we are passing back the userRef object
       //checking to see if snapshot has changed
       const userRef = await createUserProfileDocument(userAuth);

//subscribe-or listen to userRef
       userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          //don't just LOG snapShot, we need to extract exact DATA. listed below
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
     }
       setCurrentUser(userAuth)
     //^^equivalent to null. we need this just in case user logs out
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  //will close the subscription not listen to any more event fires from user

  render () {
      return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='/signin' 
              render={() => 
              this.props.currentUser ? (
              <Redirect to='/' />
              ) : (
              <SignInAndSignUpPage />
              )
            }
            />
      </Switch>
    </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
