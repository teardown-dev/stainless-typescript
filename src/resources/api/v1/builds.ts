// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Builds extends APIResource {
  /**
   * Get a build by ID
   */
  retrieve(buildID: string, params: BuildRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/builds/${buildID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Update a build by ID
   */
  update(buildID: string, params: BuildUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.patch(
      path`/api/v1/builds/${buildID}`,
      maybeMultipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
        },
        this._client,
      ),
    );
  }

  /**
   * Get all builds for a project
   */
  list(params: BuildListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/builds', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Get a build by build number
   */
  retrieveByBuildNumber(
    buildNumber: string,
    params: BuildRetrieveByBuildNumberParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/builds/build-number/${buildNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface BuildRetrieveParams {
  'td-project-id': string;
}

export interface BuildUpdateParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  branch?: string | null;

  /**
   * Body param:
   */
  commit_sha?: string | null;

  /**
   * Body param:
   */
  status?: 'RELEASED' | 'PENDING' | 'DISABLED';

  /**
   * Body param:
   */
  version_id?: string | null;
}

export interface BuildListParams {
  'td-project-id': string;
}

export interface BuildRetrieveByBuildNumberParams {
  'td-project-id': string;
}

export declare namespace Builds {
  export {
    type BuildRetrieveParams as BuildRetrieveParams,
    type BuildUpdateParams as BuildUpdateParams,
    type BuildListParams as BuildListParams,
    type BuildRetrieveByBuildNumberParams as BuildRetrieveByBuildNumberParams,
  };
}
