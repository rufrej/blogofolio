import styles from "../styles/cards.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {setPreviewData, showPreviewModal} from '../redux/preview-post-slice';
// import {setPreviewImage, showPreviewImage} from '../redux/preview-image-slice';

export function CardLarge(props: any) {
  // const dispatch = useDispatch();

  // const handleClickPostPreview = () => {
  //   dispatch(setPreviewData(props.item));
  //   dispatch(showPreviewModal());
  // };

  // const handleClickImagePreview = () => {
  //   dispatch(setPreviewImage(props.item));
  //   dispatch(showPreviewImage());
  // };

  return (
    <div className={styles.cardLarge}>
      <div className={styles.cardContent}>
        <div
          className={styles.cardTextWrapper}
          // onClick={handleClickPostPreview}
        >
          <p className="mb-2">{props.item.date}</p>
          <h2 className="mb-4">{props.item.title}</h2>
          <div>
            <p className={styles.cardLargeText}>{props.item.text}</p>
          </div>
        </div>

        <img
          className={styles.cardLargePoster}
          src={props.item.image}
          alt="poster"
          // onClick={handleClickImagePreview}
        />
      </div>
      <div className={styles.cardInteraction}>
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
