import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  Container,
  Col,
  Row
} from "reactstrap";

export default function FriendCard(props) {
  console.log(props);
  return (
    <div>
      <CardDeck>
        <Card>
          <CardTitle>{props.friend.name}</CardTitle>

          <CardText>{props.friend.age}</CardText>
          <CardText>{props.friend.email}</CardText>
        </Card>
      </CardDeck>
    </div>
  );
}
