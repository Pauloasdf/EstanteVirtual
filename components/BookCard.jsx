import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";

export default function BookCard(props) {
  // const [isFocused, setIsFocused] = useState(false);
  var styles = {
    maxWidth: 150,
    margin: 15,
    // transform: isFocused ? "scale(2, 2) translateX(25%)" : "",
  };
  const book = props.book;
  return (
    <Card style={styles}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={"CardBook"}
          alt={book.title}
          image={book.Cover}
          title={book.title}
          // onMouseOver={() => setIsFocused(true)}
          // onMouseOut={() => setIsFocused(false)}
        />
      </CardActionArea>
    </Card>
  );
}
