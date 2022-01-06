import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
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

  return (
    <div className={styles.filter}>
      <div>
        <label>
          <select
            onChange={(e) => {
              setSport(e.target.value);
            }}
            className='filter'
          >
            <option value='All'>Filter by Sport</option>
            <option value='Basketball'>Basketball</option>
            <option value='Handball'>Handball</option>
            <option value='Tennis'>Tennis</option>
            <option value='Soccer'>Soccer</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <select
            onChange={(e) => {
              setFloor(e.target.value);
            }}
            className='filter'
          >
            <option value='All'>Filter by Floor</option>
            <option value='grass'>grass</option>
            <option value='clay'>clay</option>
            <option value='wood'>wood</option>
            <option value='asphalt'>asphalt</option>
          </select>
        </label>
      </div>
      <div>
        <label>Roof</label>
        <input type='checkbox' onChange={toggleRoof} />
      </div>
    </div>
  );
}
