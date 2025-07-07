// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';

export class ExpoConfig extends APIResource {
  /**
   * Fetches the Expo configuration for a specific project.
   */
  retrieveExpoConfig(params: ExpoConfigRetrieveExpoConfigParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/expo-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Updates the Expo configuration for a specific project.
   */
  updateExpoConfig(params: ExpoConfigUpdateExpoConfigParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      '/api/v1/expo-config',
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

export interface ExpoConfigRetrieveExpoConfigParams {
  'td-project-id': string;
}

export interface ExpoConfigUpdateExpoConfigParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  app_id?: string;

  /**
   * Body param:
   */
  issuer_id?: string;

  /**
   * Body param:
   */
  private_key?: string;

  /**
   * Body param:
   */
  private_key_id?: string;

  /**
   * Body param:
   */
  status?: 'NOT_CONFIGURED' | 'PENDING' | 'DISABLED' | 'ENABLED';
}

export declare namespace ExpoConfig {
  export {
    type ExpoConfigRetrieveExpoConfigParams as ExpoConfigRetrieveExpoConfigParams,
    type ExpoConfigUpdateExpoConfigParams as ExpoConfigUpdateExpoConfigParams,
  };
}
