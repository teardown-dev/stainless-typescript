// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';

export class BuildConfig extends APIResource {
  /**
   * Fetches the build configuration for a specific project.
   */
  retrieveBuildConfig(
    params: BuildConfigRetrieveBuildConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/build-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Updates the build configuration for a specific project.
   */
  updateBuildConfig(params: BuildConfigUpdateBuildConfigParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      '/api/v1/build-config',
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

export interface BuildConfigRetrieveBuildConfigParams {
  'td-project-id': string;
}

export interface BuildConfigUpdateBuildConfigParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  status?: 'NOT_CONFIGURED' | 'DISABLED' | 'ENABLED';

  /**
   * Body param:
   */
  tag_pattern?: string;

  /**
   * Body param:
   */
  tag_pattern_target?: string;

  /**
   * Body param:
   */
  workflow_id?: string;

  /**
   * Body param:
   */
  workflow_provider?: string;
}

export declare namespace BuildConfig {
  export {
    type BuildConfigRetrieveBuildConfigParams as BuildConfigRetrieveBuildConfigParams,
    type BuildConfigUpdateBuildConfigParams as BuildConfigUpdateBuildConfigParams,
  };
}
