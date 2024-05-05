import { DataRow } from "./DataTable";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
}

export interface IUserRow extends DataRow {
  fullName: string;
  email: string;
}

