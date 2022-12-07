import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import React from 'react';

// function App() {

  

//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// }

class App extends Component {
  state = {
    roles: []
  };

  async componentDidMount() {
    const response = await fetch('/api/roles');
    const body = await response.json();
    this.setState({roles: body});
  }

  render() {
    const {roles} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Roles</h2>
              {roles.map(role =>
                  <div key={role.id}>
                    {role.id} ({role.name})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}

export default App;


