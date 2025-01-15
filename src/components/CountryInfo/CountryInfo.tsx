import { Country } from 'types';
import styles from './CountryInfo.module.scss';
import { Title } from 'components/Title';

type CountryInfoProps = {
  country: Country,
}

export const CountryInfo = ({ country }: CountryInfoProps) => {
  const {
    name: {
      official: countryName,
    },
    flags: {
      png,
      alt,
    },
  } = country;

  return (
    <>
      <Title name={countryName}/>
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
