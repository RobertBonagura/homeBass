import React, {Component} from 'react';  

/* Import Components */
//import CheckBox from './CheckBox';
import Input from './Input.js';  
//import TextArea from './TextArea';  
//import Select from './Select';
//import Button from './Button'

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        age: '',
        gender: '',
        expertise: '',
        about: ''

      },

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing']

    }
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  handleFullName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newUser :
        {...prevState.newUser, name: value
        }
      }))
   }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Input type={'text'}
               title= {'Full Name'} 
               name= {'name'}
               value={this.state.newUser.name} 
               placeholder = {'Enter your name'}
               handleChange = {this.handleFullName}
               /> {/* Name of the user */}
        //<Input /> {/* Input for Age */}
        //<Select /> {/* Gender Selection */}
        //<CheckBox /> {/* List of Skills (eg. Programmer, developer) */}
        //<TextArea /> {/* About you */}
        //<Button /> { /*Submit */ }
    //<Button /> {/* Clear the form */}
    </form>
    );
  }
}

export default FormContainer;