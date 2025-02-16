import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { selectSearch, setSearch } from 'features/controls/controlsSlice';
import styles from './SearchEngine.module.scss';

export const SearchEngine = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearch)

  const handleChangeSearchCountry = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
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
