import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCountryDetails, selectCountry, selectCountryError, selectCountryStatus } from 'features/countryDetails/countryDetails';

export const useCountry = (name: string | undefined) => {
  const dispatch = useAppDispatch();
  const country = useAppSelector(selectCountry);
  const status = useAppSelector(selectCountryStatus);
  const error = useAppSelector(selectCountryError);

  useEffect(() => {
    if (name) {
      dispatch(fetchCountryDetails(name));
    }
  }, [dispatch, name]);

  return { country, status, error };
}
