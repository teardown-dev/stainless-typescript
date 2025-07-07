// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Branches extends APIResource {
  /**
   * Fetches a list of branches from the GitHub repository associated with the
   * specified project ID.
   */
  list(params: BranchListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/github/branches', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Fetches details for a specific branch (by name/ref) from the GitHub repository
   * associated with the specified project ID.
   */
  retrieveRef(params: BranchRetrieveRefParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/github/branches/ref', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface BranchListParams {
  'td-project-id': string;
}

export interface BranchRetrieveRefParams {
  /**
   * Query param:
   */
  ref: string;

  /**
   * Header param:
   */
  'td-project-id': string;
}

export declare namespace Branches {
  export {
    type BranchListParams as BranchListParams,
    type BranchRetrieveRefParams as BranchRetrieveRefParams,
  };
}
