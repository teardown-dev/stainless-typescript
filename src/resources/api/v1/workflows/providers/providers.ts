// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as WorkflowsAPI from './workflows/workflows';
import { WorkflowListParams, WorkflowRetrieveParamsParams, Workflows } from './workflows/workflows';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Providers extends APIResource {
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);

  /**
   * Fetches details for a specific workflow provider.
   */
  retrieve(
    providerType: 'GITHUB' | 'BITRISE' | 'VERCEL' | 'CIRCLE_CI' | 'CODE_MAGIC' | 'EXPO',
    params: ProviderRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/workflows/providers/${providerType}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Fetches all available workflow providers for the specified project.
   */
  list(params: ProviderListParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/workflows/providers', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface ProviderRetrieveParams {
  'td-project-id': string;
}

export interface ProviderListParams {
  'td-project-id': string;
}

Providers.Workflows = Workflows;

export declare namespace Providers {
  export {
    type ProviderRetrieveParams as ProviderRetrieveParams,
    type ProviderListParams as ProviderListParams,
  };

  export {
    Workflows as Workflows,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowRetrieveParamsParams as WorkflowRetrieveParamsParams,
  };
}
