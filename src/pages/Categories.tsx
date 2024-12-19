import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchCategoriesList } from "../redux/categories-slice";
import { ICategories } from "../types/types";
import { CategoryCard } from "../components/CategoryCard";
import styles from "../styles/categories.module.scss";

export function Categories() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  console.log(categories.list);

  function renderCategories() {
    return categories.list.map((category: ICategories) => {
      return (
        <CategoryCard
          key={category.list_name_encoded}
          link={category.list_name_encoded}
          title={category.display_name}
          firstPublished={category.oldest_published_date}
          lastPublished={category.newest_published_date}
          updated={category.updated}
        />
      );
    });
  }

  return (
    <>
      <div>
        <h1 className={styles.categories__board__title}>
          {categories?.list.length} Book categories
        </h1>
        <div className={styles.categories__board}>{renderCategories()}</div>
      </div>
    </>
  );
}
