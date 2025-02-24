import { useNeighbors } from 'hooks/useNeighbors';
import { BackLink } from 'components/BackLink';
import { Title } from 'components/Title';
import { Image } from 'components/Image';
import { Info } from 'components/Info';
import { Link } from 'components/Link';
import { Country } from 'types';
import styles from './CountryInfo.module.scss';

interface CountryInfoProps {
  country: Country,
}

export const CountryInfo = ({ country }: CountryInfoProps) => {
  const {
    name: {
      official: countryName,
      common,
    },
    flags: {
      png: scrImg,
      alt,
    },
    population,
    region,
    subregion,
    capital,
    area,
    borders,
  } = country;

  const neighbors = useNeighbors(borders);

  const infoSchema = [
    {
      itemName: 'Native Name',
      itemValue: common,
    },
    {
      itemName: 'Population',
      itemValue: population,
    },
    {
      itemName: 'Region',
      itemValue: region,
    },
    {
      itemName: 'Sub Region',
      itemValue: subregion,
    },
    {
      itemName: 'Capital',
      itemValue: capital[0],
    },
    {
      itemName: 'Area',
      itemValue: area,
    }
  ];

  return (
    <>
    <BackLink/>
      <Title name={countryName}/>
      <div className={styles.countryInfo}>
        <Image size={'md'} srcImg={scrImg} altImg={alt}/>

        <div >
          <Info infoSchema={infoSchema}/>
          {!borders?.length ? (
            <span className={styles.noBorders}>No borders</span>
          ) : (
            <div className={styles.borders}>
              <span className={styles.bordersTitle}>Borders:</span>
              {neighbors.map((item, index) => (
                <Link key={index} path={`/country/${item}`} text={item}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
