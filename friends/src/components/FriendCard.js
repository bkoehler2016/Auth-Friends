import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

export default function FriendCard(props) {
  console.log(props);
  return (
    <>
      <h2>{props.friend.name}</h2>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </>
  );
}
