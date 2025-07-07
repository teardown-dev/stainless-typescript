// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../../internal/uploads';

export class Repositories extends APIResource {
  /**
   * Fetches a list of repositories accessible by the installed GitHub App for the
   * specified organisation ID.
   */
  list(params: RepositoryListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-organisation-id': tdOrganisationID } = params;
    return this._client.get('/api/v1/github/repositories', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-organisation-id': tdOrganisationID }, options?.headers]),
    });
  }

  /**
   * Links a specific GitHub repository (by its ID) to the specified project ID,
   * updating the project's owner and repo details.
   */
  connect(body: RepositoryConnectParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/api/v1/github/repositories/connect',
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Fetches details of the specific GitHub repository linked to the specified
   * project ID.
   */
  retrieveProject(params: RepositoryRetrieveProjectParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/github/repositories/project', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface RepositoryListParams {
  'td-organisation-id': string;
}

export interface RepositoryConnectParams {
  projectId: string;

  repositoryId: string;
}

export interface RepositoryRetrieveProjectParams {
  'td-project-id': string;
}

export declare namespace Repositories {
  export {
    type RepositoryListParams as RepositoryListParams,
    type RepositoryConnectParams as RepositoryConnectParams,
    type RepositoryRetrieveProjectParams as RepositoryRetrieveProjectParams,
  };
}
