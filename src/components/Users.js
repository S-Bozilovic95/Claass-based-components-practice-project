import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    // super je konstruktor Component klase koju nasledjujem
    // da bi moja klasa radila i da bi se ponasala kao komponenta moram
    // da imam i super
    super();
    // uvek jedan state objekat pa unutar njega potrebne vrednosti
    this.state = {
      showUsers: true,
      moreState: "Test",
    };
  }

  // kad setujem state u klasnim nece se desiti override. Ostace
  // moreState cak i ako menjam samo showUsers
  toggleUsersHandler() {
    this.setState((prevUsersState) => {
      return {
        showUsers: !prevUsersState.showUsers,
      };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {/* moram da bindujem za this da bi js znao da se ovo odnosi na ovu klasu */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
