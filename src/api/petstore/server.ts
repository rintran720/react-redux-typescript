import { getAccessTokenForPetStore } from '~/utils/localStorage';
import { ApiRequestOptions } from './core/ApiRequestOptions';
import { PetStoreServer } from './PetStoreServer';

export const PetStoreAPI = new PetStoreServer({
  BASE: 'https://petstore3.swagger.io/api/v3',
  VERSION: '1.0.11',
  WITH_CREDENTIALS: false,
  CREDENTIALS: 'include',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TOKEN: (options: ApiRequestOptions) => getAccessTokenForPetStore(),
  USERNAME: undefined,
  PASSWORD: undefined,
  HEADERS: undefined,
  ENCODE_PATH: undefined,
});
