import * as React from 'react';
import './App.css';
import Login from './App/Login';
import Admin from './App/Admin';
import Main from './App/Main';
import Navigation from './App/Navigation';

class App extends React.Component {

  onLogin(username: string, password: string) {
    debugger
  }

  render() {
    return (
      <div>
        Test
        <Login onSubmit={this.onLogin}/>
        <Admin />
        <Main />
        <Navigation />
      </div>
    );
  }
}

export default App;
