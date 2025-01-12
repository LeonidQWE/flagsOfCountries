import { ShortCountryInfo } from 'types';
import styles from './CountriesList.module.scss';

interface CountriesListProps {
  countries: ShortCountryInfo[];
}

export const CountriesList = ({ countries }: CountriesListProps) => {
  return (
    <div className={styles.countriesList}>
      {countries.map((country, index) => (
        <div></div>
      ))}
    </div>
  )
}
