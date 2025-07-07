// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Installation extends APIResource {
  /**
   * Starts the process for installing the GitHub App for the specified organisation.
   * Returns a URL to redirect the user to GitHub.
   */
  create(params: InstallationCreateParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-organisation-id': tdOrganisationID } = params;
    return this._client.post('/api/v1/github/installation', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-organisation-id': tdOrganisationID }, options?.headers]),
    });
  }

  /**
   * Retrieves details about the GitHub App installation associated with the
   * specified organisation ID.
   */
  list(params: InstallationListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-organisation-id': tdOrganisationID } = params;
    return this._client.get('/api/v1/github/installation', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-organisation-id': tdOrganisationID }, options?.headers]),
    });
  }

  /**
   * Handles the callback from GitHub after a user installs or authorizes the GitHub
   * App. Associates the installation ID with the organisation based on the state
   * parameter.
   */
  retrieveCallback(query: InstallationRetrieveCallbackParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/github/installation/callback', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InstallationCreateParams {
  'td-organisation-id': string;
}

export interface InstallationListParams {
  'td-organisation-id': string;
}

export interface InstallationRetrieveCallbackParams {
  installation_id: string;

  state: string;
}

export declare namespace Installation {
  export {
    type InstallationCreateParams as InstallationCreateParams,
    type InstallationListParams as InstallationListParams,
    type InstallationRetrieveCallbackParams as InstallationRetrieveCallbackParams,
  };
}
