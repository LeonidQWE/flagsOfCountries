import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import * as api from './constant/countriesApi';
import { countryReducer } from 'features/countries/countriesSlice';
import { countryDetailsReducer } from 'features/countryDetails/countryDetails';
import { controlsReducer } from 'features/controls/controlsSlice';

export const store = configureStore({
  reducer: {
    countries: countryReducer,
    countryDetails: countryDetailsReducer,
    controls: controlsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        client: axios,
        api,
      }
    },
    serializableCheck: false
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
