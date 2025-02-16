import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import {
  fetchCountries,
  selectAllCountriesError,
  selectAllCountriesStatus,
  selectVisibleCountries
} from 'features/countries/countriesSlice';
import { selectRegion, selectSearch } from 'features/controls/controlsSlice';
import { ShortCountryInfo, Status } from 'types';

export const useCountries = (): [ShortCountryInfo[], Status, string | undefined] => {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectRegion);
  const searchValue = useAppSelector(selectSearch);
  const countries = useAppSelector(state => selectVisibleCountries(state, region, searchValue));
  const error = useAppSelector(selectAllCountriesError);
  const status = useAppSelector(selectAllCountriesStatus);

  useEffect(() => {
      if (!countries.length) {
        dispatch(fetchCountries());
      }
    }, [countries.length, dispatch]);

  return [countries, status, error];
}
