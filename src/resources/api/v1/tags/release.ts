// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Release extends APIResource {
  /**
   * Fetches all release tags for the specified project from its linked Git
   * repository for a specific commit.
   */
  retrieve(commitSha: string, params: ReleaseRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/tags/release/commit/${commitSha}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Fetches all release tags for the specified project from its linked Git
   * repository.
   */
  list(params: ReleaseListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/tags/release', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface ReleaseRetrieveParams {
  'td-project-id': string;
}

export interface ReleaseListParams {
  'td-project-id': string;
}

export declare namespace Release {
  export { type ReleaseRetrieveParams as ReleaseRetrieveParams, type ReleaseListParams as ReleaseListParams };
}
