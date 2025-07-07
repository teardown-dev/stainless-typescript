// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';

export class VersionConfig extends APIResource {
  /**
   * Fetches the version configuration for a specific project.
   */
  retrieveVersionConfig(
    params: VersionConfigRetrieveVersionConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/version-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Updates the version configuration for a specific project.
   */
  updateVersionConfig(
    params: VersionConfigUpdateVersionConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      '/api/v1/version-config',
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

export interface VersionConfigRetrieveVersionConfigParams {
  'td-project-id': string;
}

export interface VersionConfigUpdateVersionConfigParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  status?: 'NOT_CONFIGURED' | 'DISABLED' | 'ENABLED';
}

export declare namespace VersionConfig {
  export {
    type VersionConfigRetrieveVersionConfigParams as VersionConfigRetrieveVersionConfigParams,
    type VersionConfigUpdateVersionConfigParams as VersionConfigUpdateVersionConfigParams,
  };
}
