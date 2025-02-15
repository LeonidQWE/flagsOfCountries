import { useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';
import { useRegion } from 'hooks/useRegion';
import { regionsSchema} from 'constant/regionsSchema';
import { Regions } from 'types';
import styles from './RegionsSelector.module.scss';

export const RegionsSelector = () => {
  const { region, changeRegion, resetRegion } = useRegion();
  const [isOpen, setIsOpen] = useState(false);
  const regions = Object.values(regionsSchema);

  const handleClickToggleSelectMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleClickChoiceRegion = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value as Regions;
    changeRegion(value);
    setIsOpen(false);
  }

  const handleClickClearRegion = () => {
    resetRegion();
  }

  return (
    <div className={styles.selectMenu}>
      <div onClick={handleClickToggleSelectMenu} className={styles.selectMenuHeader}>
        <span>{region || 'Filter by Region'}</span>
        <div>
          {isOpen
            ? <GoTriangleUp className={styles.icon}/>
            : <GoTriangleDown className={styles.icon}/>
          }
        </div>
      </div>

      {region && (
            <button className={styles.clear} onClick={handleClickClearRegion}>
              <RxCross2 className={styles.icon}/>
            </button>
          )}

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
