import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App__page-enter">
        <h1 className="App__header">Ready for a great User experiance?</h1>
        <p className="App__text-info"> Bring your media to the next level!</p>
        <button className="App__buttom">SignUp</button>
        <button className="App__buttom-prime">-></button>
      </section>

      <section className="App__page-signUP">
        <h1 className="App__header">Sign Up</h1>
        <form className="App__form">
          <label className="App__lebel">
            <p>Full name</p>
            <input className="App__input" placeholder="John Doe"></input>
          </label>
          <label className="App__lebel">
            <p>Email</p>
            <input className="App__input" placeholder="example@acme.com"></input>
          </label>
          <label className="App__lebel">
            <p>Password</p>
            <input className="App__input" placeholder="********"></input>
          </label>
          <label className="App__input">
            <p>Repeat password</p>
            <input className="App__input" placeholder="********"></input>
          </label>

          <button>Sign Up</button>
        </form>
        <p className="App__text-question"> Already have an account?</p>
        <button className="App__link">Sign in</button>
      </section>

      <section className="App__page-signIN">
        <h1 className="App__header">Sign In</h1>
        <form className="App__form">
          <label className="App__lebel">
            <p>Email</p>
            <input className="App__input" placeholder="example@acme.com"></input>
          </label>
          <label className="App__lebel">
            <p>Password</p>
            <input className="App__input" placeholder="********"></input>
            <input id="password-field" type="password" className="App__input" name="password" value="secret"/>
          </label>
          <button>Sign Up</button>
        </form>
        <p className="App__text-question"> Already have an account?</p>
        <button className="App__link">Sign in</button>
      </section>

      <section className="App__page-main">
        <h1 className="App__header">Hello, John Doe!</h1>
      </section>
    </div>
  );
}

export default App;
