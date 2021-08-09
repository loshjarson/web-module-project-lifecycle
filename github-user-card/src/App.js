import React from "react"
import axios from "axios";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      target: "loshjarson",
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    console.log("hi")
    axios.get(`https://api.github.com/users/${this.state.target}`)
      .then(res => this.setState({
        ...this.state,
        user: res.data
      }))
      .catch(err => console.log(err));
  }



  render() {
    return (
    <div className="App">
      <header className="App-header">
        {this.state.user.name !== "" && <h1>`This is {this.state.user.name}'s Profile`</h1>}
        {this.state.user.name === "" && <h1>`This is {this.state.user.login}'s Profile`</h1>}
      </header>
      <UserCard fetchUser={this.fetchUser} user={this.state.user} />
    </div>
    )
  }
}

export default App;
