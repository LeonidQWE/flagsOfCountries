import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCountries, selectAllCountries, selectAllCountriesError, selectAllCountriesStatus } from 'features/countries/countriesSlice';
import { ShortCountryInfo, Status } from 'types';

export const useCountries = (): [ShortCountryInfo[], Status, string | undefined] => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectAllCountries);
  const error = useAppSelector(selectAllCountriesError);
  const status = useAppSelector(selectAllCountriesStatus);

  useEffect(() => {
      if (!countries.length) {
        dispatch(fetchCountries());
      }
    }, [countries.length, dispatch]);

  return [countries, status, error];
}
