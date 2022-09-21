import {useParams, useLoaderData} from "react-router-dom";
import {useState, useEffect} from "react";

import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';

export default function Comic() {
  const data = useLoaderData();
  const chapters = data["chapters"];

  // list of chapters
  const chapterEntries = chapters.map((value,idx) => 
    <li key={idx}>
      <LinkContainer to={value["id"]}>
          <a>{value["title"]}</a>
        </LinkContainer>
      </li>
  );

  console.log(chapters)

  return (
    <Container>
      {chapterEntries}
      </Container>
  )
}
