import styles from "../styles/posts.module.scss";
import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore.ts";
import { fetchMyPosts } from "../redux/posts-slice.ts";
import { CardSmall } from "./CardSmall.tsx";
import { CardMedium } from "./CardMedium.tsx";
import { CardLarge } from "./CardLarge.tsx";
import { buildSchemePagination } from "../utils/schemePagination.ts";
import { SkeletonCard } from "./SkeletonCard.tsx";
import { IPost } from "../types/types.ts";
import { Ordering } from "./Ordering.tsx";

export function MyPostsList(props: any) {
  const { currentPage } = useParams();
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { ordering } = useAppSelector((state) => state.posts);

  const {
    list: posts,
    isLoaded,
    error,
    pageCount,
  } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (currentPage) {
      dispatch(fetchMyPosts({ currentPage }));
    }
  }, [dispatch, currentPage, ordering]);

  const renderPagination = () => {
    return (
      <nav>
        <ul className="pagination">{renderPaginationItems()}</ul>
      </nav>
    );
  };

  const renderPaginationItems = () => {
    if (!currentPage) return null;
    if (pageCount == null) {
      return 1;
    }
    const shceme = buildSchemePagination(currentPage, +pageCount);

    return shceme.map((item, index) => {
      return (
        <li className="page-item" key={index}>
          {item == "..." ? (
            <span className="page-link">...</span>
          ) : (
            <NavLink
              className="page-link"
              to={`/posts/${props.filter}/${item}`}
            >
              {item}
            </NavLink>
          )}
        </li>
      );
    });
  };

  function renderCardLarge() {
    let cardLarge = posts.filter((_, index) => index == 1);
    return cardLarge.map((post: IPost) => (
      <CardLarge key={post.id} item={post} />
    ));
  }
  function renderCardMedium() {
    let cardMedium = posts.filter((_, index) => index > 1 && index < 6);

    return cardMedium.map((post: IPost) => (
      <CardMedium key={post.id} item={post} />
    ));
  }
  function renderCardSmall() {
    let cardSmall = posts.filter((_, index) => index > 5 && index < 12);
    return cardSmall.map((post: IPost) => (
      <CardSmall key={post.id} item={post} />
    ));
  }

  if (isLoaded) {
    return (
      <div>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (posts.length == 0) {
    return <div>No posts</div>;
  }

  // function handleChangeSelectOrdering(event: any) {
  //   dispatch(setOrdering(event.target.value));
  //   navigate(`/posts/myposts/1/?ordering=${ordering}`);
  // }

  return (
    <>
      <div>
        {/* <div className="d-flex">
          <label
            className="fs-4 mx-3 fw-bold mt-1 text-nowrap"
            htmlFor="select"
          >
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
        </div> */}
        <Ordering page="myposts" />
        <div className={styles.board}>
          <div className={styles.firstColumn}>
            <div>{renderCardLarge()}</div>
            <div className={styles.medium}>{renderCardMedium()}</div>
          </div>
          <div className={styles.small}>{renderCardSmall()}</div>
        </div>
        <div className="d-flex justify-content-center">
          {renderPagination()}
        </div>
      </div>
    </>
  );
}
