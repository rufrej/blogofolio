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
    limit,
    error,
    count,
  } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (currentPage) {
      dispatch(fetchMyPosts({ currentPage }));
    }
  }, [dispatch, currentPage, ordering]);

  const renderPagination = () => {
    if (count == null || count <= limit) return null;
    return (
      <nav>
        <ul className="pagination">{renderPaginationItems()}</ul>
      </nav>
    );
  };

  const renderPaginationItems = () => {
    if (!currentPage) return null;
    if (count == null) {
      return 1;
    }
    const shceme = buildSchemePagination(currentPage, +count);

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

  return (
    <>
      <div>
        <Ordering page="myposts" />
        <div className="board">
          <div className="firstColumn">
            <div>{renderCardLarge()}</div>
            <div className="medium">{renderCardMedium()}</div>
          </div>
          <div className="small">{renderCardSmall()}</div>
        </div>
        <div className="d-flex justify-content-center">
          {renderPagination()}
        </div>
      </div>
    </>
  );
}
