import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
loginClickEvent = (e) => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

render() {
  return (
    <div className="Auth">
      <button className="btn btn-dark" onClick={this.loginClickEvent}>Login with Google</button>
      <p><small>Don't Worry. We don't require a password.</small></p>
    </div>
  );
}
}

export default Auth;
