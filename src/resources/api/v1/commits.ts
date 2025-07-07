// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Commits extends APIResource {
  /**
   * Fetches detailed information for a specific commit SHA within the specified
   * project's linked Git repository.
   */
  retrieve(commitSha: string, params: CommitRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/commits/${commitSha}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

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

export interface CommitRetrieveParams {
  'td-project-id': string;
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
  page?: string;

  /**
   * Query param:
   */
  per_page?: string;
}

export declare namespace Commits {
  export { type CommitRetrieveParams as CommitRetrieveParams, type CommitListParams as CommitListParams };
}
