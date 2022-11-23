import Realm from 'realm';

export class Address {
  id!: number;
  street!: string;

  static schema: Realm.ObjectSchema = {
    embedded: true,
    name: 'Address',
    primaryKey: 'id',
    properties: {
      id: 'int',
      street: 'string',
    },
  };
}
