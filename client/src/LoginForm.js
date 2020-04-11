import React from "react";
import Input from "./Input.js";

class FormContainer extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {username: '', pass: ''};

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleFormSubmit(event) {
      event.preventDefault();
      try {
        const data = {
          username: this.state.username, 
          pass: this.state.pass
        };
        const request = await fetch("http://localhost:5000/users", {
          method: "post",
          headers: {"content-type": "application/json" },
          body: JSON.stringify(data)
        });
        const response = await request.json();
        console.log(response);
      } catch (err) {
        console.error(err.message);
      }
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
              name="pass"
              type="text"
              value={this.state.pass}
              onChange={this.handleChange}
              placeholder="Enter your password here"/>
            <input className="button" type="submit" value="Submit" />
        </form>
        );
      }
}
export default FormContainer;