import React, {useState} from 'react';
import { Enter } from './components/Enter';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Main } from './components/Main';
import './App.css';

function App() {
  const [onEnterPage, setOnEnterPage] = useState(true);
  const [onSignInPage, setOnSignInPage] = useState(false);
  const [onSignUpPage, setOnSignUpPage] = useState(false);
  const [onMainPage, setOnMainPage] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('12345678');
  const [confirmPassword, setConfirmPassword] = useState('12345678');
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongConfirm, setWrongConfirm] = useState(false);
  const [noUser, setNoUser] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const goToSignUp = () => {
    setOnEnterPage(false);
    setOnSignInPage(false);
    setOnMainPage(false);
    setOnSignUpPage(true);
  }

  const goToSignIn = () => {
    setOnSignUpPage(false);
    setOnEnterPage(false);
    setOnMainPage(false);
    setOnSignInPage(true);
  }

  const goToMain = () => {
    setOnSignUpPage(false);
    setOnEnterPage(false);
    setOnSignInPage(false);
    setOnMainPage(true);
  }

  const validEmail = (email) => {
    if (email.includes('@')){
      return true;
    }
    setWrongEmail(true);
    return false;
  }

  const validPassword = (password) => {
    const RegExp = /^(?=.*[!@#$%^&*])(?=.*[A-Z]{2})[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (RegExp.test(password)){
      return true;
    }
    setWrongPassword(true)
    return false;
  }

  const validConfirm = (confirmPassword) => {
    if (password===confirmPassword){
      return true;
    }
    setWrongConfirm(true)
    return false;
  }

  const addUser = () => {
    if (validEmail(email) && validPassword(password) && validConfirm(confirmPassword)) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
      window.localStorage.setItem('password', password);
      goToMain();
    } else {
      setHideButton(true);
    }
  }

  const wrongUser = () => {
    setNoUser(true);
    setWrongEmail(true);
    setWrongPassword(true);
  }

  const checkUser = () => {
    if (validEmail(email) && validPassword(password)){
      if (window.localStorage.getItem('email') === email 
      && window.localStorage.getItem('password') === password ) {
        goToMain();
        return;
      }
    }
    wrongUser();
    setHideButton(true);
    return;
  }

  return (
    <div className="App">
      {onEnterPage && (
        <Enter 
          goToSignUp = {goToSignUp}
          goToSignIn = {goToSignIn}
        />
      )}

      {onSignUpPage && (
        <SignUp 
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          hideButton={hideButton}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setHideButton={setHideButton}
          wrongEmail={wrongEmail}
          wrongPassword={wrongPassword}
          wrongConfirm={wrongConfirm}
          addUser={addUser}
          goToSignIn={goToSignIn}
        />
      )}

      {onSignInPage && (
        <SignIn
          email={email}
          password={password}
          hideButton={hideButton}
          setEmail={setEmail}
          setPassword={setPassword}
          setHideButton={setHideButton}
          wrongEmail={wrongEmail}
          wrongPassword={wrongPassword}
          setWrongEmail={setWrongEmail}
          setWrongPassword={setWrongPassword}
          noUser={noUser}
          setNoUser={setNoUser}
          checkUser={checkUser}
          goToSignUp={goToSignUp}
        />
      )}

      {onMainPage && (
        <Main />
      )}
    </div>
  );
}

export default App;
