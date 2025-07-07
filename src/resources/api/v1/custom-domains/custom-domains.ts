// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as VerifyAPI from './verify';
import { Verify, VerifyCreateParams, VerifyRetrieveParams } from './verify';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class CustomDomains extends APIResource {
  verify: VerifyAPI.Verify = new VerifyAPI.Verify(this._client);

  /**
   * Get a specific custom domain by its ID
   */
  retrieve(id: string, params: CustomDomainRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/custom-domains/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Update a custom domain (Admin only)
   */
  update(id: string, params: CustomDomainUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.patch(
      path`/api/v1/custom-domains/${id}`,
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
   * Delete a custom domain (Admin only)
   */
  delete(id: string, params: CustomDomainDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.delete(path`/api/v1/custom-domains/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Create a new custom domain for a project (Admin only)
   */
  customDomains(params: CustomDomainCustomDomainsParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.post(
      '/api/v1/custom-domains',
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
   * Get all custom domains for a project
   */
  retrieveCustomDomains(
    params: CustomDomainRetrieveCustomDomainsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/custom-domains', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface CustomDomainRetrieveParams {
  'td-project-id': string;
}

export interface CustomDomainUpdateParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  environment?: 'PRODUCTION' | 'DEVELOPMENT' | 'PREVIEW';

  /**
   * Body param:
   */
  redirect_type?: number;

  /**
   * Body param:
   */
  redirect_url?: string;

  /**
   * Body param:
   */
  status?: 'NO_DEPLOYMENT' | 'CONFIGURED_CORRECTLY' | 'VERIFICATION_NEEDED';
}

export interface CustomDomainDeleteParams {
  'td-project-id': string;
}

export interface CustomDomainCustomDomainsParams {
  /**
   * Body param:
   */
  domain: string;

  /**
   * Body param:
   */
  environment: 'PRODUCTION' | 'DEVELOPMENT' | 'PREVIEW';

  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  redirect_type?: number;

  /**
   * Body param:
   */
  redirect_url?: string;
}

export interface CustomDomainRetrieveCustomDomainsParams {
  'td-project-id': string;
}

CustomDomains.Verify = Verify;

export declare namespace CustomDomains {
  export {
    type CustomDomainRetrieveParams as CustomDomainRetrieveParams,
    type CustomDomainUpdateParams as CustomDomainUpdateParams,
    type CustomDomainDeleteParams as CustomDomainDeleteParams,
    type CustomDomainCustomDomainsParams as CustomDomainCustomDomainsParams,
    type CustomDomainRetrieveCustomDomainsParams as CustomDomainRetrieveCustomDomainsParams,
  };

  export {
    Verify as Verify,
    type VerifyCreateParams as VerifyCreateParams,
    type VerifyRetrieveParams as VerifyRetrieveParams,
  };
}
