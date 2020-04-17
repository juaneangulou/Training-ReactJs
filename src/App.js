import React, { Component } from 'react'
import UserComponent from './UserComponent';
import UserFormComponent from './UserFormComponent';

export default class App extends Component {
  constructor() {
    super()
    this.state = { name: 'Juan', age: 12 };
  }

  render() {
    const onChangeNameUser = (e) => {
      this.setState({ name: e.target.value });
    };
    const onChangeAgeUser = (e) => {
      this.setState({ age: e.target.value });
    };
    return (
      <div>
        <UserComponent nameUser={this.state.name} ageUser={this.state.age} />
        <UserFormComponent nameUser={this.state.name} ageUser={this.state.age} onChangeNameUser={onChangeNameUser} onChangeAgeUser={onChangeAgeUser} />
      </div>
    )
  }
}
