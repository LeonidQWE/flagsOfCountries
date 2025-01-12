import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCountries } from 'features/countries/countriesSlice';
import { CountriesList } from 'components/CountriesList';

export const Countries = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(state => state.countries.list);
  const error = useAppSelector(state => state.countries.error);
  const status = useAppSelector(state => state.countries.status);

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries());
    }
  }, [countries.length, dispatch]);

  if (error) {
    return <h1>{error}</h1>
  }

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {countries.length > 0 && status === 'succeeded' && <CountriesList countries={countries} />}
    </>
  )
}
