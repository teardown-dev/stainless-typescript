// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';

export class SentryConfig extends APIResource {
  /**
   * Fetches the Sentry configuration for a specific project.
   */
  retrieveSentryConfig(
    params: SentryConfigRetrieveSentryConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/sentry-config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Updates the Sentry configuration for a specific project.
   */
  updateSentryConfig(
    params: SentryConfigUpdateSentryConfigParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      '/api/v1/sentry-config',
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

export interface SentryConfigRetrieveSentryConfigParams {
  'td-project-id': string;
}

export interface SentryConfigUpdateSentryConfigParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  token?: string;

  /**
   * Body param:
   */
  organisation_slug?: string;

  /**
   * Body param:
   */
  project_slug?: string;

  /**
   * Body param:
   */
  status?: 'NOT_CONFIGURED' | 'DISABLED' | 'ENABLED';
}

export declare namespace SentryConfig {
  export {
    type SentryConfigRetrieveSentryConfigParams as SentryConfigRetrieveSentryConfigParams,
    type SentryConfigUpdateSentryConfigParams as SentryConfigUpdateSentryConfigParams,
  };
}
