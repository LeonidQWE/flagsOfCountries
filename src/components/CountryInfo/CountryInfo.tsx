import { Title } from 'components/Title';
import { Image } from 'components/Image';
import { Country } from 'types';
import styles from './CountryInfo.module.scss';
import { Info } from 'components/Info';
import { Link } from 'components/Link';

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
      <Title name={countryName}/>
      <div className={styles.countryInfo}>
        <Image size={'md'} srcImg={scrImg} altImg={alt}/>

        <div>
          <Info infoSchema={infoSchema}/>
          {!borders?.length ? (
            <span>No borders</span>
          ) : (
            <div>
              <span>Borders:</span>
              {borders.map((item, index) => (
                <Link key={index} path={'#'} text={item}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
