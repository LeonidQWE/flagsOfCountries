import { Axios } from 'axios';
import * as API from 'constant/countriesApi';

export type Extra = {
  client: Axios,
  api: typeof API,
}
