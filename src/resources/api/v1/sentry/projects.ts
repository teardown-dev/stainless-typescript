// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Retrieves a specific Sentry project by its slug.
   */
  retrieve(slug: string, params: ProjectRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/sentry/projects/${slug}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Retrieves all Sentry projects for the configured organization.
   */
  list(params: ProjectListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/sentry/projects', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Search for Sentry projects by name, slug, or platform.
   */
  retrieveSearch(params: ProjectRetrieveSearchParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/sentry/projects/search', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Retrieves a summary of all Sentry projects with reduced information.
   */
  retrieveSummary(params: ProjectRetrieveSummaryParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/sentry/projects/summary', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface ProjectRetrieveParams {
  'td-project-id': string;
}

export interface ProjectListParams {
  'td-project-id': string;
}

export interface ProjectRetrieveSearchParams {
  /**
   * Query param: Search query to filter projects by name, slug, or platform
   */
  q: string;

  /**
   * Header param:
   */
  'td-project-id': string;
}

export interface ProjectRetrieveSummaryParams {
  'td-project-id': string;
}

export declare namespace Projects {
  export {
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectListParams as ProjectListParams,
    type ProjectRetrieveSearchParams as ProjectRetrieveSearchParams,
    type ProjectRetrieveSummaryParams as ProjectRetrieveSummaryParams,
  };
}
