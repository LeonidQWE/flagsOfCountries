import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchNeighbors } from 'features/countryDetails/countryDetails';

export const useNeighbors =(borders: string[] | undefined) => {
  const dispatch = useAppDispatch();
  const neighbors = useAppSelector(state => state.countryDetails.neighbors);

  useEffect(() => {
    if (borders?.length) {
      dispatch(fetchNeighbors(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
}
