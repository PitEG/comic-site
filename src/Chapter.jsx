import {useParams, useLoaderData} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Chapter() {
  const params = useParams();

  const chapterName = params.chapter
  const comicName = params.comic

  const data = useLoaderData();
  const pages = data["pages"];
  const prev = data["prev"];
  const next = data["next"];

  const pageImages = pages.map((value,idx) =>
    <div key={idx} id={"p"+idx} className="text-center min-vh-100">
      <a href={"#p"+(idx+1)}>
        <Image fluid={true} src={value} className="col-12"></Image>
        </a>
      </div>
  );

  const prevLink = `/${comicName}/${prev}`;
  const nextLink = `/${comicName}/${next}`;
  const nextPrev = (
    <Container className="text-center">
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
      <Row>
        <Col sm={12}>
          {pageImages}
          </Col>
        </Row>
      {nextPrev}
      </Container>
  )
}
