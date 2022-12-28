import React, { Component } from "react";

const users = [
  {
    id: 1,
    name: "Hoàng An",
  },

  {
    id: 2,
    name: "Hoàng An 2",
  },

  {
    id: 3,
    name: "Hoàng An 3",
  },
];

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    console.log("1. constructor");
  }

  componentDidMount = () => {
    console.log("3. componentDidMount");
    this.handleLoadUsers();
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("3. componentDidUpdate");
  };

  componentWillUnmount = () => {
    console.log("4. componentWillUnmount");
  };

  handleLoadUsers = () => {
    this.setState({
      users: users,
    });
  };

  render() {
    console.log("2. render");
    const { users } = this.state;

    return (
      <div>
        <h1>Vòng đời Component React JS</h1>
        <div>
          {users.map(({ id, name }) => (
            <p key={id}>{name}</p>
          ))}
        </div>
        <button type="button" onClick={this.handleLoadUsers}>
          Load Data
        </button>
      </div>
    );
  }
}

export default Users;

/*
Nếu setState ở render() => Chạy vô hạn

1. constructor()

2. render()

3. componentDidMount()

4. componentDidUpdate()

5. componentWillUnmount()
*/
