import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCountryDetails } from 'features/countryDetails/countryDetails';
import { CountryInfo } from 'components/CountryInfo';

export const Country = () => {
  const { name } = useParams()
  const dispatch = useAppDispatch();
  const country = useAppSelector(state => state.countryDetails.country);

  useEffect(() => {
    if (name) {
      dispatch(fetchCountryDetails(name));
    }
  }, [dispatch])

  return (
    <>
      {country && <CountryInfo country={country} />}
    </>
  )
}
