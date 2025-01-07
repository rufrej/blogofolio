import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {setPreviewData, showPreviewModal} from '../redux/preview-post-slice';
// import {setPreviewImage, showPreviewImage} from '../redux/preview-image-slice';

export function CardMedium(props: any) {
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
    <div className="cardMedium">
      <img
        className="cardMediumPoster"
        src={props.item.image}
        alt="poster"
        // onClick={handleClickImagePreview}
      />
      <div>
        <div
          className="cardMediumTextWrapper"
          // onClick={handleClickPostPreview}
        >
          <p>{props.item.date}</p>
          <h5>{props.item.title}</h5>
        </div>
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
