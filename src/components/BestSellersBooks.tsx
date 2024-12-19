import {useEffect} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { fetchBestSellersBooks } from '../redux/books-slice';
import {buildSchemePagination} from '../utils/schemePagination';
import { IBook } from '../types/types';

export function BestSellersBooks () {
  const dispatch = useAppDispatch();
  const {list} = useAppSelector(state => state.books);

  useEffect(() => {
    dispatch(fetchBestSellersBooks());
  }, [dispatch]);

  console.log(list)


function renderSearchResults() {
    return (
     list.map((book:IBook, index) => {

        return (<article key={index}>
           <h3>{book.title}</h3>      
         </article>)
       })
    )
 }

  return (
    <>
    <h3>Best Seller Books</h3>
    <div>
    {renderSearchResults()}
    </div>
    </>
  )
}
