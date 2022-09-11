import {useParams} from "react-router-dom";

export default function Comic() {
  let params = useParams();
  return (
    <h1> COMIC: {params.comic} </h1>
  )
}
