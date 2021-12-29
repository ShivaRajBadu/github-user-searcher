import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/search/Search";
import Users from "./components/Users";
import axios from "axios";
import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router";
import UserDetails from "./components/UserDetails";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: "",
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const resp = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: resp.data, loading: false });
  // }
  userSearch = async (query) => {
    this.setState({ loading: true });
    const resp = await axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(resp.data.items);

    this.setState({ users: resp.data.items, loading: false });
  };

  setAlert = (msg, type) => {
    console.log(msg, type);
    this.setState({ alert: { message: msg, type: type } });
    setTimeout(() => this.setState({ alert: "" }), 4000);
  };
  render() {
    return (
      <>
        <Routes>
          <Route
            path="/users/:id"
            element={
              <div>
                <div className="navbar">
                  <NavBar title="GitHub User Searcher" />
                </div>
                <UserDetails />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="container">
                <div className="navbar">
                  <NavBar title="GitHub User Searcher" />
                </div>
                <div>
                  <div
                    style={{
                      textAlign: "center",
                      color: "red",
                      padding: "1rem 0",
                    }}>
                    {alert && <p>{this.state.alert.message}</p>}
                  </div>
                  <Search
                    setAlert={this.setAlert}
                    userSearch={this.userSearch}
                  />
                  <Users
                    users={this.state.users}
                    loading={this.state.loading}
                  />
                </div>
              </div>
            }
          />
          <Route path="/users" element={<Navigate to="/" />} />
        </Routes>
      </>
    );
  }
}

export default App;
