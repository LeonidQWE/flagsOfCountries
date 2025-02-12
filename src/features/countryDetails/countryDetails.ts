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

export const fetchNeighbors = createAsyncThunk<
  {data: Country[]},
  string[],
  {extra: Extra}
>(
  '@@countryDetails/load-country-neighbors',
  (borders, {extra: {client, api}}) => {
    return client.get(api.filterByCode(borders))
  }
);

type CountryDetailsSlice = {
  status: Status,
  error: string | undefined,
  country: Country | null,
  neighbors: string[]
}

const initialState: CountryDetailsSlice = {
  status: 'idle',
  error: undefined,
  country: null,
  neighbors: [],
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
      .addCase(fetchNeighbors.fulfilled, (state, action) => {
        state.neighbors = action.payload.data.map(country => country.name.common);
      })
  }
})

export const countryDetailsReducer = countryDetailsSlice.reducer;
