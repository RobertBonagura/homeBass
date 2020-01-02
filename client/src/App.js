import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state =  {loggedin: true};
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.setState({loggedin: false});
    ReactDOM.render(<Login />, document.getElementById('root'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            List of users:
          </p>
          <form onSubmit={this.handleLogout}>
          <input type="submit" value="logout" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
