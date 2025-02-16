import { RegionsSelector } from 'components/RegionsSelector';
import { SearchEngine } from 'components/SearchEngine';
import styles from './Controls.module.scss';

export const Controls = () => {
  return (
    <div className={styles.container}>
      <SearchEngine/>
      <RegionsSelector/>
    </div>
  )
};
