import React from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";

const Users = (props) => {
  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div className="showcase">
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
export default Users;
