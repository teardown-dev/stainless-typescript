// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Builds extends APIResource {
  /**
   * Fetches details for a specific App Store Connect build by its ID, associated
   * with the specified project ID.
   */
  retrieve(id: string, params: BuildRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/app-store-connect/builds/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Fetches a list of App Store Connect builds associated with the specified project
   * ID.
   */
  list(params: BuildListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/app-store-connect/builds', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface BuildRetrieveParams {
  'td-project-id': string;
}

export interface BuildListParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Query param:
   */
  limit?: number;
}

export declare namespace Builds {
  export { type BuildRetrieveParams as BuildRetrieveParams, type BuildListParams as BuildListParams };
}
