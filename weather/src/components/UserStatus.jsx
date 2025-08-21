import React from "react";

export default function UserStatus({ logedIn, isAdmin }) {
  if (logedIn && isAdmin) {
    return <h1>Welcome Admin</h1>;
  } else if (logedIn) {
    return <h1>Welcome User</h1>;
  }
}
