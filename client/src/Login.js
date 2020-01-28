import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import App from './App';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state =    {user: "", password: "", loggedin: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name] : value
        });
    }

    handleSubmit(event){
        // call function to check database for user and to see if password matches.
        
        // Assuming to matches:
        this.setState({loggedin: true});
    }

    render() {
        var message;
        if (this.state.loggedin !== true){
            // Logic to display proper error message on failed log in goes here
            message = "Please log in";
            console.log(message);
        } else {
            message = "Login success";
            console.log(message);
            ReactDOM.render(<App />, document.getElementById('root'));
        }
            return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome<br/>{message}</p>
                <form onSubmit={this.handleSubmit}>
                Username:<input type="text" value={this.state.user} onChange={this.handleChange} name="user"/> <br/>
                Password:<input type="text" value={this.state.password} onChange={this.handleChange} name="password"/> <br/>
                <input type="submit" value="login" />
                </form> 
              </header>
            </div>
            )
    }

};

export default Login;