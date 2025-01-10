import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCountries = createAsyncThunk(
  '@@countries/load-countries',
  (_, {extra: {client, api}}) => {
    return client.get(api.ALL_COUNTRIES)
  }
)

const initialState = {
  status: 'idle',
  error: null,
  list: [],
}

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
  }
})

export const countryReducer = countrySlice.reducer;
