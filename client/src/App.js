import React from "react";
import LoginForm from "./LoginForm.js";

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <h1 className="title">Welcome!</h1>
        <LoginForm />
     </div>
    );
  }
}
export default App;
