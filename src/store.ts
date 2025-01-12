import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import * as api from './constant/countriesApi';
import { countryReducer } from 'features/countries/countriesSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

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
    },
    serializableCheck: false
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
