import { ChangeEvent } from 'react';
import { useSearch } from 'hooks/useSearch';
import styles from './SearchEngine.module.scss';

export const SearchEngine = () => {
  const { searchValue, setSearchValue} = useSearch();

  const handleChangeSearchCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={searchValue}
        onChange={handleChangeSearchCountry}/>
    </div>
  )
}
