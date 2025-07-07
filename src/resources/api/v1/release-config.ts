// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';

export class ReleaseConfig extends APIResource {
  /**
   * Fetches the release configuration for a specific project.
   */
  retrieveReleaseConfig(
    params: ReleaseConfigRetrieveReleaseConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/release-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Updates the release configuration for a specific project.
   */
  updateReleaseConfig(
    params: ReleaseConfigUpdateReleaseConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      '/api/v1/release-config',
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
}

export interface ReleaseConfigRetrieveReleaseConfigParams {
  'td-project-id': string;
}

export interface ReleaseConfigUpdateReleaseConfigParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  git_branch_pattern?: string;

  /**
   * Body param:
   */
  git_tag_pattern?: string;

  /**
   * Body param:
   */
  prepare_version_script_id?: string;

  /**
   * Body param:
   */
  prepare_workflow_id?: string;

  /**
   * Body param:
   */
  prepare_workflow_provider?: string;

  /**
   * Body param:
   */
  status?: 'NOT_CONFIGURED' | 'DISABLED' | 'ENABLED';
}

export declare namespace ReleaseConfig {
  export {
    type ReleaseConfigRetrieveReleaseConfigParams as ReleaseConfigRetrieveReleaseConfigParams,
    type ReleaseConfigUpdateReleaseConfigParams as ReleaseConfigUpdateReleaseConfigParams,
  };
}
