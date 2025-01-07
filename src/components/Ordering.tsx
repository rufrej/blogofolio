import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";

import { setOrdering } from "../redux/posts-slice";

type orderingProps = {
  page: string;
};
export function Ordering(props: orderingProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { ordering } = useAppSelector((state) => state.posts);

  function handleChangeSelectOrdering(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    dispatch(setOrdering(event.target.value));
    navigate(`/posts/${props.page}/1/?ordering=${ordering}`);
  }

  return (
    <div className="d-flex">
      <label className="fs-4 mx-3 fw-bold mt-1 text-nowrap" htmlFor="select">
        Sort by
      </label>
      <select
        name="select"
        className="form-select h-50 w-75 fs-5"
        onChange={handleChangeSelectOrdering}
      >
        <option value="date">Date</option>
        <option value="title">Title</option>
        <option value="text">Text</option>
        <option value="lesson_num">Lesson number</option>
      </select>
    </div>
  );
}
