import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return <div className="App"> React App </div>;

  <Router>
    <div className='app'>
      <Switch>
        <Route exact path="/login" component={LoginScreen/>
        <Route exact path="/register" component={RegisterScreen/>
        <Route exact path="/forgotpassword" component={ForgotPasswordScreen/>
        <Route exact path="/passwordreset/:resetToken" component={PasswordResetScreen/>
      </Switch>
      </div>
  </Router>

};

export default App;
