// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as RunsAPI from './runs';
import { RunListParams, RunRetrieveParams, RunTriggerParams, Runs } from './runs';
import { APIPromise } from '../../../../../../core/api-promise';
import { buildHeaders } from '../../../../../../internal/headers';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Workflows extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Fetches all workflows for a specific provider.
   */
  list(
    providerType: 'GITHUB' | 'BITRISE' | 'VERCEL' | 'CIRCLE_CI' | 'CODE_MAGIC' | 'EXPO',
    params: WorkflowListParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get(path`/api/v1/workflows/providers/${providerType}/workflows`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Fetches parameters for a specific workflow.
   */
  retrieveParams(
    workflowID: string,
    params: WorkflowRetrieveParamsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { providerType, 'td-project-id': tdProjectID } = params;
    return this._client.get(
      path`/api/v1/workflows/providers/${providerType}/workflows/${workflowID}/params`,
      {
        ...options,
        headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
      },
    );
  }
}

export interface WorkflowListParams {
  'td-project-id': string;
}

export interface WorkflowRetrieveParamsParams {
  /**
   * Path param:
   */
  providerType: 'GITHUB' | 'BITRISE' | 'VERCEL' | 'CIRCLE_CI' | 'CODE_MAGIC' | 'EXPO';

  /**
   * Header param:
   */
  'td-project-id': string;
}

Workflows.Runs = Runs;

export declare namespace Workflows {
  export {
    type WorkflowListParams as WorkflowListParams,
    type WorkflowRetrieveParamsParams as WorkflowRetrieveParamsParams,
  };

  export {
    Runs as Runs,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
    type RunTriggerParams as RunTriggerParams,
  };
}
