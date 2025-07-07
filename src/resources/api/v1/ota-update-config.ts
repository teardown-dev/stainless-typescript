// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';

export class OtaUpdateConfig extends APIResource {
  /**
   * Fetches the OTA Update configuration for a specific project.
   */
  retrieveOtaUpdateConfig(
    params: OtaUpdateConfigRetrieveOtaUpdateConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/ota-update-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Updates the OTA Update configuration for a specific project.
   */
  updateOtaUpdateConfig(
    params: OtaUpdateConfigUpdateOtaUpdateConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      '/api/v1/ota-update-config',
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

export interface OtaUpdateConfigRetrieveOtaUpdateConfigParams {
  'td-project-id': string;
}

export interface OtaUpdateConfigUpdateOtaUpdateConfigParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  auto_download?: boolean;

  /**
   * Body param:
   */
  auto_install?: boolean;

  /**
   * Body param:
   */
  channels?: Array<string>;

  /**
   * Body param:
   */
  require_user_approval?: boolean;

  /**
   * Body param:
   */
  status?: 'NOT_CONFIGURED' | 'DISABLED' | 'ENABLED';

  /**
   * Body param:
   */
  update_check_interval?: number;

  /**
   * Body param:
   */
  update_url?: string;
}

export declare namespace OtaUpdateConfig {
  export {
    type OtaUpdateConfigRetrieveOtaUpdateConfigParams as OtaUpdateConfigRetrieveOtaUpdateConfigParams,
    type OtaUpdateConfigUpdateOtaUpdateConfigParams as OtaUpdateConfigUpdateOtaUpdateConfigParams,
  };
}
