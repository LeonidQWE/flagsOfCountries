import { selectSearch, setSearch } from "features/controls/controlsSlice";
import { useAppDispatch, useAppSelector } from "store";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearch);

  const setSearchValue = (value: string) => {
    dispatch(setSearch(value));
  }

  return {searchValue, setSearchValue};
}
