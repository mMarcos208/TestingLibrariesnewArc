import Realm from 'realm';
import {Address} from '.';

export class Person {
  id!: number;
  name!: string;
  address!: Address[];

  static schema: Realm.ObjectSchema = {
    name: 'Person',
    primaryKey: 'id',
    properties: {
      id: 'int',
      name: 'string',
      address: {
        type: 'Address',
        default: [],
      },
    },
  };
}
