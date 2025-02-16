import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Extra, ShortCountryInfo, Status } from 'types';

export const fetchCountries = createAsyncThunk<
  { data: ShortCountryInfo[] },
  undefined,
  {extra: Extra}
>(
  '@@countries/load-countries',
  (_, {extra: {client, api}}) => {
    return client.get(api.ALL_COUNTRIES)
  }
)

type CountrySlise = {
  status: Status,
  error: string | undefined,
  list: Array<ShortCountryInfo>
}

const initialState: CountrySlise = {
  status: 'idle',
  error: undefined,
  list: [],
}

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  selectors: {
    selectAllCountries: (state) => state.list,
    selectAllCountriesError: (state) => state.error,
    selectAllCountriesStatus: (state) => state.status,
    selectVisibleCountries: (state, region = '', search = '') => {
      return state.list.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.data;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      })
  }
})

export const countryReducer = countrySlice.reducer;
export const {
  selectAllCountries,
  selectAllCountriesError,
  selectAllCountriesStatus,
  selectVisibleCountries,
} = countrySlice.selectors;
