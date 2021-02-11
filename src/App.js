import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
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
  const [openedHelp, setOpenedHelp] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongConfirm, setWrongConfirm] = useState(false);
  const [noUser, setNoUser] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [typeOfPasword, setTypeOfPasword] = useState('password');
  const [typeOfConfirm, setTypeOfConfirm] = useState('password');


  const goToSignUp = () => {
    setOnEnterPage(false);
    setOnSignInPage(false);
    setOnMainPage(false);
    setOnSignUpPage(true);
    setTypeOfPasword('password');
    setTypeOfConfirm('password');
  }

  const goToSignIn = () => {
    setOnSignUpPage(false);
    setOnEnterPage(false);
    setOnMainPage(false);
    setOnSignInPage(true);
    setTypeOfPasword('password');
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
    const RegExp = /^(?=.*[!@#$%^&*])(?=.*[A-Z]{2})[a-zA-Z0-9!@#$%^&*]{8}$/;
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

  useEffect(() => {
    setHideButton(false);
  }, [email, password, confirmPassword])

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


  const clearErrors = () => {
    setWrongEmail(false);
    setWrongPassword(false);
    setNoUser(false);
    setTypeOfPasword('password');
  }

  const showPassword = () => {
    if (typeOfPasword === 'password') {
      setTypeOfPasword('text')
    } else {
      setTypeOfPasword('password');
    }
  }

  const showConfirm = () => {
    if (typeOfConfirm === 'password') {
      setTypeOfConfirm('text')
    } else {
      setTypeOfConfirm('password');
    }
  }

  return (
    <div className="App">
      {onEnterPage && (
        <section className="App__page-enter">
          <h1 className="App__header">Ready for a great User experiance?</h1>
          <p className="App__text-info"> Bring your media to the next level!</p>
          <button 
            className="App__button"
            onClick={() => {goToSignUp()}}
          >
            SignUp
          </button>
          <button 
            className="App__button-go"
            onClick={() => {goToSignIn()}}
          >
            &rarr;
          </button>
        </section>
      )}

      {onSignUpPage && (
        <section className="App__page-signUP">
          <h1 className="App__header">Sign Up</h1>
          <form 
            className="App__form"
            onSubmit={(event) => {
              event.preventDefault();
              addUser();
            }}
          >
            <label className="App__label">
              <p className="App__label-text">Full name</p>
              <input 
                className="App__input" 
                name="name" 
                type="text" 
                placeholder="John Doe" 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
              />
            </label>
            <label className="App__label">
              <p 
                className={classNames("App__label-text",{"wrong-email": wrongEmail})}
              >
                Email
              </p>
              <input
                className={classNames("App__input", {"wrong-input": wrongEmail})}
                name="email" 
                type="email" 
                placeholder="example@acme.com" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
              />
            </label>
            <label className="App__label">
              <div className="App__lable-password">
                <p className="App__label-text">Password</p>
                <div 
                  className={classNames("App__help", {"App__help--active": openedHelp})}
                  onClick={() => setOpenedHelp(!openedHelp)}
                >
                  ?
                </div>
              </div>
              <input 
                className={classNames("App__input", {"wrong-input": wrongPassword})}
                name="password" 
                type={typeOfPasword}
                placeholder="" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
              />
              {typeOfPasword==='password' 
                ? (<i 
                    className="eye fa fa-eye" 
                    onClick = {() => showPassword()}
                  />)
                : (<i 
                    className="eye fa fa-eye-slash" 
                    onClick = {() => showPassword()}
                  />)
              }
            </label>
            <label className="App__label">
              <p className="App__label-text">Repeat password</p>
              <input 
                className={classNames("App__input", {"wrong-input": wrongConfirm})} 
                name="password" 
                type={typeOfConfirm} 
                placeholder="********" 
                value={confirmPassword} 
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
              {typeOfConfirm==='password' 
                ? (<i 
                    className="eye fa fa-eye" 
                    onClick = {() => showConfirm()}
                  />)
                : (<i 
                    className="eye fa fa-eye-slash" 
                    onClick = {() => showConfirm()}
                  />)
              }
            </label>

            <button 
              className={classNames("App__form-button", {"not-active": hideButton})}
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="App__text-question"> Already have an account?</p>
          <button 
            className=" App__text-question App__button-link"
            onClick={() => {goToSignIn()}}
          >
            Sign In
          </button>
        </section>
      )}

      {onSignInPage && (
        <section className="App__page-signIN">
          <h1 className="App__header">Sign In</h1>
          <form 
            className="App__form"
            onSubmit={(event) => {
              event.preventDefault();
              checkUser();
            }}
          >
            <label className="App__label">
              <p className="App__label-text">Email</p>
              <input
                className={classNames("App__input", {"wrong-input": wrongEmail})}
                name="email"
                type="email" 
                placeholder="example@acme.com" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}></input>
            </label>
            <label className="App__label">
              <p className="App__label-text">Password</p>
              <input 
                className={classNames("App__input", {"wrong-input": wrongPassword})}
                type={typeOfPasword} 
                placeholder="********" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
              />
              {typeOfPasword==='password' 
                ? (<i 
                    className="eye fa fa-eye" 
                    onClick = {() => showPassword()}
                  />)
                : (<i 
                    className="eye fa fa-eye-slash" 
                    onClick = {() => showPassword()}
                  />)
              }
            </label>
            <button 
              className={classNames("App__form-button", {"not-active": hideButton})}
              type="submit"
            >
              Sign In
            </button>
          </form>
          <p className="App__text-question"> Don't have an account yet?</p>
          <button 
            href='.' 
            className=" App__text-question App__button-link"
            onClick={() => {goToSignUp()}}
          >Sign Up</button>

          {noUser && (
            <div className="App__error">
              Wrong email or password
              <span 
                className="App__error-close"
                onClick = {() => clearErrors()}
              >
                &#10006;
              </span>
            </div>
          )}

        </section>
      )}

      {onMainPage && (
        <section className="App__page-main">
          <h1 className="App__header">Hello, {localStorage.getItem('name')}!</h1>
        </section>
      )}
    </div>
  );
}

export default App;
