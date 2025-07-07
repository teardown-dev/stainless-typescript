// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Assigns a role to a specific user within an organisation.
   */
  create(id: string, body: RoleCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      path`/api/v1/organisations/${id}/roles`,
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Fetches the role of a specific user within a specific organisation.
   */
  retrieve(userID: string, params: RoleRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.get(path`/api/v1/organisations/${id}/roles/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates the role of a specific user within an organisation.
   */
  update(userID: string, params: RoleUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.put(
      path`/api/v1/organisations/${id}/roles/${userID}`,
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Fetches a list of users and their roles within a specific organisation.
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/organisations/${id}/roles`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Removes a user's role assignment from an organisation.
   */
  delete(userID: string, params: RoleDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/api/v1/organisations/${id}/roles/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RoleCreateParams {
  role: 'OWNER' | 'ADMIN' | 'DEVELOPER' | 'PRODUCT' | 'DATA' | 'MARKETING';

  user_id: string;
}

export interface RoleRetrieveParams {
  id: string;
}

export interface RoleUpdateParams {
  /**
   * Path param:
   */
  id: string;

  /**
   * Body param:
   */
  role: 'OWNER' | 'ADMIN' | 'DEVELOPER' | 'PRODUCT' | 'DATA' | 'MARKETING';
}

export interface RoleDeleteParams {
  id: string;
}

export declare namespace Roles {
  export {
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleDeleteParams as RoleDeleteParams,
  };
}
