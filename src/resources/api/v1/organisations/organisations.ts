// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RolesAPI from './roles';
import { RoleCreateParams, RoleDeleteParams, RoleRetrieveParams, RoleUpdateParams, Roles } from './roles';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Organisations extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  /**
   * Creates a new organisation with the authenticated user as the owner.
   */
  create(body: OrganisationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/api/v1/organisations',
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Fetches details for a specific organisation by its ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/organisations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates the details (e.g., name) of an existing organisation.
   */
  update(id: string, body: OrganisationUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(
      path`/api/v1/organisations/${id}`,
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Fetches a list of organisations that the currently authenticated user is a
   * member of.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/organisations', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes an existing organisation by its ID.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/organisations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches a list of all members within a specific organisation.
   */
  retrieveMembers(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/organisations/${id}/members`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrganisationCreateParams {
  name: string;

  type: 'PERSONAL' | 'BUSINESS' | 'ENTERPRISE' | 'START_UP';
}

export interface OrganisationUpdateParams {
  domain?: string | null;

  name?: string;
}

Organisations.Roles = Roles;

export declare namespace Organisations {
  export {
    type OrganisationCreateParams as OrganisationCreateParams,
    type OrganisationUpdateParams as OrganisationUpdateParams,
  };

  export {
    Roles as Roles,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleDeleteParams as RoleDeleteParams,
  };
}
