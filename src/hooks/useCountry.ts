import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCountryDetails } from 'features/countryDetails/countryDetails';

export const useCountry = (name: string | undefined) => {
  const dispatch = useAppDispatch();
  const country = useAppSelector(state => state.countryDetails.country);
  const status = useAppSelector(state => state.countryDetails.status);
  const error = useAppSelector(state => state.countryDetails.error);

  useEffect(() => {
    if (name) {
      dispatch(fetchCountryDetails(name));
    }
  }, [dispatch, name]);

  return { country, status, error };
}
