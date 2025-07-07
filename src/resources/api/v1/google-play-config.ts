// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';

export class GooglePlayConfig extends APIResource {
  /**
   * Fetches the Google Play configuration for a specific project.
   */
  retrieveGooglePlayConfig(
    params: GooglePlayConfigRetrieveGooglePlayConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/google-play-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Updates the Google Play configuration for a specific project.
   */
  updateGooglePlayConfig(
    params: GooglePlayConfigUpdateGooglePlayConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      '/api/v1/google-play-config',
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

export interface GooglePlayConfigRetrieveGooglePlayConfigParams {
  'td-project-id': string;
}

export interface GooglePlayConfigUpdateGooglePlayConfigParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  package_name?: string;

  /**
   * Body param:
   */
  service_account_json?: string;

  /**
   * Body param:
   */
  status?: 'NOT_CONFIGURED' | 'DISABLED' | 'ENABLED';
}

export declare namespace GooglePlayConfig {
  export {
    type GooglePlayConfigRetrieveGooglePlayConfigParams as GooglePlayConfigRetrieveGooglePlayConfigParams,
    type GooglePlayConfigUpdateGooglePlayConfigParams as GooglePlayConfigUpdateGooglePlayConfigParams,
  };
}
