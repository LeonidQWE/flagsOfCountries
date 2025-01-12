import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCountries } from 'features/countries/countriesSlice';
import { ShortCountryInfo, Status } from 'types';

export const useCountries = (): [ShortCountryInfo[], Status, string | undefined] => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(state => state.countries.list);
  const error = useAppSelector(state => state.countries.error);
  const status = useAppSelector(state => state.countries.status);

  useEffect(() => {
      if (!countries.length) {
        dispatch(fetchCountries());
      }
    }, [countries.length, dispatch]);

  return [countries, status, error];
}
