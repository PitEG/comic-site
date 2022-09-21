import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import {LinkContainer} from 'react-router-bootstrap';

export default function Chapter() {
  const params = useParams();

  const chapterName = params.chapter
  const comicName = params.comic

  const [pages,setPages] = useState([]);
  const [prev,setPrev] = useState([]);
  const [next,setNext] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const fetchUrl = `http://localhost:8080/${params.chapter}.json`;
        const response = await fetch(fetchUrl);
        const json = await response.json();
        // console.log(json);
        setPages(json["pages"]);
        setPrev(json["prev"]);
        setNext(json["next"]);
      } catch (err) {
        console.log("error:", err);
      }
    };

    fetchData();
  },[]);

  const pageImages = pages.map((value,idx) =>
    <li key={idx} id={"p"+idx}>
      <Image src={value}>
        </Image>
      </li>
  );

  const prevLink = `./${prev}`;
  const nextLink = `./${next}`;
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
