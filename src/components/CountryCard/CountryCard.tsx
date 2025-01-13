import { useNavigate } from 'react-router-dom';
import { ShortCountryInfo } from 'types';
import styles from './CountryCard.module.scss';

interface CountryCardProps {
  country: ShortCountryInfo
}

export const CountryCard = ({ country }: CountryCardProps) => {
  const navigate = useNavigate();
  const {
    flags: {
      png: hrefImg,
      alt,
    },
    name: {
      common: nameForPath,
      official: countryName,
    },
    capital,
    population,
  } = country;

  const infoSchema = [
    {
      itemName: 'Official name',
      itemValue: countryName,
    },
    {
      itemName: 'Capital',
      itemValue: capital,
    },
    {
      itemName: 'Population',
      itemValue: population,
    },
  ];

  const handleClickRedirectOnCountryPage = () => {
    navigate(`/country/${nameForPath}`);
  }

  return (
    <div className={styles.card} onClick={handleClickRedirectOnCountryPage}>
      <div className={styles.imgContainer}>
        <img src={hrefImg} alt={alt}/>
      </div>
      <ul>
        {infoSchema.map(({ itemName, itemValue }, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.itemName}>{itemName}: </span>
            <span className={styles.itemValue}>{itemValue}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
