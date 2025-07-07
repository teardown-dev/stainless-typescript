// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * Fetches details for a specific App Store Connect version by its ID, associated
   * with the specified project ID.
   */
  retrieve(id: string, params: VersionRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/app-store-connect/versions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Fetches a list of App Store Connect versions (representing app versions in
   * TestFlight or the App Store) associated with the specified project ID.
   */
  list(params: VersionListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/app-store-connect/versions', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface VersionRetrieveParams {
  'td-project-id': string;
}

export interface VersionListParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Query param:
   */
  limit?: number;
}

export declare namespace Versions {
  export { type VersionRetrieveParams as VersionRetrieveParams, type VersionListParams as VersionListParams };
}
