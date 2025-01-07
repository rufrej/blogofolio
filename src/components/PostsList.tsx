import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore.ts";
import { fetchPosts } from "../redux/posts-slice.ts";
import { CardSmall } from "./CardSmall.tsx";
import { CardMedium } from "./CardMedium.tsx";
import { CardLarge } from "./CardLarge.tsx";
import { buildSchemePagination } from "../utils/schemePagination.ts";
import { SkeletonCard } from "./SkeletonCard.tsx";
import { IPost } from "../types/types.ts";
import { Ordering } from "./Ordering.tsx";

export function PostsList(props: any) {
  const { currentPage } = useParams();
  const dispatch = useAppDispatch();

  const {
    list: posts,
    isLoaded,
    error,
    limit,
    count,
    ordering,
  } = useAppSelector((state) => state.posts);

  console.log(posts.length);

  useEffect(() => {
    if (!currentPage) return;
    dispatch(fetchPosts({ currentPage }));
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
    if (!currentPage || !count) return null;
    const shceme = buildSchemePagination(currentPage, count);

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
    let cardLarge = posts.filter((_, index) => index == 0);
    return cardLarge.map((post: IPost) => (
      <CardLarge key={post.id} item={post} />
    ));
  }
  function renderCardMedium() {
    let cardMedium = posts.filter((_, index) => index > 0 && index < 5);

    return cardMedium.map((post: IPost) => (
      <CardMedium key={post.id} item={post} />
    ));
  }
  function renderCardSmall() {
    let cardSmall = posts.filter((_, index) => index > 4 && index < 11);
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

  if (!posts) {
    return <div>No posts</div>;
  }

  return (
    <>
      <div>
        <div className="d-flex">{/* <h1>{props.title}</h1> */}</div>
        <Ordering page="all" />
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
