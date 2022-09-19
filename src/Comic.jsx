import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';

export default function Comic() {
  const params = useParams();

  // fetch stuff
  const [exists, setExists] = useState(false);
  const [loading, setLoading] = useState(true);

  // chapter list
  const [chapters, setChapters] = useState([]);

  // fetch info of comic and its chapters 
  useEffect(() => {
    const fetchData = async() => {
      try {
        // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await fetch("http://127.0.0.1:8080/test.json");
        const json = await response.json();
        console.log(json);
        setExists(true);
        setChapters(json["chapters"]);
      } catch (err) {
        console.log("error:", err);
        setExists(false);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

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
      <div>
        <h1> COMIC: {params.comic} </h1>
        <h2>
          {loading ? "loading" : "done B)"} 
          </h2>
        {!loading && 
          <h2>
            {exists ? "exists" : "doesn't exists"} 
            </h2>}
          <ul>
            {chapterEntries}
            </ul>
        </div>
      </Container>
  )
}
