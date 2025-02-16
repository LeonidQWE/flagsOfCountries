import styles from './SearchEngine.module.scss';

export const SearchEngine = () => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input}/>
    </div>
  )
}
