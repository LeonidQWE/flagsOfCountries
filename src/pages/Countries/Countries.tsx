import { useCountries } from 'hooks/useCountries';
import { CountriesList } from 'components/CountriesList';
import { Error } from 'components/Error';

export const Countries = () => {
  const [countries, status, error] = useCountries();

  if (error) {
    return <Error message={error} />
  }

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {countries.length > 0
        && status === 'succeeded'
        && <CountriesList countries={countries} />}
    </>
  )
}
