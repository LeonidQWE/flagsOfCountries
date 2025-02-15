import { Regions } from './regions';

export type regionsSchemaType = {
  [RegItem in Regions]: {
    id: number,
    label: string,
    value: RegItem,
  }
}
