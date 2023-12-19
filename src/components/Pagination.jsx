import React from 'react';
import { usePagination } from '../hooks/usePagination';

export default function Pagination({ totalPages, page, changePage }) {
  let pagesArray = usePagination(totalPages);

  return (
    <div className="pagination">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          className={page === p ? 'pagination__number pagination__number_active' : 'pagination__number'}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  )
}