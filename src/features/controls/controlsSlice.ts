import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Regions } from 'types';

type ControlsSlice = {
  region: Regions | '';
}

const initialState: ControlsSlice = {
  region: '',
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<Regions>) => {
      state.region = action.payload;
    },
    clearRegion: () => initialState,
  },
  selectors: {
    selectRegion: (state) => state.region,
  }
})

export const controlsReducer = controlsSlice.reducer;
export const { setRegion, clearRegion } = controlsSlice.actions;
export const { selectRegion } = controlsSlice.selectors;
