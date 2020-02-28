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
        this.setState(state => ({
            value : "foofoo"
        }))
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
          <form className="container" onSubmit={this.handleFormSubmit}>
              <Input title="First Name:"
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