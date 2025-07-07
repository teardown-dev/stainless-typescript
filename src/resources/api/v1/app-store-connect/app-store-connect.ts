// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BuildsAPI from './builds';
import { BuildListParams, BuildRetrieveParams, Builds } from './builds';
import * as DistributionGroupsAPI from './distribution-groups';
import {
  DistributionGroupDistributionGroupsParams,
  DistributionGroupRetrieveDistributionGroupsParams,
  DistributionGroups,
} from './distribution-groups';
import * as VersionsAPI from './versions';
import { VersionListParams, VersionRetrieveParams, Versions } from './versions';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../../internal/uploads';

export class AppStoreConnect extends APIResource {
  distributionGroups: DistributionGroupsAPI.DistributionGroups = new DistributionGroupsAPI.DistributionGroups(
    this._client,
  );
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  builds: BuildsAPI.Builds = new BuildsAPI.Builds(this._client);

  /**
   * Verifies if the App Store Connect credentials associated with the project ID are
   * valid by attempting a simple API call (listing apps).
   */
  retrieveStatus(params: AppStoreConnectRetrieveStatusParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/app-store-connect/status', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Generates a short-lived JWT token for authenticating with the App Store Connect
   * API using the provided credentials. Requires user access to the specified
   * project.
   */
  token(params: AppStoreConnectTokenParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...body } = params;
    return this._client.post(
      '/api/v1/app-store-connect/token',
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

export interface AppStoreConnectRetrieveStatusParams {
  'td-project-id': string;
}

export interface AppStoreConnectTokenParams {
  /**
   * Body param:
   */
  issuerId: string;

  /**
   * Body param:
   */
  privateKey: string;

  /**
   * Body param:
   */
  privateKeyId: string;

  /**
   * Header param:
   */
  'td-project-id': string;
}

AppStoreConnect.DistributionGroups = DistributionGroups;
AppStoreConnect.Versions = Versions;
AppStoreConnect.Builds = Builds;

export declare namespace AppStoreConnect {
  export {
    type AppStoreConnectRetrieveStatusParams as AppStoreConnectRetrieveStatusParams,
    type AppStoreConnectTokenParams as AppStoreConnectTokenParams,
  };

  export {
    DistributionGroups as DistributionGroups,
    type DistributionGroupDistributionGroupsParams as DistributionGroupDistributionGroupsParams,
    type DistributionGroupRetrieveDistributionGroupsParams as DistributionGroupRetrieveDistributionGroupsParams,
  };

  export {
    Versions as Versions,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionListParams as VersionListParams,
  };

  export {
    Builds as Builds,
    type BuildRetrieveParams as BuildRetrieveParams,
    type BuildListParams as BuildListParams,
  };
}
