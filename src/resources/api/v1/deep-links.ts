// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class DeepLinks extends APIResource {
  /**
   * Get a specific deep link by its ID
   */
  retrieve(id: string, params: DeepLinkRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/deep-links/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Update a deep link (Admin only)
   */
  update(id: string, params: DeepLinkUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.patch(
      path`/api/v1/deep-links/${id}`,
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

  /**
   * Delete a deep link (Admin only)
   */
  delete(id: string, params: DeepLinkDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.delete(path`/api/v1/deep-links/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Create a new deep link for a project (Admin only)
   */
  deepLinks(params: DeepLinkDeepLinksParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.post(
      '/api/v1/deep-links',
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

  /**
   * Get a deep link by its short code (public endpoint)
   */
  retrieveByShortCode(shortCode: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/deep-links/by-code/${shortCode}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all deep links for a project
   */
  retrieveDeepLinks(params: DeepLinkRetrieveDeepLinksParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/deep-links', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface DeepLinkRetrieveParams {
  'td-project-id': string;
}

export interface DeepLinkUpdateParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  android_app_uri?: string | null;

  /**
   * Body param:
   */
  android_package_name?: string | null;

  /**
   * Body param:
   */
  android_store_url?: string | null;

  /**
   * Body param:
   */
  custom_data?: string | null;

  /**
   * Body param:
   */
  ios_app_store_id?: string | null;

  /**
   * Body param:
   */
  ios_app_uri?: string | null;

  /**
   * Body param:
   */
  ios_store_url?: string | null;

  /**
   * Body param:
   */
  title?: string;

  /**
   * Body param:
   */
  web_fallback_url?: string | null;
}

export interface DeepLinkDeleteParams {
  'td-project-id': string;
}

export interface DeepLinkDeepLinksParams {
  /**
   * Body param:
   */
  short_code: string;

  /**
   * Body param:
   */
  title: string;

  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  android_app_uri?: string | null;

  /**
   * Body param:
   */
  android_package_name?: string | null;

  /**
   * Body param:
   */
  android_store_url?: string | null;

  /**
   * Body param:
   */
  custom_data?: string | null;

  /**
   * Body param:
   */
  ios_app_store_id?: string | null;

  /**
   * Body param:
   */
  ios_app_uri?: string | null;

  /**
   * Body param:
   */
  ios_store_url?: string | null;

  /**
   * Body param:
   */
  web_fallback_url?: string | null;
}

export interface DeepLinkRetrieveDeepLinksParams {
  'td-project-id': string;
}

export declare namespace DeepLinks {
  export {
    type DeepLinkRetrieveParams as DeepLinkRetrieveParams,
    type DeepLinkUpdateParams as DeepLinkUpdateParams,
    type DeepLinkDeleteParams as DeepLinkDeleteParams,
    type DeepLinkDeepLinksParams as DeepLinkDeepLinksParams,
    type DeepLinkRetrieveDeepLinksParams as DeepLinkRetrieveDeepLinksParams,
  };
}
