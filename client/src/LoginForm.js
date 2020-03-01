import React from "react";
import Input from "./Input.js";

class FormContainer extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {value: ''};

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit(event) {
    
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
          <form className="container" onSubmit={this.handleFormSubmit}>
            <h1>Welcome</h1>
            <h3>Please Login</h3>
            <Input title="Username:"
              name="name"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter your first name here"/>
            <Input title="Password:"
              name="name"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter your first name here"/>
            <input type="submit" value="Submit" />
        </form>
        );
      }
}
export default FormContainer;