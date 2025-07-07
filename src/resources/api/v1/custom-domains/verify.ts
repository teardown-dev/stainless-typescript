// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Verify extends APIResource {
  /**
   * Trigger verification of a domain's DNS status (Admin only)
   */
  create(id: string, params: VerifyCreateParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.post(path`/api/v1/custom-domains/${id}/verify`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Get DNS verification records for a domain
   */
  retrieve(domain: string, params: VerifyRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/custom-domains/verify/${domain}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface VerifyCreateParams {
  'td-project-id': string;
}

export interface VerifyRetrieveParams {
  'td-project-id': string;
}

export declare namespace Verify {
  export { type VerifyCreateParams as VerifyCreateParams, type VerifyRetrieveParams as VerifyRetrieveParams };
}
