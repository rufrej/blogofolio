import mark from "../assets/postIcon/mark.svg";
import more from "../assets/postIcon/more.svg";
import { Link } from "react-router-dom";

export function CardSearch(props: any) {
  return (
    <div className="cardSearch">
      <div className="d-flex">
        <img className="cardSearchPoster" src={props.item.image} alt="poster" />

        <div className="ms-3 d-flex flex-column gap-2">
          <p>{props.item.date}</p>
          <h5>{props.item.title}</h5>
          <p>{props.item.text}</p>
        </div>
      </div>
      <div className="cardInteraction">
        <Link
          to={`/posts/${props.item.id}`}
          className="btn btn-light text-nowrap text-decoration-none mx-3 ms-auto"
        >
          Learn more
        </Link>
        <div className="p-2">
          <img src={mark} alt="mark" />
          <img src={more} alt="more" />
        </div>
      </div>
    </div>
  );
}
