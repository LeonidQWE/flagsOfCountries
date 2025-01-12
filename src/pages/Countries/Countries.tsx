import { useCountries } from 'hooks/useCountries';
import { CountriesList } from 'components/CountriesList';

export const Countries = () => {
  const [countries, status, error] = useCountries();

  if (error) {
    return <h1>{error}</h1>
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
