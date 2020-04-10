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
          <form className="form" onSubmit={this.handleFormSubmit}>
            <h3>Please Login</h3>
            <Input title="Username:"
              name="name"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter your username here"/>
            <Input title="Password:"
              name="name"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter your password here"/>
            <input className="button" type="submit" value="Submit" />
        </form>
        );
      }
}
export default FormContainer;