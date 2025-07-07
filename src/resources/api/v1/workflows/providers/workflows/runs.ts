// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import { APIPromise } from '../../../../../../core/api-promise';
import { buildHeaders } from '../../../../../../internal/headers';
import { RequestOptions } from '../../../../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../../../../internal/uploads';
import { path } from '../../../../../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Fetches detailed information for a specific workflow execution.
   */
  retrieve(runID: string, params: RunRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { providerType, workflowId, 'td-project-id': tdProjectID } = params;
    return this._client.get(
      path`/api/v1/workflows/providers/${providerType}/workflows/${workflowId}/runs/${runID}`,
      {
        ...options,
        headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
      },
    );
  }

  /**
   * Fetches execution history for a specific workflow. Can be filtered by status.
   */
  list(workflowID: string, params: RunListParams, options?: RequestOptions): APIPromise<void> {
    const { providerType, 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get(path`/api/v1/workflows/providers/${providerType}/workflows/${workflowID}/runs`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Triggers a workflow run for a specific workflow provider.
   */
  trigger(workflowID: string, params: RunTriggerParams, options?: RequestOptions): APIPromise<void> {
    const { providerType, 'td-project-id': tdProjectID, ...body } = params;
    return this._client.post(
      path`/api/v1/workflows/providers/${providerType}/workflows/${workflowID}/runs/trigger`,
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

export interface RunRetrieveParams {
  /**
   * Path param:
   */
  providerType: 'GITHUB' | 'BITRISE' | 'VERCEL' | 'CIRCLE_CI' | 'CODE_MAGIC' | 'EXPO';

  /**
   * Path param:
   */
  workflowId: string;

  /**
   * Header param:
   */
  'td-project-id': string;
}

export interface RunListParams {
  /**
   * Path param:
   */
  providerType: 'GITHUB' | 'BITRISE' | 'VERCEL' | 'CIRCLE_CI' | 'CODE_MAGIC' | 'EXPO';

  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Query param:
   */
  commit_sha?: string;

  /**
   * Query param:
   */
  limit?: string | number;

  /**
   * Query param:
   */
  page?: string | number;

  /**
   * Query param:
   */
  status?: Array<'UNKNOWN' | 'IDLE' | 'IN_PROGRESS' | 'SUCCESS' | 'FAILED' | 'CANCELLED'>;
}

export interface RunTriggerParams {
  /**
   * Path param:
   */
  providerType: 'GITHUB' | 'BITRISE' | 'VERCEL' | 'CIRCLE_CI' | 'CODE_MAGIC' | 'EXPO';

  /**
   * Body param:
   */
  branchName: string;

  /**
   * Body param:
   */
  commitSha: string;

  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Body param:
   */
  inputs?: unknown;
}

export declare namespace Runs {
  export {
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
    type RunTriggerParams as RunTriggerParams,
  };
}
