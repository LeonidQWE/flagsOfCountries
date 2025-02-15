import { useState } from 'react';
import { useAppDispatch } from 'store';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { setRegion } from 'features/controls/controlsSlice';
import { regionsSchema} from 'constant/regionsSchema';
import { Regions } from 'types';
import styles from './RegionsSelector.module.scss';

export const RegionsSelector = () => {
  const dispatch = useAppDispatch();
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const regions = Object.values(regionsSchema);

  const handleClickToggleSelectMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleClickChoiceRegion = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value as Regions;
    setSelectedRegion(value);
    setIsOpen(false);
    dispatch(setRegion(value));
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
            <button
              value={region.value}
              className={styles.menuItemBtn}
              onClick={handleClickChoiceRegion}
            >
              {region.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
