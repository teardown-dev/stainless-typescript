// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BranchesAPI from './branches';
import { BranchListParams, BranchRetrieveRefParams, Branches } from './branches';
import * as CommitsAPI from './commits';
import { CommitListParams, CommitRetrieveRefParams, Commits } from './commits';
import * as InstallationAPI from './installation';
import {
  Installation,
  InstallationCreateParams,
  InstallationListParams,
  InstallationRetrieveCallbackParams,
} from './installation';
import * as RepositoriesAPI from './repositories';
import {
  Repositories,
  RepositoryConnectParams,
  RepositoryListParams,
  RepositoryRetrieveProjectParams,
} from './repositories';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class GitHub extends APIResource {
  installation: InstallationAPI.Installation = new InstallationAPI.Installation(this._client);
  commits: CommitsAPI.Commits = new CommitsAPI.Commits(this._client);
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);
  repositories: RepositoriesAPI.Repositories = new RepositoriesAPI.Repositories(this._client);

  /**
   * Fetches a paginated list of tags from the GitHub repository associated with the
   * specified project ID.
   */
  retrieveTags(params: GitHubRetrieveTagsParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/github/tags', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface GitHubRetrieveTagsParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Query param:
   */
  page?: number;

  /**
   * Query param:
   */
  pageSize?: number;
}

GitHub.Installation = Installation;
GitHub.Commits = Commits;
GitHub.Branches = Branches;
GitHub.Repositories = Repositories;

export declare namespace GitHub {
  export { type GitHubRetrieveTagsParams as GitHubRetrieveTagsParams };

  export {
    Installation as Installation,
    type InstallationCreateParams as InstallationCreateParams,
    type InstallationListParams as InstallationListParams,
    type InstallationRetrieveCallbackParams as InstallationRetrieveCallbackParams,
  };

  export {
    Commits as Commits,
    type CommitListParams as CommitListParams,
    type CommitRetrieveRefParams as CommitRetrieveRefParams,
  };

  export {
    Branches as Branches,
    type BranchListParams as BranchListParams,
    type BranchRetrieveRefParams as BranchRetrieveRefParams,
  };

  export {
    Repositories as Repositories,
    type RepositoryListParams as RepositoryListParams,
    type RepositoryConnectParams as RepositoryConnectParams,
    type RepositoryRetrieveProjectParams as RepositoryRetrieveProjectParams,
  };
}
