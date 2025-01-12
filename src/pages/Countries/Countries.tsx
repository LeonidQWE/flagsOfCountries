import { useEffect } from 'react';
import { fetchCountries } from 'features/countries/countriesSlice';
import { useAppDispatch, useAppSelector } from 'store';

export const Countries = () => {
    const dispatch = useAppDispatch();
    const countries = useAppSelector(state => state.countries.list);

    useEffect(() => {
      if (!countries.length) {
        dispatch(fetchCountries());
      }
    }, [countries.length, dispatch]);

  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>{country.name.common}</div>
      ))}
    </div>
  )
}
