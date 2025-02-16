import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Regions } from 'types';

type ControlsSlice = {
  region: Regions | '';
  search: string;
}

const initialState: ControlsSlice = {
  region: '',
  search: '',
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<Regions>) => {
      state.region = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    clearRegion: () => initialState,
  },
  selectors: {
    selectRegion: (state) => state.region,
    selectSearch: (state) => state.search
  }
})

export const controlsReducer = controlsSlice.reducer;
export const { setRegion, setSearch, clearRegion } = controlsSlice.actions;
export const { selectRegion, selectSearch } = controlsSlice.selectors;
