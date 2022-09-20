import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function Chapter() {
  const params = useParams();

  const chapterName = params.chapter
  const comicName = params.comic

  const [pages,setPages] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const fetchUrl = `http://localhost:8080/${params.chapter}.json`;
        const response = await fetch(fetchUrl);
        const json = await response.json();
        // console.log(json);
        setPages(json["pages"]);
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

  return (
    <Container>
      <h1> COMIC: {params.comic} - CHAPTER: {params.chapter} </h1>
      <ul>
      {pageImages}
        </ul>
      </Container>
  )
}
