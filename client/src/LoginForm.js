import React from "react";
import Input from "./Input.js";

class FormContainer extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {username: '', password: ''};

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit(event) {
    
    }

    handleChange(event) {
      const value = event.target.value;
      this.setState({
        [event.target.name]: event.target.value});
    }

    render() {
        return (
          <form className="form" onSubmit={this.handleFormSubmit}>
            <h3>Please Login</h3>
            <Input title="Username:"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Enter your username here"/>
            <Input title="Password:"
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter your password here"/>
            <input className="button" type="submit" value="Submit" />
        </form>
        );
      }
}
export default FormContainer;