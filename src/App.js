import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null; 

  componentDidMount() {
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       //we make sure we are passing back the userRef object
       //checking to see if snapshot has changed
       const userRef = await createUserProfileDocument(userAuth);

//subscribe-or listen to userRef
       userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          //don't just LOG snapShot, we need to extract exact DATA. listed below
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
       });

     }
     else {
       this.setState({currentUser: userAuth})
     };
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
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
    );
  }
}

export default App;
