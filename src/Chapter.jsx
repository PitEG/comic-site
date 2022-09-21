import {useParams, useLoaderData} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function Chapter() {
  const params = useParams();

  const chapterName = params.chapter
  const comicName = params.comic

  const data = useLoaderData();
  const pages = data["pages"];
  const prev = data["prev"];
  const next = data["next"];

  const pageImages = pages.map((value,idx) =>
    <li key={idx} id={"p"+idx}>
      <Image src={value}>
        </Image>
      </li>
  );

  const prevLink = `/${comicName}/${prev}`;
  const nextLink = `/${comicName}/${next}`;
  const nextPrev = (
    <div>
      <LinkContainer to={prevLink}>
        <a>prev</a>
        </LinkContainer>
      <LinkContainer to={nextLink}>
        <a>next</a>
        </LinkContainer>
    </div>
  )

  return (
    <Container>
      <h1> COMIC: {comicName} || CHAPTER: {chapterName} </h1>
      {nextPrev}
      <ul>
        {pageImages}
        </ul>
      {nextPrev}
      </Container>
  )
}
