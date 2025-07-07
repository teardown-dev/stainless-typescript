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

export declare namespace Secrets {
  export { type SecretUpdateParams as SecretUpdateParams };
}
