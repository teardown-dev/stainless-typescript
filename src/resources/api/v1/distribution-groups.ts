// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class DistributionGroups extends APIResource {
  /**
   * Get a specific distribution group by ID
   */
  retrieve(
    groupID: string,
    params: DistributionGroupRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/distribution-groups/${groupID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Get all distribution groups for a project
   */
  retrieveDistributionGroups(
    params: DistributionGroupRetrieveDistributionGroupsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/distribution-groups', {
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
