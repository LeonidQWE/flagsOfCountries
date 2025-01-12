import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCountries } from 'features/countries/countriesSlice';
import { CountriesList } from 'components/CountriesList';

export const Countries = () => {
    const dispatch = useAppDispatch();
    const countries = useAppSelector(state => state.countries.list);

    useEffect(() => {
      if (!countries.length) {
        dispatch(fetchCountries());
      }
    }, [countries.length, dispatch]);

  return (
    <CountriesList countries={countries} />
  )
}
