import Head from "next/head";
import React from "react";
import library from "../data/library.json";
import BookCard from "../components/BookCard";
import Grid from "@material-ui/core/Grid";

export default () => {
  let formattedBooks = library.books.map((book) => {
    return <BookCard book={book} />;
  });
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      className={"Bookshelf"}
    >
      {formattedBooks}
    </Grid>
  );
};
