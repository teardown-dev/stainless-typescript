// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Get a specific integration
   */
  retrieve(
    type: 'APP_STORE_CONNECT' | 'GOOGLE_PLAY_STORE' | 'BITRISE' | 'SENTRY' | 'VERCEL' | 'POSTHOG' | 'EXPO',
    params: IntegrationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/integrations/${type}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Save the fields for a specific integration type
   */
  update(
    type: 'APP_STORE_CONNECT' | 'GOOGLE_PLAY_STORE' | 'BITRISE' | 'SENTRY' | 'VERCEL' | 'POSTHOG' | 'EXPO',
    params: IntegrationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.put(path`/api/v1/integrations/${type}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Get all integrations
   */
  list(params: IntegrationListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/integrations', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Validate the credentials for a specific integration type
   */
  retrieveValidate(
    type: 'APP_STORE_CONNECT' | 'GOOGLE_PLAY_STORE' | 'BITRISE' | 'SENTRY' | 'VERCEL' | 'POSTHOG' | 'EXPO',
    params: IntegrationRetrieveValidateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/integrations/${type}/validate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Get the configuration fields for a specific integration type
   */
  retrieveValues(
    type: 'APP_STORE_CONNECT' | 'GOOGLE_PLAY_STORE' | 'BITRISE' | 'SENTRY' | 'VERCEL' | 'POSTHOG' | 'EXPO',
    params: IntegrationRetrieveValuesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/integrations/${type}/values`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Update the status of a specific integration type
   */
  updateStatus(
    type: 'APP_STORE_CONNECT' | 'GOOGLE_PLAY_STORE' | 'BITRISE' | 'SENTRY' | 'VERCEL' | 'POSTHOG' | 'EXPO',
    params: IntegrationUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.put(
      path`/api/v1/integrations/${type}/status`,
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

export interface IntegrationRetrieveParams {
  'td-project-id': string;
}

export interface IntegrationUpdateParams {
  'td-project-id': string;
}

export interface IntegrationListParams {
  'td-project-id': string;
}

export interface IntegrationRetrieveValidateParams {
  'td-project-id': string;
}

export interface IntegrationRetrieveValuesParams {
  'td-project-id': string;
}

export interface IntegrationUpdateStatusParams {
  /**
   * Body param:
   */
  status: 'NOT_CONFIGURED' | 'PENDING' | 'ENABLED' | 'DISABLED';

  /**
   * Header param:
   */
  'td-project-id': string;
}

export declare namespace Integrations {
  export {
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationRetrieveValidateParams as IntegrationRetrieveValidateParams,
    type IntegrationRetrieveValuesParams as IntegrationRetrieveValuesParams,
    type IntegrationUpdateStatusParams as IntegrationUpdateStatusParams,
  };
}
