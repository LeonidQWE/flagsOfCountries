import { useCountries } from 'hooks/useCountries';
import { CountriesList } from 'components/CountriesList';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Controls } from 'components/Controls';

export const Countries = () => {
  const [countries, status, error] = useCountries();

  if (error) {
    return <Error message={error} />
  }

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <>
      <Controls/>
      {countries.length > 0
        && status === 'succeeded'
        && <CountriesList countries={countries} />}
    </>
  )
}
