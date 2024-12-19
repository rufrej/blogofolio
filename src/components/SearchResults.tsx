import {useEffect} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { fetchSearchBookByAuthor, fetchSearchBookByTitle } from '../redux/search-slice';
import {buildSchemePagination} from '../utils/schemePagination';
import { ISearchBook } from '../types/types';

export function SearchResults() {
  const dispatch = useAppDispatch();
  const {currentPage, query} = useParams();
  const {listByAuthor,  listByTitle} = useAppSelector(state => state.search);

  useEffect(() => {
    dispatch(fetchSearchBookByAuthor(query));
  }, [dispatch, query]);
//   useEffect(() => {
//     dispatch(fetchSearchBookByISBN(query));
//   }, [dispatch, query]);
  useEffect(() => {
    dispatch(fetchSearchBookByTitle(query));
  }, [dispatch, query]);

  console.log(listByAuthor)
//   console.log(listByISBN)
  console.log(listByTitle)

//   function renderPagination() {
//     if (searchResultsCount <= limit) return null;
//     return (
//       <nav>
//         <ul className="pagination">{renderPaginationItems()}</ul>
//       </nav>
//     );
//   }

//   const renderPaginationItems = () => {
//     const shceme = buildSchemePagination(currentPage, pageCount);

//     return shceme.map((item, index) => {
//       return (
//         <li className="page-item" key={index}>
//           {item == '...' ? (
//             <span className="page-link">...</span>
//           ) : (
//             <NavLink className="page-link" to={`/posts/search/${query}/${item}`}>
//               {item}
//             </NavLink>
//           )}
//         </li>
//       );
//     });
//   };
function renderSearchResultsByAuthor() {
    return (
     listByAuthor?.map((book:ISearchBook) => {

        return (<article key={book.summary}>
           <h5>{book.book_title}</h5>      
         </article>)
       })
    )
 }
function renderSearchResultsByTitle() {
    return (
     listByTitle?.map((book:ISearchBook) => {

        return (<article key={book.summary}>
           <h5>{book.book_title}</h5>      
         </article>)
       })
    )
 }
// function renderSearchResultsByISBN() {
//     return (
//      listByISBN?.map((book:ISearchBook) => {

//         return (<article key={book.summary}>
//            <h5>{book.book_title}</h5>      
//          </article>)
//        })
//     )
//  }

  return (
    <>
      <div>
        <h1 className="mb-5">Search results "{query}"</h1>
       <div>
        <h3>Author</h3>
        {renderSearchResultsByAuthor()}
        <h3>Title</h3>
        {renderSearchResultsByTitle()}
        {/* <h3>ISBN</h3>
        {renderSearchResultsByISBN()} */}
       </div>

        {/* <div className="d-flex justify-content-center">{renderPagination()}</div> */}
      </div>
    </>
  );
}



