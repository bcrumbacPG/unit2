import logo from "./logo.svg";
import "./App.css";
import { checkApiStatus, getUserCount, getUsers } from "./services/apiCall";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { userTable } from "./components/userTable";

function App() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [option, setOption] = useState(0);
  const [status, setStatus] = useState("");

  const fetchUsers = () => {
    getUsers().then((res) => {
      if (res.recordsets && res.recordsets.length > 0) {
        setUsers(res.recordsets[0]);
      }
      setOption(1);
    });
  };

  const fetchUsersCount = () => {
    getUserCount().then((res) => {
      if (res.recordsets && res.recordsets.length > 0) {
        setUserCount(res.recordsets[0][0].customerCount);
      }
      setOption(2);
    });
  };

  const checkApi = () => {
    checkApiStatus().then((res) => {
      if (res === 200) {
        setStatus("Connected!");
      } else {
        setStatus("Cannot Connect to Server");
      }
      setOption(3);
    });
  };

  console.log(userCount);

  return (
    <div className="App">
      <Button onClick={checkApi}>Check Server Status</Button>
      <Button onClick={fetchUsers}>User Names</Button>
      <Button onClick={fetchUsersCount}>User Count</Button>
      {users.length && option === 1 ? userTable(users) : null}
      {option === 2 ? (
        <p align="left">The number of users is {userCount}</p>
      ) : null}
      {option === 3 ? <p align="left">{status}</p> : null}
    </div>
  );
}

export default App;
