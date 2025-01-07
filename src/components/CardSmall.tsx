import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export function CardSmall(props: any) {
  const dispatch = useDispatch();

  // const handleClickPostPreview = () => {
  //   dispatch(setPreviewData(props.item));
  //   dispatch(showPreviewModal());
  // };

  // const handleClickImagePreview = () => {
  //   dispatch(setPreviewImage(props.item));
  //   dispatch(showPreviewImage());
  // };

  return (
    <div className="cardSmall">
      <div className="cardContent">
        <div
          className="cardTextWrapper"
          // onClick={handleClickPostPreview}
        >
          <p>{props.item.date}</p>
          <h5>{props.item.title}</h5>
        </div>
        <img
          className="cardSmallPoster"
          src={props.item.image}
          alt="poster"
          // onClick={handleClickImagePreview}
        />
      </div>
      <div className="cardInteraction">
        <div className="d-flex w-100">
          <Link
            to={`/posts/${props.item.id}`}
            className="btn btn-outline-secondary text-decoration-none ms-auto"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
