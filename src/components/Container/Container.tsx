import styles from './Container.module.scss';

interface ContainerPorops {
  children: React.ReactNode
}

export const Container = ({children}: ContainerPorops) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
