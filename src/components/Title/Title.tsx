import styles from './Title.module.scss';

interface TitleProps {
  name: string
}

export const Title = ({ name }: TitleProps) => {
  return (
    <h1 className={styles.title}>{name}</h1>
  )
}
