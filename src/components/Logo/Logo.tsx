import { FaFlag } from 'react-icons/fa';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <FaFlag className={styles.logoIcon}/>
      <span className={styles.logoTitle}>s of Countries</span>
    </div>
  )
}
