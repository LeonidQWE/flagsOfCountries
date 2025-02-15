import { useAppDispatch, useAppSelector } from 'store';
import { selectRegion, setRegion, clearRegion} from 'features/controls/controlsSlice';
import { Regions } from 'types';

export const useRegion = () => {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectRegion);

  const changeRegion = (newRegion: Regions) => {
    dispatch(setRegion(newRegion));
  }

  const resetRegion = () => {
    dispatch(clearRegion());
  }

  return { region, changeRegion, resetRegion };
}
