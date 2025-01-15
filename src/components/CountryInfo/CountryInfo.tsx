import { Title } from 'components/Title';
import { Image } from 'components/Image';
import { Country } from 'types';
import styles from './CountryInfo.module.scss';

type CountryInfoProps = {
  country: Country,
}

export const CountryInfo = ({ country }: CountryInfoProps) => {
  const {
    name: {
      official: countryName,
    },
    flags: {
      png: scrImg,
      alt,
    },
  } = country;

  return (
    <>
      <Title name={countryName}/>
      <div className={styles.countryInfo}>
        <Image size={'md'} srcImg={scrImg} altImg={alt}/>

        <div>
        </div>
      </div>
    </>
  )
}
