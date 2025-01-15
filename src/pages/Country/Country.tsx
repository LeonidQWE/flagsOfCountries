import { useParams } from 'react-router-dom';
import { fetchCountryDetails } from 'features/countryDetails/countryDetails';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';

export const Country = () => {
  const { name } = useParams()
  const dispatch = useAppDispatch();
  const country = useAppSelector(state => state.countryDetails.country);

  useEffect(() => {
    // if (!country) {
    //   dispatch(fetchCountryDetails(name!));
    // }
    dispatch(fetchCountryDetails(name));
  }, [dispatch])

  console.log(country);

  return (
    <h1>Country Page</h1>
  )
}
