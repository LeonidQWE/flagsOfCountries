import { Logo } from 'components/Logo';
import { ThemeSwitcher } from 'components/ThemeSwither';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <ThemeSwitcher/>
    </header>
  )
}
