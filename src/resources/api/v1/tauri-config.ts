// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';

export class TauriConfig extends APIResource {
  /**
   * Fetches the Tauri configuration for a specific project.
   */
  retrieveTauriConfig(
    params: TauriConfigRetrieveTauriConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/tauri-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Updates the Tauri configuration for a specific project.
   */
  updateTauriConfig(params: TauriConfigUpdateTauriConfigParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      '/api/v1/tauri-config',
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

export interface TauriConfigRetrieveTauriConfigParams {
  'td-project-id': string;
}

export interface TauriConfigUpdateTauriConfigParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  app_name?: string;

  /**
   * Body param:
   */
  build_number?: string;

  /**
   * Body param:
   */
  bundle_identifier?: string;

  /**
   * Body param:
   */
  linux_targets?: Array<string>;

  /**
   * Body param:
   */
  macos_targets?: Array<string>;

  /**
   * Body param:
   */
  status?: 'NOT_CONFIGURED' | 'DISABLED' | 'ENABLED';

  /**
   * Body param:
   */
  version?: string;

  /**
   * Body param:
   */
  windows_targets?: Array<string>;
}

export declare namespace TauriConfig {
  export {
    type TauriConfigRetrieveTauriConfigParams as TauriConfigRetrieveTauriConfigParams,
    type TauriConfigUpdateTauriConfigParams as TauriConfigUpdateTauriConfigParams,
  };
}
