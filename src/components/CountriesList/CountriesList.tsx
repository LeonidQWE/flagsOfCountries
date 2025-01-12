import { ShortCountryInfo } from 'types';
import styles from './CountriesList.module.scss';
import { CountryCard } from 'components/CountryCard';

interface CountriesListProps {
  countries: ShortCountryInfo[];
}

export const CountriesList = ({ countries }: CountriesListProps) => {
  return (
    <div className={styles.countriesList}>
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  )
}
