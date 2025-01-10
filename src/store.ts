import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import * as api from './constant/countriesApi';
import { countryReducer } from 'features/countries/countriesSlice';

export const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        client: axios,
        api,
      }
    }
  })
})
