import { useState } from "react";
import styles from "./UsersList.module.css";

import User from "./User";

const UsersList = (props) => {
  return (
    <div>
      <ul>
        {props.users.map((user) => {
          return <User key={user.key} name={user.name} age={user.age} />;
        })}
      </ul>
    </div>
  );
};

export default UsersList;
