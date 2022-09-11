import {useParams} from "react-router-dom";

export default function Chapter() {
  let params = useParams();
  return (
    <h1> COMIC: {params.comic} - CHAPTER: {params.chapter} </h1>
  )
}