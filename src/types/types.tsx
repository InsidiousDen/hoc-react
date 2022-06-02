export interface IUser {
  id: number;
  name: string;
}

export interface IData {
  id: number;
  title: string;
}

export type DataType = IUser & IData;
