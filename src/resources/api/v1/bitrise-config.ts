// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';

export class BitriseConfig extends APIResource {
  /**
   * Fetches the Bitrise configuration for a specific project.
   */
  retrieveBitriseConfig(
    params: BitriseConfigRetrieveBitriseConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/bitrise-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Updates the Bitrise configuration for a specific project.
   */
  updateBitriseConfig(
    params: BitriseConfigUpdateBitriseConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      '/api/v1/bitrise-config',
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

export interface BitriseConfigRetrieveBitriseConfigParams {
  'td-project-id': string;
}

export interface BitriseConfigUpdateBitriseConfigParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  api_token?: string;

  /**
   * Body param:
   */
  app_slug?: string;

  /**
   * Body param:
   */
  status?: 'NOT_CONFIGURED' | 'DISABLED' | 'ENABLED';

  /**
   * Body param:
   */
  trigger_token?: string;
}

export declare namespace BitriseConfig {
  export {
    type BitriseConfigRetrieveBitriseConfigParams as BitriseConfigRetrieveBitriseConfigParams,
    type BitriseConfigUpdateBitriseConfigParams as BitriseConfigUpdateBitriseConfigParams,
  };
}
