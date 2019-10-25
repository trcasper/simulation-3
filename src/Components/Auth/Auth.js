import React, { Component } from "react";
import Axios from "axios";
import { updateUser } from "../../Ducks/reducer";
import { connect } from "react-redux";
import "./Auth.css";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleRegister = () => {
    Axios.post("/auth/register", {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      this.props.updateUser(res.data);
      this.props.history.push("/dashboard");
      this.setState({
        username: "",
        password: ""
      });
    });
  };

  handleLogin = () => {
    Axios.post("/auth/login", {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      this.props.updateUser(res.data);
      this.props.history.push("/dashboard");
      this.setState({
        username: "",
        password: ""
      });
    });
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="Auth">

        <div className='LoginContainer'>
          <h1>Login Here</h1>
          <input
            value={this.state.username}
            name="username"
            onChange={e => this.handleInput(e)}
            placeholder="enter username"
          />
          <input
            password={this.state.password}
            name="password"
            onChange={e => this.handleInput(e)}
            placeholder="enter password"
          />
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user } = reduxState;
  return {
    user
  };
};

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

///