// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../../internal/uploads';

export class DistributionGroups extends APIResource {
  /**
   * Creates a new App Store Connect distribution group for the specified project.
   * Requires admin or owner access.
   */
  distributionGroups(
    params: DistributionGroupDistributionGroupsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.post(
      '/api/v1/app-store-connect/distribution-groups',
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
   * Fetches a list of App Store Connect distribution groups (internal and external
   * testing groups) associated with the specified project ID.
   */
  retrieveDistributionGroups(
    params: DistributionGroupRetrieveDistributionGroupsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/app-store-connect/distribution-groups', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface DistributionGroupDistributionGroupsParams {
  /**
   * Body param:
   */
  name: string;

  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  publicLinkEnabled?: boolean;
}

export interface DistributionGroupRetrieveDistributionGroupsParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Query param:
   */
  limit?: number;
}

export declare namespace DistributionGroups {
  export {
    type DistributionGroupDistributionGroupsParams as DistributionGroupDistributionGroupsParams,
    type DistributionGroupRetrieveDistributionGroupsParams as DistributionGroupRetrieveDistributionGroupsParams,
  };
}
