import React, { useState } from 'react';
import DropdownMenuItem from './DropDownMenuItem';
import { dropdownMenuItems } from '../utils/constants';

export default function DropdownMenu({ onSort }) {

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState('-');

  function toggleDropdown() {
    setIsDropdownOpened(!isDropdownOpened);
  }

  function selectOption(item) {
    setSelectedItem(item.textContent);
    onSort(item.textContent);
    setIsDropdownOpened(false);
  }

  return (
    <div className="dropdown">
      <h3 className="dropdown__title">Sort by</h3>
      <div className="dropdown__selected" onClick={toggleDropdown}>
        <p className="dropdown__txt">{selectedItem}</p>
        <span className={`dropdown__arrow ${isDropdownOpened ? 'dropdown__arrow_opened' : ''}`}></span>
      </div>
      <ul className={`dropdown__menu ${isDropdownOpened ? 'dropdown__menu_opened' : ''}`}>
        {dropdownMenuItems.map((item) => (
          <DropdownMenuItem
            key={item.id}
            option={item.option}
            selectedItem={selectedItem}
            onSelect={selectOption}
          />
        ))}
      </ul>
    </div>
  )
}