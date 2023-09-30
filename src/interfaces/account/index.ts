import { GetQueryInterface } from 'interfaces';

export interface AccountInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AccountGetQueryInterface extends GetQueryInterface {
  id?: string;
}
