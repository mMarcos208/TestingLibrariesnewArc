import Realm from 'realm';

import * as schemas from './schemas';

const mappedSchemas = Object.values(schemas).map(({schema}) => schema);

let app: Realm;

export const getRealm = () => {
  if (!app || app.isClosed) {
    app = new Realm({
      schemaVersion: 1,
      schema: mappedSchemas,
    });
  }

  return app;
};

const embeddedCollections = [schemas.Address.name];

export const deleteAll = () => {
  const realm = getRealm();

  try {
    for (const {schema} of Object.values(schemas)) {
      if (embeddedCollections.includes(schema.name)) {
        continue;
      }
      realm.delete(realm.objects(schema.name));
    }
  } catch (_) {}
};
