// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DistributionGroupsAPI from './distribution-groups';
import {
  DistributionGroupRetrieveDistributionGroupsParams,
  DistributionGroupRetrieveParams,
  DistributionGroups,
} from './distribution-groups';
import * as VersionsAPI from './versions';
import { VersionListParams, VersionRetrieveParams, Versions } from './versions';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class GooglePlay extends APIResource {
  distributionGroups: DistributionGroupsAPI.DistributionGroups = new DistributionGroupsAPI.DistributionGroups(
    this._client,
  );
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Fetches a list of internal app sharing builds from Google Play associated with
   * the specified project ID.
   */
  retrieveBuilds(params: GooglePlayRetrieveBuildsParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/google-play/builds', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Verifies if the Google Play credentials (service account key) associated with
   * the project ID are valid by attempting a simple API call (listing tracks).
   */
  retrieveStatus(params: GooglePlayRetrieveStatusParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/google-play/status', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface GooglePlayRetrieveBuildsParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Query param:
   */
  limit?: number;
}

export interface GooglePlayRetrieveStatusParams {
  'td-project-id': string;
}

GooglePlay.DistributionGroups = DistributionGroups;
GooglePlay.Versions = Versions;

export declare namespace GooglePlay {
  export {
    type GooglePlayRetrieveBuildsParams as GooglePlayRetrieveBuildsParams,
    type GooglePlayRetrieveStatusParams as GooglePlayRetrieveStatusParams,
  };

  export {
    DistributionGroups as DistributionGroups,
    type DistributionGroupRetrieveParams as DistributionGroupRetrieveParams,
    type DistributionGroupRetrieveDistributionGroupsParams as DistributionGroupRetrieveDistributionGroupsParams,
  };

  export {
    Versions as Versions,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionListParams as VersionListParams,
  };
}
