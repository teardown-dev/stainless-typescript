// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Bitrise extends APIResource {
  /**
   * Fetches the latest Bitrise builds for the specified project ID.
   */
  retrieveBuilds(params: BitriseRetrieveBuildsParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/bitrise/builds', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface BitriseRetrieveBuildsParams {
  'td-project-id': string;
}

export declare namespace Bitrise {
  export { type BitriseRetrieveBuildsParams as BitriseRetrieveBuildsParams };
}
