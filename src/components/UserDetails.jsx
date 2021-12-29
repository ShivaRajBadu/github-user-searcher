import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
const UserDetails = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const params = useParams();

  useEffect(() => {
    getUser();
    getRepos(user.repos_url);
  }, [user.id]);

  const getUser = async () => {
    const resp = await axios.get(
      `https://api.github.com/user/${params.id}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(resp.data);
  };
  const getRepos = async (url) => {
    const resp = await axios.get(url);
    setRepos(resp.data);
  };

  return (
    <div className="container">
      <img className="avatar" src={user.avatar_url} alt="" />
      <p className="name" style={{ color: "white" }}>
        {user.name}
      </p>
      <p className="bio" style={{ color: "white" }}>
        {user.bio}
      </p>
      <h2 className="repo">repository : {repos.length} </h2>
      <div
        style={{
          margin: "2rem",

          display: "grid",
          gridGap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          padding: "1rem",
        }}>
        {repos.map((repo) => (
          <a
            className="link"
            style={{ textDecoration: "none" }}
            href={repo.html_url}
            key={repo.id}
            target="_blank"
            rel="noreferrer">
            {repo.name}
          </a>
        ))}
      </div>
    </div>
  );
};
export default UserDetails;
