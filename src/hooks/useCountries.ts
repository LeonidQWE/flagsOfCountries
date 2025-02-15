import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCountries, selectAllCountriesError, selectAllCountriesStatus, selectVisibleCountries } from 'features/countries/countriesSlice';
import { ShortCountryInfo, Status } from 'types';
import { selectRegion } from 'features/controls/controlsSlice';

export const useCountries = (): [ShortCountryInfo[], Status, string | undefined] => {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectRegion);
  const countries = useAppSelector(state => selectVisibleCountries(state, region));
  const error = useAppSelector(selectAllCountriesError);
  const status = useAppSelector(selectAllCountriesStatus);

  useEffect(() => {
      if (!countries.length) {
        dispatch(fetchCountries());
      }
    }, [countries.length, dispatch]);

  return [countries, status, error];
}
