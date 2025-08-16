// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Commits extends APIResource {
  /**
   * Fetches the commits for the specified project from its linked Git repository
   * with pagination support.
   */
  list(params: CommitListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/commits', {
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
  branch_name?: string;

  /**
   * Query param:
   */
  commit_sha?: string;

  /**
   * Query param:
   */
  page?: string | number;

  /**
   * Query param:
   */
  per_page?: string | number;
}

export declare namespace Commits {
  export { type CommitListParams as CommitListParams };
}
