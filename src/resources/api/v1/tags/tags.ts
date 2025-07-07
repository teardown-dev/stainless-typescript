// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReleaseAPI from './release';
import { Release, ReleaseListParams, ReleaseRetrieveParams } from './release';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tags extends APIResource {
  release: ReleaseAPI.Release = new ReleaseAPI.Release(this._client);

  /**
   * Fetches details for a specific tag within the specified project's linked Git
   * repository.
   */
  retrieve(tagName: string, params: TagRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/tags/${tagName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Fetches all tags for the specified project from its linked Git repository.
   */
  list(params: TagListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/tags', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface TagRetrieveParams {
  'td-project-id': string;
}

export interface TagListParams {
  'td-project-id': string;
}

Tags.Release = Release;

export declare namespace Tags {
  export { type TagRetrieveParams as TagRetrieveParams, type TagListParams as TagListParams };

  export {
    Release as Release,
    type ReleaseRetrieveParams as ReleaseRetrieveParams,
    type ReleaseListParams as ReleaseListParams,
  };
}
