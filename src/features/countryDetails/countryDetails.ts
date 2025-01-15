import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country, Extra, Status } from 'types';

export const fetchCountryDetails = createAsyncThunk<
  {data: Country[]},
  string,
  {extra: Extra}
>(
  '@@countryDetails/load-country-details',
  (name, {extra: {client, api}}) => {
    return client.get(api.searchCountryByName(name))
  }
)

type CountryDetailsSlice = {
  status: Status,
  error: string | undefined,
  country: Country | null,
}

const initialState: CountryDetailsSlice = {
  status: 'idle',
  error: undefined,
  country: null,
}

export const countryDetailsSlice = createSlice({
  name: 'countryDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountryDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.country = action.payload.data[0];
      })
      .addCase(fetchCountryDetails.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      })
  }
})

export const countryDetailsReducer = countryDetailsSlice.reducer;
