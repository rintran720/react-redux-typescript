/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create user
   * This can only be done by the logged in user.
   * @param requestBody Created user object
   * @returns User successful operation
   * @throws ApiError
   */
  public createUser(requestBody?: User): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/user',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Creates list of users with given input array
   * Creates list of users with given input array
   * @param requestBody
   * @returns User Successful operation
   * @returns any successful operation
   * @throws ApiError
   */
  public createUsersWithListInput(requestBody?: Array<User>): CancelablePromise<User | any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/user/createWithList',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Logs user into the system
   * @param username The user name for login
   * @param password The password for login in clear text
   * @returns string successful operation
   * @throws ApiError
   */
  public loginUser(username?: string, password?: string): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/login',
      query: {
        username: username,
        password: password,
      },
      errors: {
        400: `Invalid username/password supplied`,
      },
    });
  }

  /**
   * Logs out current logged in user session
   * @returns any successful operation
   * @throws ApiError
   */
  public logoutUser(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/logout',
    });
  }

  /**
   * Get user by user name
   * @param username The name that needs to be fetched. Use user1 for testing.
   * @returns User successful operation
   * @throws ApiError
   */
  public getUserByName(username: string): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/{username}',
      path: {
        username: username,
      },
      errors: {
        400: `Invalid username supplied`,
        404: `User not found`,
      },
    });
  }

  /**
   * Update user
   * This can only be done by the logged in user.
   * @param username name that need to be deleted
   * @param requestBody Update an existent user in the store
   * @returns any successful operation
   * @throws ApiError
   */
  public updateUser(username: string, requestBody?: User): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/user/{username}',
      path: {
        username: username,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete user
   * This can only be done by the logged in user.
   * @param username The name that needs to be deleted
   * @returns void
   * @throws ApiError
   */
  public deleteUser(username: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/user/{username}',
      path: {
        username: username,
      },
      errors: {
        400: `Invalid username supplied`,
        404: `User not found`,
      },
    });
  }
}
