import React from "react";
import { Link } from "react-router-dom";

export default function UserItem({ user }) {
  return (
    <div className="card">
      <img src={user.avatar_url} alt="" />
      <h3>{user.login}</h3>
      <Link className="btn" to={`/users/${user.id}`}>
        more
      </Link>
    </div>
  );
}
