import React, {useState} from 'react';
import './App.css';

function App() {
  const [onEnterPage, setOnEnterPage] = useState(true);
  const [onSignInPage, setOnSignInPage] = useState(false);
  const [onSignUpPage, setOnSignUpPage] = useState(false);
  const [onMainPage, setOnMainPage] = useState(false);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('********');
  const [openedHelp, setOpenedHelp] = useState(false)

  


  return (
    <div className="App">
      <section className="App__page-enter">
        <h1 className="App__header">Ready for a great User experiance?</h1>
        <p className="App__text-info"> Bring your media to the next level!</p>
        <button className="App__button">SignUp</button>
        <button className="App__button-go">&rarr;</button>
      </section>

      <section className="App__page-signUP">
        <h1 className="App__header">Sign Up</h1>
        <form className="App__form">
          <label className="App__label">
            <p className="App__label-text">Full name</p>
            <input className="App__input" placeholder="John Doe"></input>
          </label>
          <label className="App__label">
            <p className="App__label-text">Email</p>
            <input className="App__input" placeholder="example@acme.com"></input>
          </label>
          <label className="App__label">
            <div className="App__lable-password">
            <p className="App__label-text">Password</p>
            <div className="App__help App__help--active">?</div>
            </div>
            <input className="App__input"  type="password" placeholder="********" value="********"/>
          </label>
          <label className="App__label">
            <p className="App__label-text">Repeat password</p>
            <input className="App__input"  type="password" placeholder="********" value="********"/>
          </label>

          <button className="App__form-button">Sign Up</button>
        </form>
        <p className="App__text-question"> Already have an account?</p>
        <a href='.' className=" App__text-question App__link">Sign In</a>
      </section>

      <section className="App__page-signIN">
        <h1 className="App__header">Sign In</h1>
        <form className="App__form">
          <label className="App__label">
            <p className="App__label-text">Email</p>
            <input className="App__input" placeholder="example@acme.com"></input>
          </label>
          <label className="App__label">
            <p className="App__label-text">Password</p>
            <input className="App__input"  type="password" placeholder="********" value="********"/>
          </label>
          <button className="App__form-button">Sign Up</button>
        </form>
        <p className="App__text-question"> Don't have an account yet?</p>
        <a href='.' className=" App__text-question App__link">Sign Up</a>

        <div className="App__error">Wrong email or password</div>
      </section>

      <section className="App__page-main">
        <h1 className="App__header">Hello, John Doe!</h1>
      </section>
    </div>
  );
}

export default App;
