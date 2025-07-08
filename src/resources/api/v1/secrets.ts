// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Fetches the actual value of a secret by its ID
   */
  retrieve(secretID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/secrets/value/${secretID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a new secret or updates an existing one
   */
  update(name: string, params: SecretUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { entity_type, entity_id, ...body } = params;
    return this._client.put(
      path`/api/v1/secrets/${entity_type}/${entity_id}/${name}`,
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Fetches a specific secret by entity and name
   */
  retrieveByName(
    name: string,
    params: SecretRetrieveByNameParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { entity_type, entity_id } = params;
    return this._client.get(path`/api/v1/secrets/${entity_type}/${entity_id}/${name}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches all secrets for a specific entity (user, organisation, or project)
   */
  retrieveForEntity(
    entityID: string,
    params: SecretRetrieveForEntityParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { entity_type } = params;
    return this._client.get(path`/api/v1/secrets/${entity_type}/${entityID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches an organisation's secret by name
   */
  retrieveOrganisationSecret(
    name: string,
    params: SecretRetrieveOrganisationSecretParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { orgId } = params;
    return this._client.get(path`/api/v1/secrets/organisation/${orgId}/${name}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches a project's secret by name
   */
  retrieveProjectSecret(
    name: string,
    params: SecretRetrieveProjectSecretParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/api/v1/secrets/project/${projectId}/${name}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches a user's secret by name
   */
  retrieveUserSecret(
    name: string,
    params: SecretRetrieveUserSecretParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { userId } = params;
    return this._client.get(path`/api/v1/secrets/user/${userId}/${name}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SecretUpdateParams {
  /**
   * Path param:
   */
  entity_type: 'user' | 'organisation' | 'project';

  /**
   * Path param:
   */
  entity_id: string;

  /**
   * Body param:
   */
  value: string;
}

export interface SecretRetrieveByNameParams {
  entity_type: 'user' | 'organisation' | 'project';

  entity_id: string;
}

export interface SecretRetrieveForEntityParams {
  entity_type: 'user' | 'organisation' | 'project';
}

export interface SecretRetrieveOrganisationSecretParams {
  orgId: string;
}

export interface SecretRetrieveProjectSecretParams {
  projectId: string;
}

export interface SecretRetrieveUserSecretParams {
  userId: string;
}

export declare namespace Secrets {
  export {
    type SecretUpdateParams as SecretUpdateParams,
    type SecretRetrieveByNameParams as SecretRetrieveByNameParams,
    type SecretRetrieveForEntityParams as SecretRetrieveForEntityParams,
    type SecretRetrieveOrganisationSecretParams as SecretRetrieveOrganisationSecretParams,
    type SecretRetrieveProjectSecretParams as SecretRetrieveProjectSecretParams,
    type SecretRetrieveUserSecretParams as SecretRetrieveUserSecretParams,
  };
}
