import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../Profile/Profile";
import "../UserList/UserList.css";

const UserList = () => {
  const [listOfUSer, setlistOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setlistOfUSer(response.data);
      });
  }, []);
  console.log(listOfUSer);
  return (
    <div className="profiles">
      {listOfUSer.map((user) => (
        <Profile user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
