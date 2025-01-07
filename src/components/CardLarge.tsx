import styles from "../styles/cards.module.scss";
import { Link } from "react-router-dom";

export function CardLarge(props: any) {
  return (
    <div className="cardLarge">
      <div className="cardContent">
        <div className="cardTextWrapper">
          <p className="mb-2">{props.item.date}</p>
          <h2 className="mb-4">{props.item.title}</h2>
          <div>
            <p className="cardLargeText">{props.item.text}</p>
          </div>
        </div>

        <img className="cardLargePoster" src={props.item.image} alt="poster" />
      </div>
      <div className="cardInteraction">
        <div className="d-flex w-100">
          <Link
            to={`/posts/${props.item.id}`}
            className=" btn btn-outline-secondary text-decoration-none ms-auto"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
