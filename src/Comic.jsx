import {useLoaderData} from "react-router-dom";

import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Comic() {
  const data = useLoaderData();

  const chapters = data["chapters"];
  const title = data["title"];
  const cover = data["cover"];

  // list of chapters
  const chapterEntries = chapters.map((value,idx) => 
    <LinkContainer key={idx} to={value["id"]}>
        <Button>{value["title"]}</Button>
      </LinkContainer>
  );

  console.log(chapters)

  return (
    <Container>
      <h1>{title}</h1>
      <Image src={cover}></Image>
      <Container>
        {chapterEntries}
        </Container>
      </Container>
  )
}
