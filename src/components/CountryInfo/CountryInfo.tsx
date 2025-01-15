import { Country } from 'types';
import styles from './CountryInfo.module.scss';

type CountryInfoProps = {
  country: Country,
}

export const CountryInfo = ({ country }: CountryInfoProps) => {
  const {
    flags: {
      png,
      alt,
    },
  } = country;

  return (
    <>
      <div className={styles.countryInfo}>
        <div className={styles.imgContainer}>
          <img src={png} alt={alt} />
        </div>

        <div>
        </div>
      </div>
    </>
  )
}
