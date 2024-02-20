import React from "react";
import UserList from "../components/UserList";

function Users() {
  console.log("I am iin users");
  const USERS = [
    {
      id: "u1",
      name: "Max Shewan",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 1,
    },
  ];

  return <UserList items={USERS} />;
}

export default Users;
