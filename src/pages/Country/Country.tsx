import { useParams } from 'react-router-dom';
import { useCountry } from 'hooks/useCountry';
import { CountryInfo } from 'components/CountryInfo';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';

export const Country = () => {
  const { name } = useParams()
  const {country, status, error} = useCountry(name);

  if (error) {
      return <Error message={error} />
  }

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <>
      {country && <CountryInfo country={country} />}
    </>
  )
}
