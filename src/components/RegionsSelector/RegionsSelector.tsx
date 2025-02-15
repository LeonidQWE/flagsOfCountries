import { useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { regionsSchema} from 'constant/regionsSchema';
import styles from './RegionsSelector.module.scss';

export const RegionsSelector = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const regions = Object.values(regionsSchema);

  const handleClickToggleSelectMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.selectMenu}>
      <div onClick={handleClickToggleSelectMenu} className={styles.selectMenuHeader}>
        <span>{selectedRegion || 'Filter by Region'}</span>
        {isOpen
          ? <GoTriangleUp className={styles.icon}/>
          : <GoTriangleDown className={styles.icon}/>
        }
      </div>

      <ul className={`${styles.menuList} ${isOpen ? styles.open : ''}`}>
        {regions.map((region) => (
          <li key={region.id} className={styles.menuItem}>
            <button value={region.value} className={styles.menuItemBtn}>
              {region.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
