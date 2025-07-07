// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class DistributionGroups extends APIResource {
  /**
   * Fetches details for a specific Google Play testing track by its name (internal,
   * alpha, beta, or production), associated with the specified project ID. Note:
   * These tracks are predefined by Google Play and cannot be created or modified.
   */
  retrieve(
    track: string,
    params: DistributionGroupRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/google-play/distribution-groups/${track}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Fetches a list of Google Play testing tracks (internal, alpha, beta, production)
   * available for the specified project ID. Note: These tracks are predefined by
   * Google Play and cannot be created or modified.
   */
  retrieveDistributionGroups(
    params: DistributionGroupRetrieveDistributionGroupsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/google-play/distribution-groups', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface DistributionGroupRetrieveParams {
  'td-project-id': string;
}

export interface DistributionGroupRetrieveDistributionGroupsParams {
  'td-project-id': string;
}

export declare namespace DistributionGroups {
  export {
    type DistributionGroupRetrieveParams as DistributionGroupRetrieveParams,
    type DistributionGroupRetrieveDistributionGroupsParams as DistributionGroupRetrieveDistributionGroupsParams,
  };
}
