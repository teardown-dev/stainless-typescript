// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Branches extends APIResource {
  /**
   * Get a single branch by its name
   */
  retrieve(name: string, params: BranchRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/branches/${name}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Get all branches for a project
   */
  list(params: BranchListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/branches', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface BranchRetrieveParams {
  'td-project-id': string;
}

export interface BranchListParams {
  'td-project-id': string;
}

export declare namespace Branches {
  export { type BranchRetrieveParams as BranchRetrieveParams, type BranchListParams as BranchListParams };
}
