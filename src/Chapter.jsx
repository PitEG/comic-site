import {useParams, useLoaderData} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Chapter() {
  const params = useParams();

  const chapterName = params.chapter
  const comicName = params.comic

  const data = useLoaderData();
  const pages = data["pages"];
  const prev = data["prev"];
  const next = data["next"];

  const pageImages = pages.map((value,idx) =>
    <Container key={idx} id={"p"+idx}>
      <Image src={value}></Image>
      </Container>
  );

  const prevLink = `/${comicName}/${prev}`;
  const nextLink = `/${comicName}/${next}`;
  const nextPrev = (
    <Container>
      <LinkContainer to={prevLink}>
        <Button>prev</Button>
        </LinkContainer>
      <LinkContainer to={nextLink}>
        <Button>next</Button>
        </LinkContainer>
    </Container>
  )

  return (
    <Container>
      <h1> COMIC: {comicName} || CHAPTER: {chapterName} </h1>
      {nextPrev}
      {pageImages}
      {nextPrev}
      </Container>
  )
}
