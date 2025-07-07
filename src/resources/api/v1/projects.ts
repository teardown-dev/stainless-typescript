// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Creates a new project for an organization. Requires organization-level access.
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/api/v1/projects',
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Fetches details for a specific project by its ID. Requires project-level access.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/projects/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates a project by ID. Requires project-level access.
   */
  update(id: string, body: ProjectUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(
      path`/api/v1/projects/${id}`,
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Fetches a list of projects belonging to the organisation associated with the
   * current context (requires organisation-level access).
   */
  list(params: ProjectListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-organisation-id': tdOrganisationID } = params;
    return this._client.get('/api/v1/projects', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-organisation-id': tdOrganisationID }, options?.headers]),
    });
  }

  /**
   * Deletes a project by ID. Requires project-level access.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/projects/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Transfers a project from its current organisation to a new destination
   * organisation. Requires access to both the project and the destination
   * organisation.
   */
  transfer(body: ProjectTransferParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/api/v1/projects/transfer',
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export interface ProjectCreateParams {
  name: string;

  organisation_id: string;

  project_type: 'TAURI' | 'REACT_NATIVE' | 'REACT_NATIVE_EXPO' | 'ANDROID' | 'IOS' | 'LYNX' | 'FLUTTER';

  working_branch: string;

  git_connection?: 'GITHUB' | 'GITLAB' | 'BITBUCKET';
}

export interface ProjectUpdateParams {
  git_connection?: 'GITHUB' | 'GITLAB' | 'BITBUCKET';

  name?: string;

  project_type?: 'TAURI' | 'REACT_NATIVE' | 'REACT_NATIVE_EXPO' | 'ANDROID' | 'IOS' | 'LYNX' | 'FLUTTER';

  working_branch?: string;
}

export interface ProjectListParams {
  'td-organisation-id': string;
}

export interface ProjectTransferParams {
  destination_org_id: string;

  project_id: string;
}

export declare namespace Projects {
  export {
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectTransferParams as ProjectTransferParams,
  };
}
