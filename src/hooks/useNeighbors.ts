import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchNeighbors, selectCountryNeighbors } from 'features/countryDetails/countryDetails';

export const useNeighbors =(borders: string[] | undefined) => {
  const dispatch = useAppDispatch();
  const neighbors = useAppSelector(selectCountryNeighbors);

  useEffect(() => {
    if (borders?.length) {
      dispatch(fetchNeighbors(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
}
