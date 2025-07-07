// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';

export class AppstoreConnectConfig extends APIResource {
  /**
   * Fetches the App Store Connect configuration for a specific project.
   */
  retrieveAppstoreConnectConfig(
    params: AppstoreConnectConfigRetrieveAppstoreConnectConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/appstore-connect-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Updates the App Store Connect configuration for a specific project.
   */
  updateAppstoreConnectConfig(
    params: AppstoreConnectConfigUpdateAppstoreConnectConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      '/api/v1/appstore-connect-config',
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

export interface AppstoreConnectConfigRetrieveAppstoreConnectConfigParams {
  'td-project-id': string;
}

export interface AppstoreConnectConfigUpdateAppstoreConnectConfigParams {
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
  status?: 'NOT_CONFIGURED' | 'DISABLED' | 'ENABLED';
}

export declare namespace AppstoreConnectConfig {
  export {
    type AppstoreConnectConfigRetrieveAppstoreConnectConfigParams as AppstoreConnectConfigRetrieveAppstoreConnectConfigParams,
    type AppstoreConnectConfigUpdateAppstoreConnectConfigParams as AppstoreConnectConfigUpdateAppstoreConnectConfigParams,
  };
}
