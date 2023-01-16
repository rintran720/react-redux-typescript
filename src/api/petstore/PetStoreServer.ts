/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { PetService } from './services/PetService';
import { StoreService } from './services/StoreService';
import { UserService } from './services/UserService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class PetStoreServer {
  public readonly pet: PetService;
  public readonly store: StoreService;
  public readonly user: UserService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'https://petstore3.swagger.io/api/v3',
      VERSION: config?.VERSION ?? '1.0.11',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.pet = new PetService(this.request);
    this.store = new StoreService(this.request);
    this.user = new UserService(this.request);
  }
}
