import React, { useState } from 'react';
import ReactSearchBox from 'react-search-box';
import styles from '../styles/Filter.module.css';

export default function Filter({ setSport, roof, setRoof, setFloor }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRoof = () =>
    setRoof(() => {
      if (roof === null) {
        roof = true;
      } else {
        !roof;
      }
    });
  const toggleLight = () =>
    setRoof(() => {
      if (roof === null) {
        roof = true;
      } else {
        !roof;
      }
    });

  return (
    <div className='flex-container'>
      <div className='search-box'>
        <ReactSearchBox placeholder='Search by name...' />
      </div>
      <div class='dropdown'>
        <button class='dropbtn'>Filter by Sport</button>
        <div class='dropdown-content'>
          <a value='Basketball'>Basketball</a>
          <a value='Handball'>Handball</a>
          <a value='Tennis'>Tennis</a>
          <a value='Soccer'>Soccer</a>
        </div>
      </div>
      <div class='dropdown'>
        <button class='dropbtn'>Filter by Floor</button>
        <div class='dropdown-content'>
          <a value='grass'>grass</a>
          <a value='clay'>clay</a>
          <a value='wood'>wood</a>
          <a value='asphalt'>asphalt</a>
        </div>
      </div>
      <div className={styles.filter}>
        <label className={styles.label}>Roof</label>
        <input type='checkbox' onChange={toggleRoof} />
      </div>
      <div className={styles.filter}>
        <label className={styles.label}>Lighting</label>
        <input type='checkbox' onChange={toggleLight} />
      </div>
    </div>
  );
}
