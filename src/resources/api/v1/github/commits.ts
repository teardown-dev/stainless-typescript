// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Commits extends APIResource {
  /**
   * Fetches a list of commits from the GitHub repository associated with the
   * specified project ID. Optionally filter by starting SHA.
   */
  list(params: CommitListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/github/commits', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Fetches details for a specific commit (by SHA, branch, or tag name) from the
   * GitHub repository associated with the specified project ID.
   */
  retrieveRef(params: CommitRetrieveRefParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/github/commits/ref', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface CommitListParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Query param:
   */
  sha?: string;
}

export interface CommitRetrieveRefParams {
  /**
   * Query param:
   */
  ref: string;

  /**
   * Header param:
   */
  'td-project-id': string;
}

export declare namespace Commits {
  export {
    type CommitListParams as CommitListParams,
    type CommitRetrieveRefParams as CommitRetrieveRefParams,
  };
}
