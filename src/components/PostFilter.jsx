import React from 'react';
import DropdownMenu from './DropDownMenu';

export default function PostFilter({ filter, setFilter }) {

  function setSort(selectedSort) {
    setFilter({ ...filter, sort: selectedSort })
  }

  return (
    <div className="posts__filter">
      <div className="posts__search-container">
        <label htmlFor="search" className="posts__search-label">Search by Title</label>
        <div className="posts__search-input">
          <input
            name="search"
            type="text"
            className="posts__search"
            placeholder="Search..."
            value={filter.query}
            onChange={evt => setFilter({ ...filter, query: evt.target.value })}
          />
        </div>
      </div>
      <DropdownMenu onSort={setSort} />
    </div>
  )
}
