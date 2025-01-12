import styles from './Error.module.scss';

interface ErrorProps {
  message: string,
}

export const Error = ({ message }: ErrorProps) => {
  return (
    <div className={styles.error}>
      <h1 className={styles.errorTitle}>{message}</h1>
    </div>
  )
}
